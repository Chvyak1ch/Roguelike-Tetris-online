import React from "react";
import { useState } from "react";
//Components
import FAQPost from "../components/FAQPost";


const PageFAQ = () => {
    const [quest, setQuest] = useState('');

    const pupupu = () => {
        console.log('кнопка была нажата!');
        alert("Ваш вопрос был отправлен!");
        setQuest('');
    }

    return(
        <div>

            <p>-----------</p>
            <p>-----------</p>

            <h2>Ваши часто задаваемы вопросы</h2>
            <FAQPost 
            titleName="И тут возник вопрос краткий вопрос?"
            titleNameBig="а тут как пошел пошел пошел длииииный вопрос!?"
            textToTheQuestion="и тут он взял и разои отпал"           
            />

            <h2>Внимание! вы тоже можете писать ваши вопросы прямо здесь,
                но чтобы ваш вопрос был принят и отправлен нам, вам нужно
                зарегистрироваться у нас на сайте!</h2>

            <p>напишите ваш ваш вопрос здесь!</p>

            <input 
            type="text" 
            value={quest} 
            name="userQuestion" 
            onChange={e => setQuest(e.target.value)}
            />
            
            <button onClick={pupupu}>Отправить</button>

        </div>
    )
}

export default PageFAQ;