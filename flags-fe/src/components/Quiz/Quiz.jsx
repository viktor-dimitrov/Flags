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
    const [board, setBoard] = useState(360)

    const [isCorrect, setIsCorrect] = useState('');

    useEffect(() => {
        isStarted ? startGame() : null
    }, []);

    const randomIndex = (count) => {
        const index = Math.floor(Math.random() * count);
        return index
    }

    const startGame = (selectedList) => {
        setBoard((Math.sqrt(selectedList.length) * 30));
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
            myList.unshift(gameList.find(country => country.name === choice)),
            setGameList((list) => newList),
            setOptions(selectRandomCountries(newList, 4))
        ] : [setIsCorrect(''), setOptions(selectRandomCountries(gameList, 4))];
        nextStage();
    }

    const nextStage = () => {
        setCurrentStage((stage) => stage + 1)
    }

    const country = options[randomIndex(options.length)];

    return (

<>
       { isStarted  &&
            <div className={styles['quiz']}  >
                <div className={styles['board-container']}>
                    <div className={styles['board']} style={{ width: `${board}px`, height: `${board}px` }}>
                        <FlagsBoard list={myList} />
                    </div>

                { gameList.length != 0 &&   <div className={styles['board']} style={{ width: `${board}px`, height: `${board}px` }}>
                        <FlagsBoard list={gameList} />
                    </div> }
                </div>

            

             <div className={styles['units']}>
                    <div>
                        <img src="/svg/checkmark-box-green-icon.svg" alt="scores" style={{ width: "50px" }} />
                        <p>{scores}</p>
                    </div>

                    <div>
                        <img src="/svg/choose-icon.svg" alt="attempts" style={{ width: "80px" }} />
                        <p>{currentStage}</p>
                    </div>

                    <div>
                        <img src="/svg/flag-icon.svg" alt="remaining" style={{ width: "50px" }} />
                        <p>{gameList.length}</p>
                    </div>


            </div> 

            {options.length == 0 && <>
            <p>Congratulations</p>
            <p>If you want to keep playing</p>

            </> }
                <Question country={country} options={options} answerHandler={answerHandler} startGame={startGame} isCorrect={isCorrect} />
            </div> }
            
            
           { !isStarted &&<> <SetupQuiz startGame={startGame} /> </> }
          

            </>
    )
}

