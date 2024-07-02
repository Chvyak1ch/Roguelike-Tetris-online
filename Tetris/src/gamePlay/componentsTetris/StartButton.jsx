import React from "react";
import { StyledStartButton } from "./styles/StyledStartButton";

const StartButton = ({callback}) => { //maybe problem here
    return(

       <StyledStartButton onClick={callback}>Start Game</StyledStartButton> 

    );
};

export default StartButton;