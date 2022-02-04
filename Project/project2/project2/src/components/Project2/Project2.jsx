import React, { useEffect, useRef } from 'react';
import PostFilter from "./PostFilter";
import PostForm from "./PostForm";
import { PostList } from "./PostList";
import MyModel from "./UI/MyModel/MyModel";
import s from "./styles/Project2.module.css"
import MyButton from './UI/Button/MyButton';
import Loader from './UI/Loader/Loader';
import Pagintaion from './UI/Pagination/Pagintaion';
import { useObserver } from '../../hooks/useObserver';
import MySelect from './UI/Select/MySelect';

const Project2 = ({ createPost, filter, setFilter, sortedAndSearchedPosts,
    removePost, setPosts, modal, setModal, isPostsLoading,
    postError, page, changePost, totalPages, setPage, setLimit, limit }) => {

    const lastElement = useRef();
    console.log(lastElement);
  
    useObserver(lastElement, page<totalPages, isPostsLoading, ()=>{
        setPage(page+1)
    },[])

    return (
        <div className={s.pr}>
            <div className={s.project2}>
                <MyButton style={{ margin: '0 0 0.5rem' }} onClick={() => setModal(true)}>
                    Create Post
                </MyButton>
                <MyModel visible={modal} setVisible={setModal}>
                    <PostForm createPost={createPost} />
                </MyModel>
                <hr style={{ margin: '15px 0' }} />
                <PostFilter filter={filter} setFilter={setFilter} />
                <MySelect 
                    value={limit}
                    onChange={value=>setLimit(value)}
                    defaultValue="number of elements"
                    option={[
                        {value: 5, name:'5'},
                        {value: 10, name:'10'},
                        {value: 25, name:'25'},
                        {value: -1, name:'all'}
                    ]} />
                {postError && <h1>Error ${postError}</h1>}
                {isPostsLoading &&
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
                }
                <PostList posts={sortedAndSearchedPosts}
                    removePost={removePost}
                    setPost={setPosts}
                    title="List of posts"
                />
                <div ref={lastElement} style={{height:20, background: "teal"}}/>

                <Pagintaion page={page} changePost={changePost} totalPages={totalPages} />
            </div>
        </div>
    );
};

export default Project2;