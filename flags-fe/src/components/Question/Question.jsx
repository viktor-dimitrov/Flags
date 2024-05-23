
import { useState } from 'react';
import '../../App.css';
import styles from "./Question.module.css";

export default function Question ( {country, options, answerHandler, quizType}) {

    const [selectedOption, setSelectedOption] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(null);
 
    const handleAnswer = (countryCode) => {
        setSelectedOption(countryCode);
        setCorrectAnswer(country.code3);
     
        

        setTimeout(() => {
            setSelectedOption(null);
            setCorrectAnswer(null)
            answerHandler(countryCode);
        }, 1000);
    };

    return (

        country &&
        <section className={styles['question']}>

             {quizType.type == "capital" &&  <p className={styles['country-name']}>{country.name}</p>}

                

                

                <div className={styles['flag']} >
                    <img src={`/svg/${country.code2.toLowerCase()}.svg `} alt={country.name} />
                </div>
             
                <div className={styles['options']} >
                    {options.map((country, index) => <button className={`${country.code3 == correctAnswer ? ` ${styles['correct']} dark` : 'dark'}`}  key={index} onClick={() => handleAnswer(country.code3)} >{ quizType.type == "flag" ? country.name : country.capital}</button>)}
                </div>
        </section> 

      
    )
}