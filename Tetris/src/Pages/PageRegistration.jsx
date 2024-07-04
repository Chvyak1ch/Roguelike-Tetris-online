import React, { useState } from "react";
import { Link } from "react-router-dom";

const PageRegistration = () => {
    const [inLogin, setInLogin] = useState('');
    const [inPassword, setPassword] = useState('');
    const [inEmail, setInEmail] = useState('');
    const [inNickName, setInNickName] = useState('');
    //надо подумать как сделать один инпут для всех и как передать данные
    const [users, setUsers] = useState([
        {id: 111, 
        login: 'admin', 
        password: 'admin', 
        email: 'admin@mail.ru', 
        nickName: 'ItIsAdMiN' }
    ]);

    return(
        <div>
            <p>-------------</p>
            <p>-------------</p>

            <h1>Регистрация пользователя</h1>
            <h2>введите свои данные</h2>

            <p>Введите логин:</p>
            <input />
            <p>Введите пароль:</p>
            <input />
            <p>Введите вашу почту:</p>
            <input />
            <p>Введите ваш никнейм:</p>
            <input />
            <p></p>

            <button>Зарегистрироваться</button>

            <p><Link to="/enter">я вспомнил свои данные аккаунта</Link></p>

        </div>
    )
}

export default PageRegistration;