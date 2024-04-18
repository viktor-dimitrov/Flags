import { useEffect, useState } from "react"

import Question from "../Question/Question";
import FlagsBoard from "../FlagsBoard/FlagsBoard";

import styles from "./Quiz.module.css"
import SetupQuiz from "../SetupQuiz/SetupQuiz";

export default function Quiz() {

    const [gameList, setGameList] = useState([]);
    const [options, setOptions] = useState([]);
    const [currentStage, setCurrentStage] = useState(0);
    const [scores, setScores] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const [myList, setMyList] = useState([]);
    
    useEffect(() => {
        isStarted ? startGame() : null
    }, []);

    const randomIndex = ( count ) => {
        const index = Math.floor(Math.random() * count);
        return index
    }

    const startGame = (selectedList) => {
        setGameList(selectedList);
        setMyList([]);
        setCurrentStage(0);
        setScores(0);
        setOptions(selectRandomCountries(selectedList, 4));
        setIsStarted(true);
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
            newList = gameList.filter(country => country.name !== choice),
            myList.push(gameList.find(country => country.name === choice)),
            setGameList((list) =>  newList ),
            setOptions(selectRandomCountries(newList, 4))
        ] : setOptions(selectRandomCountries(gameList, 4));
        nextStage();
    }

    const nextStage = () => {
        setCurrentStage((stage) => stage + 1)
    }

    const country = options[randomIndex(options.length)];

    return (

        isStarted ?

        <div>
            <p>Stage: {currentStage}</p>
            <p>Scores: {scores}</p>
         
            <div  className={styles['quiz']}  >
                <div className={styles['flagboards']}>
                    <FlagsBoard list={myList} />
                    <FlagsBoard list={gameList} />
                </div>

                <Question country={country} options={options} answerHandler={answerHandler} startGame={startGame} />
            </div>
        </div> : <> <SetupQuiz startGame={startGame} /> </>
    )
}

