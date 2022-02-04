import React, { useState } from 'react';
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/Input/MyInput";




const PostForm = ({createPost}) => {
    const [post, setPost] = useState({title:'', body:''});

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        createPost(newPost);
        setPost({title:'', body:''});
    }

    return (
        <form>
        <MyInput 
            onChange={e => setPost({...post, title: e.target.value})} 
            value={post.title} 
            type="text" 
            placeholder="Description of the post">
        </MyInput>
        <MyInput 
            onChange={e => setPost({...post, body: e.target.value})} 
            value={post.body} 
            type="text" 
            placeholder="Title of the post">
        </MyInput>
        <MyButton onClick={addNewPost}>Add Post</MyButton>
      </form>
    );
};

export default PostForm;