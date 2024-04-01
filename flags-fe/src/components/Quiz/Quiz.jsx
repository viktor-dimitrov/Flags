import { useEffect, useState } from "react"
import countriesData from "../../assets/data/countries.json"


import styles from "./Quiz.module.css"
import Question from "../Question/Question";
import FlagsBoard from "../FlagsBoard/FlagsBoard";

export default function Quiz() {


    const [countryList, setCountryList] = useState([]);
    const [options, setOptions] = useState([]);
    const [currentStage, setCurrentStage] = useState(0);
    const [scores, setScores] = useState(0);


    useEffect(() => {
        const selectedList = selectRandomCountries(countriesData, 16);
        setCountryList(selectedList);
        setOptions(selectRandomCountries(selectedList, 4))
    }, []);

    const randomIndex = ( count ) => {
        const index = Math.floor(Math.random() * count);
        return index
    }

    const selectRandomCountries = (list, count) => {
        const selected = [];
        const countryIndices = [];
        let i = 0;
        while (i < count && i < list.length) {
            const randomIndex = Math.floor(Math.random() * list.length);
            if (!countryIndices.includes(randomIndex)) {
                countryIndices.push(randomIndex);
                selected.push(list[randomIndex]);
                i++;
            }
        }
        return selected;
    };

    const answerHandler = (event) => {
        const choice = event.target.textContent;
        let newList = [];
       
        choice === country.name ? [
            setScores((scores) => scores + 1),
            newList = countryList.filter(country => country.name !== choice),
            setCountryList((list) =>  newList ),
            setOptions(selectRandomCountries(newList, 4))
        ] : setOptions(selectRandomCountries(countryList, 4));

        nextStage();
   
    }

    const nextStage = () => {
        setCurrentStage((stage) => stage + 1)
    }



    const country = options[randomIndex(options.length)];



    return (

        <div>

   
            <h4>Stage: {currentStage}</h4>
            <h4>Scores: {scores}</h4>
            <h3>{country?.name}</h3>

            <div  className={styles['quiz']}  >

            <FlagsBoard countryList={countryList} />

            <Question country={country} options={options} answerHandler={answerHandler} />


            <FlagsBoard countryList={countryList} />
     
             </div>

        </div>
    )
}

