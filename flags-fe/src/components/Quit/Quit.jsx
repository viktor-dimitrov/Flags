import { Link } from "react-router-dom";

import styles from "./Quit.module.css";

export default function Quit () {


    return (
        <>
           <Link to="/" className={styles['quit']}>Quit</Link>
        </>
    )
}