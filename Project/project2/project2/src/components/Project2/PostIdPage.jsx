import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../../API/PostService';
import { useFatching } from '../../hooks/useFatching';
import Loader from './UI/Loader/Loader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFatching(async (id) => {
        const respons = await PostService.getById(id);
        setPost(respons.data);
    })

    const [fetchComments, isComLoading, comError] = useFatching(async (id) => {
        const respons = await PostService.getCommentsByPostId(id);
        setComments(respons.data);
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, []);
    return (
        <div>
            <h1>ID Posts = {params.id}</h1>
            {isLoading
                ?
                <Loader />
                :
                <div>
                    {post.id}.{post.title}
                </div>
            }

            <h2>Comments</h2>
            {isComLoading
                ?
                <Loader />
                :
                <div>
                    {comments.map((comm,index)=>
                        <div key={index} style={{marginTop:10}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }

        </div>
    );
};

export default PostIdPage;