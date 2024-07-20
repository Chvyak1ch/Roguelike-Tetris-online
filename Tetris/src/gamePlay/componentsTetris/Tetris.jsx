import React, { useState } from "react";

import { createStage, checkCollision } from "../gameHelpers";

import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

import { useInterval } from '../hooks/useInterval';
import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";
import { useGameStatus } from "../hooks/useGameStatus";

import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";
import { create } from "../../http/gamesAPI";
import UserStore from "../../store/UserStore";

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player, updatePlayerPos, resetPlayer, playerRorate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

    console.log('re-render');



    const movePlayer = dir => {
        if (!checkCollision(player, stage, {x: dir, y: 0 })) {
        updatePlayerPos({ x: dir, y: 0 });
        }
    };

    const startGame = () => {
        console.log("test")
        // Reset everuthing
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        setGameOver(false);
        setScore(0);
        setRows(0);
        setLevel(0);
    };

    //--------------
    const saveGame = async () => {
        try {
            let data;
            data = await create(rows, level, score, UserStore.user.id);
        } catch (e) {
            alert(e.response.data.message)
        }

    };

    const drop = () => {

        if(rows > (level + 1) * 10) {
            setLevel(prev => prev + 1);

            setDropTime(1000 / (level + 1) + 200)
        }

        if (!checkCollision(player, stage, {x: 0, y: 1})){
            updatePlayerPos({ x: 0, y: 1, collided: false })
        } else {

            if (player.pos.y < 1){
                console.log("GAME OVER!!!");
                setGameOver(true);
                setDropTime(null);
                saveGame();
            }
            updatePlayerPos({ x: 0, y: 0, collided: true });
        }    
    };

    const keyUp = ({ keyCode }) => {
        if (!gameOver) {
            if(keyCode === 40) {
                console.log("interval on");
                setDropTime(1000 / (level + 1) + 200);
            }
        }
    }


    const dropPlayer = () => {
        console.log("interval off");
        setDropTime(null);
        drop();
    }

    const move = ({ keyCode }) => {
        if (!gameOver){
            if(keyCode === 37){
                movePlayer(-1);
            } else if (keyCode === 39) {
                movePlayer(1);
            } else if (keyCode === 40) {
                dropPlayer();
            } else if (keyCode === 38) {             
                playerRorate(stage, 1);
                console.log("keyCode true")
            }
        }
    };


    useInterval(() => {
        drop();
    }, dropTime)

    return (
        <StyledTetrisWrapper 
        role="button" 
        tabIndex="0" 
        onKeyDown={e => move(e)} 
        onKeyUp={keyUp}
        >

        <StyledTetris>
            <Stage stage={stage} />
            <aside>
                {gameOver ? (
                    <Display gameOver={gameOver} text="Game Over" />
                ) : (
                <div>
                <Display text={`Score: ${score}`} />  {/*изначально выдает в фигурных скобках, переписал в ковычки*/}
                <Display text={`Rows: ${rows}`} />
                <Display text={`Level: ${level}`} />
                </div>
                )}
                <StartButton callback={startGame} />
            </aside>
        </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;