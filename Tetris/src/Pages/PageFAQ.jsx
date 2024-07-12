import React from "react";
import { useState } from "react";
import '../styledPage/pageFaq.css';
//Components
import FAQPost from "../components/FAQPost";


const PageFAQ = () => {
    const [quest, setQuest] = useState('')
    const [postQuests, setPostQuests] = useState([{
        quest
    }])

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

            <FAQPost 
            titleName="И тут возник краткий вопрос?"
            titleNameBig="а тут как пошел пошел пошел длииииный вопрос!?"
            textToTheQuestion="и тут он взял и разои отпал"           
            />

            <h2>Внимание! вы тоже можете писать ваши вопросы прямо здесь,
                но чтобы ваш вопрос был принят и отправлен нам, вам нужно
                зарегистрироваться у нас на сайте!</h2>

            <p>напишите ваш вопрос здесь!</p>

            <input 
            type="text" 
            value={quest} 
            name="userQuestion" 
            onChange={e => setQuest(e.target.value)}
            />
            
            <button onClick={mailPost}>Отправить</button>

        </div>
    )
}

export default PageFAQ;