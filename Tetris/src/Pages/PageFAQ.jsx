import React from "react";
import { useState, useEffect } from "react";
import '../styledPage/pageFaq.css';
//Components
import FAQPost from "../components/postsAndCommentsFAQ/FAQPost";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";


const PageFAQ = () => {
    const [quest, setQuest] = useState('')
    const [postQuests, setPostQuests] = useState([{quest}])
    const [test, setTest] = useState([])

    const showFAQPosts = async () => {
        try{
            const response = await fetch('http://localhost:5000/api/faqposts/getAll')
            const jsonData = await response.json()
            setTest(jsonData)
        } catch (e) {
            alert(e.response.data.message)
        }      
    }

    useEffect(() => {
        showFAQPosts();
    }, []);

    const renderedFAQPosts = test.map((item) =>(
        <FAQPost 
        titleName={item.titleName}
        titleNameBig={item.smallTitleName}
        textToTheQuestion={item.adminText}           
        />
    ))







    const mailPost = (e) => {

        const newPost = {
            quest
        }

        console.log(newPost);
        setPostQuests([...postQuests, newPost])

        console.log('кнопка была нажата!');
        alert("Ваш вопрос вывели на экран!");
        setQuest('');
        console.log(postQuests);

    }

    return(
        <div className="bodyFaq">
            
            <h2>Ваши часто задаваемы вопросы</h2>
            {renderedFAQPosts}

            <h2>    
                Внимание! вы тоже можете писать ваши вопросы прямо здесь,
                но чтобы ваш вопрос был принят и отправлен нам, вам нужно
                зарегистрироваться у нас на сайте!
            </h2>

            <p>напишите ваш вопрос здесь!</p>

            <MyInput 
            type="text" 
            value={quest} 
            name="userQuestion" 
            onChange={e => setQuest(e.target.value)}
            />
            
            <MyButton onClick={mailPost}>Отправить</MyButton>

        </div>
    )
}

export default PageFAQ;