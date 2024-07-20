import React, { useState, useEffect } from "react";
import MyInput from "../components/MyInput";
import MyButton from "../components/MyButton";
import UserStore from "../store/UserStore";
import "../styledPage/pageProfile.css";
import { allData } from "../http/userAPI";

const PageProfile = () => {
    const [data, setData] = useState({});
    const [fildata, setFilData] = useState({});
    const[password, setPassword] = useState('');
    const[userName, setUserName] = useState('');
    const[email, setEmail] = useState('');



    const showData = async () => {
        
            const response = await fetch('http://localhost:5000/api/users/showUsers');
            const jsonData = await response.json();
            setData(jsonData);
            const filterByUserId = data.filter(item => item.id === UserStore.user.id);
            setFilData(filterByUserId);

    }





    return(
        <div className="bodyProfile">
            <h1>Ваш профиль</h1>
            <div className="formProfile">
        <div className="blockForm">
            <p>
                <strong>email: {UserStore.user.email}</strong>
                <MyInput 
                    type="text"
                    name="Face"
                    value={email}
                    onChange={ e => setEmail(e.target.value)}
               />
                <MyButton>Изменить</MyButton>
            </p>
        </div>
        <div className="blockForm">
            <p>
                <strong>Password: </strong>
                <MyInput 
                    type="text"
                    name="Face"
                    value={password}
                    onChange={ e => setPassword(e.target.value)}
                />
                <MyButton>Изменить</MyButton>
            </p>
        </div>
        <div className="blockForm">
            <p>
                <strong>userName: {}</strong>
                <MyInput 
                    type="text"
                    name="Face"
                    value={userName}
                    onChange={ e => setUserName(e.target.value)}
                />
                <MyButton>Изменить</MyButton>
            </p>
        </div>
            </div>

        </div>
    )
}

export default PageProfile;