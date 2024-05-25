import "../../App.css";

import styles from "./Metrics.module.css";

export default function Metrics ({currentStage, scores, gameListLength}) {

    return (

        <div className={`${styles['units']} dark`}>
                     
        <ul >
            <li>
               
                <p > 
                <img src="svg/tick-mark-icon.svg" alt="true" /> {scores}
                    
                 </p>
            </li>

            <li>
                
                <p > 
                <img src="svg/incorrect-icon.svg" alt="false" /> {currentStage - scores}
                    
                 </p>
            </li>

            <li>
                
           
                <p>
                <img src="svg/cursor-hand-icon.svg" alt="try" /> {currentStage}
                 </p>
            </li>
        
               
        {gameListLength != 0 && <li>
          
            <p>
            <img src="svg/database-icon.svg" alt="try" />{gameListLength}
            </p>
        </li>}
           
        </ul>
    
</div>
    )
}