import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './styles/NavBar.module.css'
import MyButton from './UI/Button/MyButton';

const NavBar = ({setIsAuth}) => {

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth');
    }

    return (
        <div className={s.nav}>
            <MyButton onClick={logout}>Logout</MyButton>
            <div className={s.item}>
                <NavLink className={s.link} to="project2">Project 2</NavLink>
                <NavLink className={s.link} to="project3">Project 3</NavLink>
                <NavLink className={s.link} to="project4">Project 4</NavLink>
                <hr style={{ margin: '5px 0', color: 'teal' }} />
            </div>
        </div>
    );
};

export default NavBar;