import React from "react";
import { Navbar } from "react-bootstrap";
import {Container} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './navBar.scss';



const NavBar = () => {

    return(

    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Tetris</Navbar.Brand>
          <nav className="navbar navbar-dark bg-primary">
            <div><NavLink to="/game" className="nav-item">Игра</NavLink></div>
            <div><NavLink to="/history" className="nav-item">История</NavLink></div>
            <div><NavLink to="/projectInfo" className="nav-item">О проекте</NavLink></div>
            <div><NavLink to="/pageFAQ" className="nav-item">FAQ</NavLink></div>
            <div><NavLink to="/youProfile" className="nav-item">Профиль</NavLink></div>
            <div><NavLink to="/enterUser" className="nav-item">Войти</NavLink></div>
          </nav>
        </Container>
    </Navbar>
    
        
        
    );
};

export default NavBar;