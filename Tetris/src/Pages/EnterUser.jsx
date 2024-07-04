import React from "react";
import { Link } from "react-router-dom";

const EnterUser = () => {


    return(
        <div>
            <p>----------</p>
            <p>----------</p> 
            <h1>Добро пожаловать!</h1>
            <h2>Ввойдите в аккаунт</h2>
            
            <p>логин:</p>
            <input />
            <p>пароль:</p>
            <input />
            <p></p>

            <button>Войти</button>

            <p><Link to="/registration">регистрация</Link></p>
        </div>
)
}

export default EnterUser;