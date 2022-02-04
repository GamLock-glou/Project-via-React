import React from 'react';
import MyButton from './UI/Button/MyButton';
import MyInput from './UI/Input/MyInput';

const Login = ({setIsAuth}) => {

    const login = e => {
        e.preventDefault();
        localStorage.setItem('auth', 'true');
        setIsAuth(true)
    }
    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <MyInput type='text' placeholder='name' />
                <MyInput type='password' placeholder='password' />    
                <MyButton>Come</MyButton>            
            </form>
        </div>
    );
};

export default Login;