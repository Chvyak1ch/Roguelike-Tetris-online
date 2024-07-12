import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import '../styledPage/enterUser.css';
import { login } from "../http/userAPI";
import { useNavigate } from "react-router-dom";

const EnterUser = () => {
    const navigate = useNavigate();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const userEnterLogin = async () => {
        try{
            let data;
            data = await login(email, password);
            alert('все прошло успешно');
            navigate("/");
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return(
        <div className="bodyEnterUser">
            <h1>Добро пожаловать!</h1>
            <h2>Ввойдите в аккаунт</h2>
            
            <p>email:</p>
            <MyInput 
                type="text"
                value={email}
                name="email"
                onChange = {e => setEmail(e.target.value)}
            />
            <p>password:</p>
            <MyInput 
                type="text"
                value={password}
                name="password"
                onChange={e => setPassword(e.target.value)}
            />
            <p></p>

            <MyButton onClick={userEnterLogin}>Войти</MyButton>

            <p><Link to="/registration">регистрация</Link></p>
        </div>
)
}

export default EnterUser;