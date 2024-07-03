import React, { useState } from "react";
//Styled
import './StyledFAQPost.css'

const FAQPost = (props) => {
    const [comment, setComment] = useState('');

    const addComment = () => {
        console.log('вы оставили комментарий');
        alert('комментарий оставлен');
        setComment('');
        
    }

    return(
        <div className="postFAQ">

            <h3>{props.titleName}</h3>
            <p>{props.titleNameBig}</p>
            <p>{props.textToTheQuestion}</p>
            
            <div className="postCommentFAQ">

                <p>комментарий к посту</p>

                <input 
                    type="text" 
                    value={comment} 
                    name="userComment" 
                    onChange={e => setComment(e.target.value)}
                />
                <button onClick={addComment}>Ответить</button>

            </div>
        </div>
    )
}

export default FAQPost;