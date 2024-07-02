import React from "react";
import { Link } from "react-router-dom";

const GamePage = () => {
    return (
        <div>
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