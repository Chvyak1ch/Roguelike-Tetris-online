import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import '../styledPage/registrationPage.css'
import { addUser } from "../http/userAPI";
import { Card } from "react-bootstrap";

const PageRegistration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    const clickRegistr = async () => {
        try{
            let data;
            console.log('1');
            data = await addUser(email, password, userName);


            console('2');
            
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return(
        <div className="bodyRegistration">

            <h1>Регистрация пользователя</h1>
            <div className="cardReg">
            <h3>введите свои данные</h3>

            <form>
            <p>Введите вашу почту:</p>
            <MyInput 
                type="text" 
                value={email} 
                name="Email" 
                onChange={e => setEmail(e.target.value)}
            />
                       
            <p>Введите пароль:</p>
            <MyInput 
                type="password" 
                value={password} 
                name="Password" 
                onChange={e => setPassword(e.target.value)}
            />

            <p>Введите ваш никнейм:</p>
            <MyInput 
                type="text" 
                value={userName} 
                name="userName" 
                onChange={e => setUserName(e.target.value)}
            />
            
            <p></p>

            <MyButton onClick = {clickRegistr}>Зарегистрироваться</MyButton>
            </form>
            <p><Link to="/enterUser">я вспомнил свои данные аккаунта</Link></p>
            </div>
        </div>
    )
}

export default PageRegistration;