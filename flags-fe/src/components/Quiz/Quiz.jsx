import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRandomSelector } from "../../hooks/useRandomSelector";

import { useLoading } from "../../hooks/useLoading";

import Quit from "../Quit/Quit";
import Question from "../Question/Question";
import FlagsBoard from "../FlagsBoard/FlagsBoard";
import SetupQuiz from "../SetupQuiz/SetupQuiz";
import Loader from "../Loader/Loader";

import styles from "./Quiz.module.css";


export default function Quiz(quizType) {

 
    const { selectRandomCountries, randomIndex } = useRandomSelector();
    const { isLoading, handleLoad } = useLoading();

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


    const answerHandler = (countryCode) => {

        const choice = countryCode
        let updatedList = [];

        choice === country.code3 ? [
            setScores((scores) => scores + 1),
            updatedList = gameList.filter(country => country.code3 !== choice),
            myList.unshift(gameList.find(country => country.code3 === choice)),
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

      

        <div className={styles['game-header']}>
            <p className={styles['game-type']}>Geuss the {quizType.type}</p>
             <Quit/>
        </div>
            {(isStarted && isLoading) && <Loader/>}
            {isStarted && 
                <div className={styles['quiz']} onLoad={()=>handleLoad(false)} style={{ display: isLoading ? 'none' : 'block' }}     >
                    <div className={styles['board-container']} >
                   
                        <FlagsBoard list={myList} {...gameConfig} className="myList" />
                        {gameList.length != 0 && <FlagsBoard list={gameList} {...gameConfig} className="gameList" />}
                    </div>


                    <div className={styles['units']}>
                     
                            <ul >
                                <li>
                                    <span>correct</span>
                                    <p > 
                                    <img src="svg/tick-mark-icon.svg" alt="true" /> {scores}
                                        
                                     </p>
                                </li>

                                <li>
                                    <span>wrong</span>
                                    <p > 
                                    <img src="svg/incorrect-icon.svg" alt="false" /> {currentStage - scores}
                                        
                                     </p>
                                </li>

                                <li>
                                    <span>attempts</span>
                               
                                    <p>
                                    <img src="svg/cursor-hand-icon.svg" alt="try" /> {currentStage}
                                     </p>
                                </li>
                            
                                   
                            {gameList.length != 0 && <li>
                                <span>remaining</span>
                                <p>
                                <img src="svg/database-icon.svg" alt="try" />{gameList.length}
                                </p>
                            </li>}
                               
                            </ul>
                        
                       

            
                    </div>

                    {options.length == 0 && <>
                        <p className={styles['greating']} >Game Over,<br /> You Rocked it!</p>

                        <button className={styles['play-again']} onClick={() => setIsStarted(false)} >Play Again</button>
                        <Link to="/" className={styles['play-again']}>Home</Link>

                    </>}
                    <Question country={country} options={options} answerHandler={answerHandler} quizType={quizType} />
                </div>}


            {!isStarted && <> <SetupQuiz startGame={startGame} /> </>}


        </>
    )
}

