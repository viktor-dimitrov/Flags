
import styles from "./RegionButtons.module.css";

export default function RegionButtons ({startGame}) {

    return (
       
            <div className={styles['region-buttons']} >
                <p>Choose Region</p>
                <button onClick={startGame} >Europe</button>
                <button onClick={startGame} >Asia</button>
                <button onClick={startGame} >Africa</button>
                <button onClick={startGame} >Americas</button>
            </div>

    )
}