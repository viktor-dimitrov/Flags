import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRandomSelector } from "../../hooks/useRandomSelector";

import Question from "../Question/Question";
import FlagsBoard from "../FlagsBoard/FlagsBoard";
import SetupQuiz from "../SetupQuiz/SetupQuiz";

import styles from "./Quiz.module.css";

export default function Quiz() {

    const {selectRandomCountries, randomIndex} = useRandomSelector();

    const [gameList, setGameList] = useState([]);
    const [options, setOptions] = useState([]);
    const [currentStage, setCurrentStage] = useState(0);
    const [scores, setScores] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const [myList, setMyList] = useState([]);
    const [board, setBoard] = useState(360)

    useEffect(() => {
        isStarted ? startGame() : null
    }, []);

    const startGame = (selectedList) => {
        setBoard((Math.sqrt(selectedList.length) * 30));
        setGameList(selectedList);
        setMyList([]);
        setCurrentStage(0);
        setScores(0);
        setOptions(selectRandomCountries(selectedList, 4));
        setIsStarted(true);
    }


    const answerHandler = (event) => {
        const choice = event.target.textContent;
        let newList = [];

        choice === country.name ? [
            setScores((scores) => scores + 1),
            newList = gameList.filter(country => country.name !== choice),
            myList.unshift(gameList.find(country => country.name === choice)),
            setGameList((list) => newList),
            setOptions(selectRandomCountries(newList, 4))
        ] :  setOptions(selectRandomCountries(gameList, 4));
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
                        <p>{scores} / {currentStage}</p>
                    </div>

            

            { gameList.length != 0 &&    <div>
                        <p>{gameList.length}</p>
                    </div>}
            </div> 

            {options.length == 0 && <>
            <p>Congratulations</p>
            
            <button className={styles['play-again']} onClick={() => setIsStarted(false)} >Play Again</button>
            <Link to="/" className={styles['play-again']}>Home</Link>

            </> }
                <Question country={country} options={options} answerHandler={answerHandler} startGame={startGame}  />
            </div> }
            
            
           { !isStarted && <> <SetupQuiz startGame={startGame} /> </> }
          

            </>
    )
}

