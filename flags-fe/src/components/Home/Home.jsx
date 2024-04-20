import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";


import styles from "./Home.module.css";



export default function Home () {



    return (
        <main className={styles['home']}>

            <header className={styles['header']}>
                <h1>colorcropp</h1>
            </header>
            <div>
                <img src="/images/planet400.png" alt="banner" />
            </div>
        <nav>
            <ul>
                <li> <Link to={"/quiz"} >Guess the Flag</Link> </li>
            </ul>
        </nav>
        
<Footer/>


     
        </main>
    )
}