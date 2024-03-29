import { useEffect, useState } from "react"
import countriesData from "../../data/countries.json"


import styles from "./Quiz.module.css"

export default function Quiz() {


    const [countryList, setCountryList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [currentStage, setCurrentStage] = useState(0)
    const [scores, setScores] = useState(0);

    useEffect(() => {
        selectRandomCountries();
        setCurrentIndex(randomIndex());
    }, [currentStage]);


    const selectRandomCountries = () => {
        const selected = [];
        const countryIndices = [];
        while (countryIndices.length < 4) {
            const randomIndex = Math.floor(Math.random() * countriesData.length);
            if (!countryIndices.includes(randomIndex)) {
                countryIndices.push(randomIndex);
                selected.push(countriesData[randomIndex]);
            }
        }
        setCountryList(selected);
    };

    const answerHandler = (event) => {
        (event.target.textContent) === country.name ? setScores((scores) => scores + 1) : null;
        nextStage();
        setCurrentIndex(randomIndex());
    }

    const randomIndex = () => {
        const index = Math.floor(Math.random() * 4);
        return index
    }

    const nextStage = () => {
        setCurrentStage((stage) => stage + 1)
    }


    const country = countryList[currentIndex];

    return (

        <>
            <h1>Stage: {currentStage}</h1>
            <h1>Scores: {scores}</h1>


            {
                country ?
                    <div className={styles.flag}>
                        <img src={`/svg/${country.code2.toLowerCase()}.svg `} alt={country.name} />
                    </div> : <> <h1>wait</h1> </>
            }

            <div>
                {countryList.map((country, index) => <button key={index} onClick={answerHandler} >{country.name}</button>)}
            </div>

        </>
    )
}

