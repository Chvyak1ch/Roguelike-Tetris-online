import React from "react";
import './StyledInfoPost.css';

const InfoPost = (props) => {
    return(
        <div className="Post"> 
            <h3>{props.titleName}</h3>
            <p>{props.textThePost}</p>
            <img src={props.imgPost}></img>
        </div>
    )
}

export default InfoPost;