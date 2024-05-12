
import styles from "./Loader.module.css"

export default function Loader () {


    return (
        <div className={styles['loader-container']} >
            <div className={styles['lds-ellipsis']}><div></div><div></div><div></div><div></div></div>
        </div>
    )
}