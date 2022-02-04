import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import NavBar from "./components/Project2/NavBar";
import Project3 from "./components/Project3/Project3";
import Project2 from "./components/Project2/Project2";
import Project4 from "./components/Project4/Project4";
import { usePosts } from "./hooks/usePost";
import PostService from "./API/PostService";
import { useFatching } from "./hooks/useFatching";
import { getPagesCount } from "./components/Project2/utils/pages";
import PostIdPage from "./components/Project2/PostIdPage";
import Login from "./components/Project2/Login";
import Loader from "./components/Project2/UI/Loader/Loader";

// function arrNotDouble(array) {
//   const arr = [];
//   const obj = {};

//   for(let i=0; i<array.length; i++) {
//     const currentEl = array[i]; 
//     if(!(currentEl in obj)) obj[currentEl] = 1;  
//     else obj[currentEl] += 1; 
//   } 
//   const key = Object.keys(obj);
//   key.forEach( key => {
//     if(obj[key] === 1) arr.push(key); 
//   });

//   return arr;
// }

function App() {
  // let arr = [1,1,3,3,4,5] 

  //project 2

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const [modal, setModal] = useState(false);

  const [isLoading, setIsLoading] = useState(true)

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);


  const [fetchPost, isPostsLoading, postError] = useFatching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit))
  });

  const changePage = (page) => {
    setPage(page)
  }

  useEffect(() => { fetchPost(limit, page) }, [page,limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const [isAuth, setIsAuth] = useState(null);

  useEffect(()=>{
    if(localStorage.getItem('auth'))
      setIsAuth(true);
    setIsLoading(false)
  },[]);

  //project 3

  const [cardList, setCardList] = useState([
    { id: 1, order: 3, text: 'C#' },
    { id: 2, order: 1, text: 'React' },
    { id: 3, order: 2, text: 'Js' },
    { id: 4, order: 4, text: 'C++' },
    { id: 5, order: 6, text: 'Java' },
    { id: 6, order: 5, text: 'Петухон' },
  ]);

  const [currnetCard, setCurrentCard] = useState(null);

  const sortCards = (a, b) => {
    if (a.order > b.order)
      return 1;
    else
      return -1
  }

  function dragStartHandler(e, card) {
    setCurrentCard(card);
    console.log("drag", card);
  }

  function dragEndHandler(e) {
    e.target.style.background = 'white';
    console.log("end");
  }

  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.background = 'teal'
    console.log("over");
  }

  function dropHandler(e, card) {
    console.log("drop", card);
    e.preventDefault();
    setCardList(cardList.map(c => {
      if (c.id === card.id) {
        return { ...c, order: currnetCard.order }
      }
      if (c.id === currnetCard.id) {
        return { ...c, order: card.order }
      }
      return c;
    }));
    e.target.style.background = 'white'
  }

  //project 4

  const [boards, setBoards] = useState([
    { id: 1, title: "C#", items: [{ id: 1, title: 'cool language' }, { id: 2, title: 'one love' }] },
    { id: 2, title: "React", items: [{ id: 1, title: '2nd favorite language' }, { id: 2, title: 'the best framework' }] },
    { id: 3, title: "Java", items: [{ id: 1, title: 'shameful shit)' }] },
  ]);

  const [currentBoard, setCurrentBoard] = useState(null);
  const [currnetItem, setCurrentItem] = useState(null);

  function dragStartHandler2(e, board, item) {
    setCurrentBoard(board);
    setCurrentItem(item)
  }

  function dragLeaveHandler2(e) {
    e.target.style.boxShadow = 'none'
  }

  function dragEndHandler2(e) {
    e.target.style.boxShadow = 'none'
  }

  function dragOverHandler2(e, item) {
    e.preventDefault();
    if (e.target.className === item) {
      e.target.style.boxShadow = '0 4px 3px gray'
    }
  }

  function dropHandler2(e, board, item) {
    e.preventDefault();
    e.stopPropagation()
    const currentIndex = currentBoard.items.indexOf(currnetItem);
    currentBoard.items.splice(currentIndex, 1);
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currnetItem);
    setBoards(boards.map(b => {
      if (b.id === board.id) {
        return board
      }
      if (b.id === currentBoard.id) {
        return currentBoard
      }
      return b
    }))
  }

  function dropCardHandler(e, board) {
    board.items.push(currnetItem)
    const currentIndex = currentBoard.items.indexOf(currnetItem);
    currentBoard.items.splice(currentIndex, 1);
    setBoards(boards.map(b => {
      if (b.id === board.id) {
        return board
      }
      if (b.id === currentBoard.id) {
        return currentBoard
      }
      return b
    }))
  }

  if (isLoading){
    return <Loader />
  }
  return (
    isAuth
      ?
      <div className="App">

        <NavBar setIsAuth={setIsAuth}/>

        <Routes>
          <Route exact path="/" element={
            <div style={{ display: "flex", color: "teal", justifyContent: "center", marginTop: 10 }}>
              <h1>Welcome to my Projects</h1>
            </div>} />
          <Route path="*" element={
            <div style={{ display: "flex", color: "red", justifyContent: "center", marginTop: 10 }}>
              <h1>Error: Not Fount</h1>
            </div>} />
          <Route exact path="/posts/:id" element={<PostIdPage />}
          />
          <Route exact path="/project2" element={<Project2
            modal={modal}
            isPostsLoading={isPostsLoading}
            setModal={setModal}
            createPost={createPost}
            filter={filter}
            setFilter={setFilter}
            sortedAndSearchedPosts={sortedAndSearchedPosts}
            removePost={removePost}
            setPosts={setPosts}
            postError={postError}
            setPage={setPage}
            page={page}
            changePost={changePage}
            totalPages={totalPages}
            setLimit={setLimit}
            limit = {limit}
          />}
          />
          <Route exact path="/project3" element={<Project3 cardList={cardList}
            dragEndHandler={dragEndHandler}
            dragOverHandler={dragOverHandler}
            dragStartHandler={dragStartHandler}
            dropHandler={dropHandler}
            sortCards={sortCards} />} />

          <Route exact path="/project4" element={<Project4 dragEndHandler2={dragEndHandler2}
            dragLeaveHandler2={dragLeaveHandler2}
            dragOverHandler2={dragOverHandler2}
            dragStartHandler2={dragStartHandler2}
            dropHandler2={dropHandler2}
            dropCardHandler={dropCardHandler}
            boards={boards} />} />
          <Route
            path="/login"
            element={<Navigate to="/" />}
          />



        </Routes>
      </div>
      :
      <div>
        <Routes>
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route
            path="*"
            element={<Navigate to="/login" />}
          />
        </Routes>
      </div>
  );
}
export default App;
