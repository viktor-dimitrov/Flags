import { useState } from "react";
import { Link } from "react-router-dom";
import { useLoading } from "../../hooks/useLoading";

import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";

import styles from "./Home.module.css";


export default function Home () {

    const { isLoading, handleLoad } = useLoading();

  
    return (
        <div className={styles['wrapper']}>
                 {isLoading && <Loader/>}
            <main className={styles['home']} onLoad={() => handleLoad(false)} style={{ display: isLoading ? 'none' : 'block' }}>
                    
                    

                <header className={styles['header']}>
                    <div>
                        <h1>Country Quiz</h1>
                    </div>
                </header>

                <div className={styles['flagballs-cont']} >
                    <div className={styles['flagballs']} >
                   
                        <img src="/images/flags-wall.png"
                            alt="wallpapper"
                            />
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