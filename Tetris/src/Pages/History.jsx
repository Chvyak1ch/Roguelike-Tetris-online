import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TableStates from "../components/TableStates";
import '../styledPage/history.css'
import { allGames } from "../http/gamesAPI";
import MyButton from "../components/MyButton";
import UserStore from "../store/UserStore";

const History = () => {
    const [data, setData] = useState([])
    const [filData, setFilData] = useState([])
    

    const showGames = async () => {
        try{
            const response = await fetch('http://localhost:5000/api/games/allGames')
            const jsonData = await response.json()
            setData(jsonData)
            console.log(UserStore.user.id)

            const filterByUserId = jsonData.filter(item => item.userId === UserStore.user.id);
            setFilData(filterByUserId);
        } catch (e) {
            alert(e.response.data.message)
        }      
    }

    useEffect(() => {
        showGames();
    }, []);

    const renderedItems = data.map((item) =>(
        <TableStates 
        key = {item.id}
        Rows={item.rows}
        Level = {item.levels}
        Score = {item.score}
        />
    ))

    const renderedFilters = filData.map((item) =>(
        <TableStates 
        key = {item.id}
        Rows={item.rows}
        Level = {item.levels}
        Score = {item.score}
        />
    ))

    return (
        
        <div className="historyPage">
            <h2>Ваша история и статистика игр</h2>
            <div>{renderedFilters}</div>
        </div>
    )
}

export default History;