import React, { useState } from "react";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";

const PageProfile = () => {
    const[login, setLogin] = useState('');
    const[password, setPassword] = useState('');
    const[userName, setUserName] = useState('');
    const[email, setEmail] = useState('');
    const[yourFace, setYourFace] = useState(
        {
            id: 12,
            login: 'admin', 
            password: "admin567", 
            nick: "adminAdmin", 
            email: "admin@mail.ru",
            numberAvatar: 0
        }
    )


    return(
        <div>

            <h1>Ваш профиль</h1>

            <p>
                <strong>Login: {yourFace.login}</strong>
                <MyInput 
                    type="text"
                    name="Face"
                    value={login}
                    onChange={ e => setLogin(e.target.value)}
                />
                <MyButton>Изменить</MyButton>
            </p>
            <p>
                <strong>Password: {yourFace.password}</strong>
                <MyInput 
                    type="text"
                    name="Face"
                    value={password}
                    onChange={ e => setPassword(e.target.value)}
                />
                <MyButton>Изменить</MyButton>
            </p>
            <p>
                <strong>userName: {yourFace.nick}</strong>
                <MyInput 
                    type="text"
                    name="Face"
                    value={userName}
                    onChange={ e => setUserName(e.target.value)}
                />
                <MyButton>Изменить</MyButton>
            </p>
            <p>
                <strong>email: {yourFace.email}</strong>
                <MyInput 
                    type="text"
                    name="Face"
                    value={email}
                    onChange={ e => setEmail(e.target.value)}
                />
                <MyButton>Изменить</MyButton>
            </p>

        </div>
    )
}

export default PageProfile;