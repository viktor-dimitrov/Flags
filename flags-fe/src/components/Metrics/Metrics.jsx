
import { useEffect } from "react";
import { useTimer } from "../../hooks/useTimer";
import "../../App.css";
import styles from "./Metrics.module.css";


export default function Metrics({ currentStage, scores, gameListLength, isStarted }) {


    const { second, minute, isActive, startTimer, stopTimer, resetTimer } = useTimer(0);

    useEffect(() => {
        if (isStarted && gameListLength !== 0) {
          startTimer();
        } else {
          stopTimer();
        //   resetTimer(); 
        }
      }, [isStarted, gameListLength]);

    return (

        <div className={`${styles['units']} dark`}>

            <ul >
                <li>
                    <p >
                        <img src="svg/tick-mark-icon.svg" alt="true" /> <span> {scores} </span>
                    </p>
                </li>

                <li>
                    <p >
                        <img src="svg/incorrect-icon.svg" alt="false" /> <span> {currentStage - scores} </span>
                    </p>
                </li>

                <li>
                    <p>
                        <img src="svg/stopwatch-icon.svg" alt="try" /> <span>{minute}</span>:<span>{second}</span>
                    </p>
                </li>

                <li>
                    <p>
                        <img src="svg/cursor-hand-icon.svg" alt="try" /> <span> {currentStage} </span>
                    </p>
                </li>

                {gameListLength != 0 && <li>

                    <p>
                        <img src="svg/database-icon.svg" alt="try" /> <span>{gameListLength}</span>
                    </p>
                </li>}

            </ul>

        </div>
    )
}