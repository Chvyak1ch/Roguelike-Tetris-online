import React, { useState } from "react";

import './StyledFAQPost.css'

const ItemFAQPost = (props) => {

    return(

        <div className="commentStyle">
            <p>{props.userName}:</p>
            <p>{props.userText}</p>
        </div>
    )
}

export default ItemFAQPost;