import React from "react";
import { Link } from "react-router-dom";
import '../styledPage/gamePage.css'

const GamePage = () => {
    return (
        <div className="gamePage">
            <div id="gameWindow1">
                <p><Link to ="/tetris">играть в классику</Link></p>
            </div>
            <div id="gameWindow2">
                <p>играть в рогалик</p>
            </div>
        </div>
    )
}

export default GamePage;