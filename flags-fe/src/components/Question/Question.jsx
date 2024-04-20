
import { useState } from "react";
import SetupQuiz from "../SetupQuiz/SetupQuiz";

import styles from "./Question.module.css";

export default function Question ( {country, options, answerHandler, startGame}) {



    return (

        country &&
        <section className={styles['question']}>
                <div className={styles['flag']} >
                    <img src={`/svg/${country.code2.toLowerCase()}.svg `} alt={country.name} />
                </div>
                <div className={styles['options']} >
                    {options.map((country, index) => <button key={index} onClick={answerHandler} >{country.name}</button>)}
                </div>
        </section> 

      
    )
}