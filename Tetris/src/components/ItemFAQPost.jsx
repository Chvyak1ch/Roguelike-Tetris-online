import React, { useState } from "react";

import './StyledFAQPost.css'

const ItemFAQPost = (props) => {
    // const [nameUser, setNameUser] = useState(props.com.user);

    // const yourName = () => {  
    //     console.log(props.com.user);

    //     if (props.com.user === '') {
    //         setNameUser('Анонимус')
    //         return(
    //             <strong>{nameUser}:</strong>
    //         );         
    //     } else {
    //         setNameUser(props.com.user) 
    //         return(
    //             <strong>{nameUser}:</strong>
    //         )
    //     }
    // }

    return(

        <div className="commentStyle">
            <p>{props.com.user}:</p>
            <p>{props.com.comment}</p>
        </div>
    )
}

export default ItemFAQPost;