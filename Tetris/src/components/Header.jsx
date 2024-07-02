import React from "react";
import iconTetris from "../Pages/iconTetris.svg"
import { Link } from "react-router-dom";
import './styledHeader.css'


const Header = () => {
    return(
        <>
        <header>

            <nav>
            <div className = "sideBar">
            <img src={iconTetris} className = "logo"></img>
                <ul className="hr">
                    <li><Link to="/">Игра</Link></li>
                    <li><Link to="/history">История</Link></li>
                    <li><Link to="/projectInfo">О проекте</Link></li>
                    <li><Link to="/pageFAQ">FAQ</Link></li>
                </ul>
            </div>
            </nav>
        </header>
        </>
    )
}

export default Header;