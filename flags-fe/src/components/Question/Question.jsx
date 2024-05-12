
import { useState } from "react";
import SetupQuiz from "../SetupQuiz/SetupQuiz";

import styles from "./Question.module.css";

export default function Question ( {country, options, answerHandler, quizType}) {

    return (

        country &&
        <section className={styles['question']}>

             {quizType.type == "capital" &&  <p className={styles['country-name']}>{country.name}</p>}

                

                

                <div className={styles['flag']} >
                    <img src={`/svg/${country.code2.toLowerCase()}.svg `} alt={country.name} />
                </div>
             
                <div className={styles['options']} >
                    {options.map((country, index) => <button  key={index} onClick={() => answerHandler(country.code3)} >{ quizType.type == "flag" ? country.name : country.capital}</button>)}
                </div>
        </section> 

      
    )
}