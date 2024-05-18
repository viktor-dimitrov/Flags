
import { Link, useNavigate } from "react-router-dom";
import { useLoading } from "../../hooks/useLoading";

import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";



import "../../App.css"; 
import styles from "./Home.module.css";



export default function Home () {

    const navigate = useNavigate();

    const { isLoading, handleLoad } = useLoading();

  
    return (
        <div className={styles['wrapper']}>
                 {isLoading && <Loader/>}
            <main className={styles['home']} onLoad={() => handleLoad(false)} style={{ display: isLoading ? 'none' : 'block' }}>
                    
                    

                <header className={`${styles['header']} dark`}>
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

                    <li > <button className="dark" onClick={ ()=> navigate('/quiz-flags')} >Guess The Flag</button> </li>
                    <li > <button className="dark" onClick={ ()=> navigate('/quiz-capitals')} >Guess The Capital</button> </li>
                  
              
                    <li className={styles[`countries-list`]} > <button className='dark' onClick={ ()=> navigate('/countries-list')} >Countries List</button> </li>
        
               
                  
                </ul>
            </nav>

        </main >

        <Footer/>

       
        </div>
    )
}