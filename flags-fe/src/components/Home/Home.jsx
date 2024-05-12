import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";


import countriesData from "../../assets/data/countries.json";


import styles from "./Home.module.css";
import FlagsBoard from "../FlagsBoard/FlagsBoard";
import { useRandomSelector } from "../../hooks/useRandomSelector";



export default function Home () {

    const {selectRandomCountries} = useRandomSelector();



    return (
        <div className={styles['wrapper']}>
            <main className={styles['home']}>

                <header className={styles['header']}>
                    <div>
                         <h1>Country Quiz</h1>
                     </div>
                </header>

                <div className={styles['flagballs-cont']} >
                <div className={styles['flagballs']} >
                    <img src="/images/flags-wall.png" alt="wallpapper" />
                </div>
                </div>


           
            <nav>
                <ul>
                    <li>  <Link to={"/quiz-flags"} >Guess The Flag</Link> </li>
              
                    <li>  <Link to={"/quiz-capitals"} >Guess The Capital</Link> </li>
               
                    <li className={styles['countries-list']} >  <Link to={"/countries-list"} >Countries List</Link> </li>
                </ul>
            </nav>

        </main >

        <Footer/>

       
        </div>
    )
}