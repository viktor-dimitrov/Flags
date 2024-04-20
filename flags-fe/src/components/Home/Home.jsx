import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";


import countriesData from "../../assets/data/countries.json";


import styles from "./Home.module.css";
import FlagsBoard from "../FlagsBoard/FlagsBoard";
import { useRandomSelector } from "../../hooks/useRandomSelector";



export default function Home () {

    const {selectRandomCountries} = useRandomSelector();



    return (
        <>
            <main className={styles['home']}>

                <header className={styles['header']}>
                    <div> </div>
                </header>
                <div className={styles['planet-cont']} >
                <div className={styles['planet']} >
                    <img src="/images/planet400.png" alt="banner" />
                </div>
                </div>
           
            <nav>
   
                <ul>
               
                    <li>  <Link to={"/quiz"} >Guess the Flag</Link> </li>
                </ul>
            </nav>


            <div className={styles['boards-cont']}  >  
              
            <FlagsBoard list={countriesData} count={36} />

            <FlagsBoard list={countriesData} count={25} />

            <FlagsBoard list={countriesData} count={16} />

            <FlagsBoard list={countriesData} count={9} />
            </div>


        </main >
       
        </>
    )
}