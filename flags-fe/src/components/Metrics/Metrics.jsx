import "../../App.css";

import styles from "./Metrics.module.css";

export default function Metrics ({currentStage, scores, gameListLength}) {

    return (

        <div className={`${styles['units']} dark`}>
                     
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
        
               
        {gameListLength != 0 && <li>
            <span>remaining</span>
            <p>
            <img src="svg/database-icon.svg" alt="try" />{gameListLength}
            </p>
        </li>}
           
        </ul>
    
</div>
    )
}