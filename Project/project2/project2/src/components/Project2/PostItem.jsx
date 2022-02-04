import React from "react";
import "../../styles/App.css"
import MyButton from "./UI/Button/MyButton";
import s from "./styles/Project2.module.css"
import {useNavigate} from 'react-router-dom'

export const PostItem = (props) => {
    const navigate = useNavigate()
    return (
            <div className={s.post}>
                <div className={s.post__content}>
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>{props.post.body}</div>
                </div>
                <div className={s.post__btns}>
                    <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>Open</MyButton>
                    <MyButton style={{color:"red"}} onClick={() => props.removePost(props.post)}>Delete</MyButton>
                </div>
            </div>
    )
}