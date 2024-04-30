import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRandomSelector } from "../../hooks/useRandomSelector";

import Question from "../Question/Question";
import FlagsBoard from "../FlagsBoard/FlagsBoard";
import SetupQuiz from "../SetupQuiz/SetupQuiz";

import styles from "./Quiz.module.css";

export default function Quiz() {

    const { selectRandomCountries, randomIndex } = useRandomSelector();

    const [gameList, setGameList] = useState([]);
    const [options, setOptions] = useState([]);
    const [currentStage, setCurrentStage] = useState(0);
    const [scores, setScores] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const [myList, setMyList] = useState([]);
    const [gameConfig, setGameConfig] = useState({
        "region": null,
        "count": null
    });


    useEffect(() => {
        isStarted ? startGame() : null
    }, []);


    const startGame = (selectedList, gameConfig) => {
        setGameConfig(gameConfig);
        setGameList(selectedList);
        setMyList([]);
        setCurrentStage(0);
        setScores(0);
        setOptions(selectRandomCountries(selectedList, 4));
        setIsStarted(true);
    }


    const answerHandler = (event) => {

        const choice = event.target.textContent;
        let updatedList = [];

        choice === country.name ? [
            setScores((scores) => scores + 1),
            updatedList = gameList.filter(country => country.name !== choice),
            myList.unshift(gameList.find(country => country.name === choice)),
            setGameList((list) => updatedList),
            setOptions(selectRandomCountries(updatedList, 4))
        ] : setOptions(selectRandomCountries(gameList, 4));

        nextStage();
    }

    const nextStage = () => {
        setCurrentStage((stage) => stage + 1)
    }

    const country = options[randomIndex(options.length)];

    return (

        <>
            {isStarted &&
                <div className={styles['quiz']}  >

                    <div className={styles['board-container']}>
                        <FlagsBoard list={myList} {...gameConfig} className="myList" />
                        {gameList.length != 0 && <FlagsBoard list={gameList} {...gameConfig} className="gameList" />}
                    </div>


                    <div className={styles['units']}>
                        <div>
                            <p>{scores} / {currentStage}</p>
                        </div>

                        {gameList.length != 0 && <div>
                            <p>{gameList.length}</p>
                        </div>}
                    </div>

                    {options.length == 0 && <>
                        <p>Congratulations</p>

                        <button className={styles['play-again']} onClick={() => setIsStarted(false)} >Play Again</button>
                        <Link to="/" className={styles['play-again']}>Home</Link>

                    </>}
                    <Question country={country} options={options} answerHandler={answerHandler} startGame={startGame} />
                </div>}


            {!isStarted && <> <SetupQuiz startGame={startGame} /> </>}


        </>
    )
}

