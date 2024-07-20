import React, { useState, useEffect } from "react";
//Styled
import './StyledFAQPost.css'
import ItemFAQPost from "./ItemFAQPost";
import MyInput from "../MyInput";
import MyButton from "../MyButton";
import UserStore from "../../store/UserStore";
import { create } from "../../http/commentsAPI";

const FAQPost = (props) => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([
        { id: 1, comment: 'Ну все ясно, еще один псевдо кодер хочет на нас навариться, фу такими быть!', user: 'Анонимус' },
        { id: 2, comment: 'ага, еще чуть подожди и денег уже будет просить, все как обычно', user: 'Анонимус' },
    ]);
    const [test, setTest] = useState([])
    


    const showCommentsFAQ = async () => {
        try{
            const response = await fetch('http://localhost:5000/api/faqcomments/getAll')
            const jsonData = await response.json()
            setTest(jsonData)
        } catch (e) {
            alert(e.response.data.message)
        }      
    }

    useEffect(() => {
        showCommentsFAQ();
    }, []);

    const renderedCommentsFAQ = test.map((item) => (
        <ItemFAQPost 
        key = {item.id}
        userName = {item.userName}
        userText = {item.userText}         
        />
    ))

    const addComment = async () => {
        console.log('операция добавления комментария');
        const newComment = { id: 5, comment: comment, user: UserStore.user.email };
        setComments([...comments, newComment]);
        setUser(UserStore.user.email)
        let data;
        data = await create(UserStore.user.email, comment)
        alert('комментарий оставлен');
        setComment('');  
    };


    return(
        <div className="postFAQ">

            <h3>{props.titleName}</h3>
            <p>{props.titleNameBig}</p>
            <p>{props.textToTheQuestion}</p>

            {comments.map(com => 
                <ItemFAQPost 
                userName = {com.user}
                userText = {com.comment}  
                />
            )}
            {renderedCommentsFAQ}
            


            <div className="postCommentFAQ">
                <p>комментарий к посту</p>
                <MyInput 
                    type="text" 
                    value={comment} 
                    name="userComment" 
                    onChange={e => setComment(e.target.value)}
                />
                <MyButton onClick={addComment}>Ответить</MyButton>
            </div>
        </div>
    )
}

export default FAQPost;