import React, { useState } from "react";
//Styled
import './StyledFAQPost.css'
import ItemFAQPost from "./ItemFAQPost";

const FAQPost = (props) => {
    const [comment, setComment] = useState('');
    //тут должна быть доплнительная переменная, что за user отсавил комментарий
    const [comments, setComments] = useState([
        { id: 1, comment: 'тут пока ничего нет', user: 'Анонимус' },
        { id: 2, comment: 'все еще пока ничего нет', user: 'Анонимус' },
    ]);

    const addComment = () => {
        console.log('операция добавления комментария');

        const newComment = { comment };
        setComments([...comments, newComment]);

        alert('комментарий оставлен');
        setComment('');

        console.log('все прошло успешно, вот массив комментариев: ');
        console.log(comments);
        

        
    };

    return(
        <div className="postFAQ">

            <h3>{props.titleName}</h3>
            <p>{props.titleNameBig}</p>
            <p>{props.textToTheQuestion}</p>

            {comments.map(com => 
                <ItemFAQPost 
                key = {com.id}
                com = {com}
                />
            )}
            
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