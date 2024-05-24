
import { useState } from 'react';
import '../../App.css';
import styles from "./Question.module.css";

export default function Question({ country, options, answerHandler, quizType }) {

    const [selectedOption, setSelectedOption] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [buttonsDisabled, setButtonsDisabled] = useState(false);

    const handleAnswer = (countryCode) => {
        setSelectedOption(countryCode);
        setCorrectAnswer(country.code3);
        setButtonsDisabled(true);

        setTimeout(() => {
            answerHandler(countryCode);
            setSelectedOption(null);
            setCorrectAnswer(null);
            setButtonsDisabled(false);
          
        }, 1000);
    };

    return (

        country &&
        <section className={styles['question']}>

            {quizType.type == "capital" && <p className={styles['country-name']}>{country.name}</p>}

            <div className={styles['flag']} >
                <img src={`/svg/${country.code2.toLowerCase()}.svg `} alt={country.name} />
            </div>

            <div className={styles['options']} >
                {options.map((country, index) => <button
                    className={`${country.code3 == correctAnswer && ` ${styles['correct']}`}
                                ${(country.code3 == selectedOption && correctAnswer != selectedOption) && ` ${styles['incorrect']}`} dark`}
                    key={index} onClick={() => handleAnswer(country.code3)}
                    disabled={buttonsDisabled} >

                    {quizType.type == "flag" ? country.name : country.capital}
                </button>)}
            </div>
        </section> 

    )
}