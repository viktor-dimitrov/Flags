import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRandomSelector } from "../../hooks/useRandomSelector";

import { useLoading } from "../../hooks/useLoading";

import Quit from "../Quit/Quit";
import Question from "../Question/Question";
import FlagsBoard from "../FlagsBoard/FlagsBoard";
import SetupQuiz from "../SetupQuiz/SetupQuiz";
import Loader from "../Loader/Loader";
import Metrics from "../Metrics/Metrics";
import Greating from '../Greating/Graeting';

import '../../App.css'
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
        "count": null,
        "style": null
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

        const currentQuestion = country;
        const isAnswerCorrect = countryCode === country.code3;
        let updatedList = gameList;
      
        if (isAnswerCorrect) {
          setScores(scores => scores + 1);
          myList.unshift(gameList.find(country => country.code3 === countryCode));
          updatedList = gameList.filter(country => country.code3 !== countryCode);
        } else if (gameConfig.style === 'survival') {
          myList.unshift({ code2: 'none', name: uuidv4() });
          updatedList = gameList.filter(country => country.code3 !== currentQuestion.code3);
        }
      
        setGameList(updatedList);
        setOptions(selectRandomCountries(updatedList, 4));
        nextStage();

    }

    const nextStage = () => {
        setCurrentStage((stage) => stage + 1)
    }

    const country = options[randomIndex(options.length)];

    return (

        <>

      

        <div className={`${styles['game-header']} dark`}>
            <p className={styles['game-type']}>Guess the {quizType.type}</p>
             <Quit/>
        </div>
            {(isStarted && isLoading) && <Loader/>}
            {isStarted && 
                <div className={styles['quiz']} onLoad={()=>handleLoad(false)} style={{ display: isLoading ? 'none' : 'block' }}     >
                    <div className={styles['board-container']} >
                   
                        <FlagsBoard list={myList} {...gameConfig} className="myList" />
                        {gameList.length != 0 && <FlagsBoard list={gameList} {...gameConfig} className="gameList" />}
                    </div>

                    <Metrics currentStage={currentStage} scores={scores} gameListLength={gameList.length} isStarted={isStarted}/> 

                        {options.length == 0 && <>

                        <div className={`${styles['greating-container']} dark`}>
                            <div className={`${styles['accuracy']} `}>
                                <img src="svg/target-goals-icon.svg" alt="accuracy" />
                                <p >{((scores / currentStage) * 100).toFixed(2)}%</p>
                            </div>

                            <Greating accuracy={(scores / currentStage) * 100} />
                        </div>

                               
                        <p className={`${styles['greating']} `} > Game Over</p>

                        <button className={`${styles['play-again']} dark`} onClick={() => setIsStarted(false)} >Play Again</button>
                        <Link to="/" className={`${styles['play-again']} dark`}>Home</Link>

                    </>}
                    <Question country={country} options={options} answerHandler={answerHandler} quizType={quizType} />
                </div>}


            {!isStarted && <> <SetupQuiz startGame={startGame} /> </>}


        </>
    )
}

