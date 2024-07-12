import React, { useState } from "react";
import { Link } from "react-router-dom";
import TableStates from "../components/TableStates";
import '../styledPage/history.css'

const History = () => {
    const [states, setStates] = useState([
        {id: 1, Rows: 5, Level: 5, Score: 555},
        {id: 2, Rows: 6, Level: 6, Score: 666}
    ])



    return (
        <div className="historyPage">

            <h2>Ваша история и статистика игр</h2>
            {states.map(stat => (
                <TableStates 
                key = {stat.id}
                Rows={stat.Rows}
                Level = {stat.Level}
                Score = {stat.Score}
                />
            ))}
            
            </div>
    )
}

export default History;