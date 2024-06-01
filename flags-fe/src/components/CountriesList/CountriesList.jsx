
import { useNavigate } from "react-router-dom";

import countriesData from "../../assets/data/countries.json";
import Quit from "../Quit/Quit";

import '../../App.css';
import styles from "./CountriesList.module.css";


export default function CountriesList () {

    const navigate = useNavigate();

return (
    <>
        <div className={`${styles['game-header']} dark`} >
            <p className={styles['game-type']}> {countriesData.length} Countries </p>
             <Quit/>
        </div>

    <ol>
   { countriesData.map(country => <li key={country.name} className={styles['country']}>

    <div className={styles['country-container']}>
    <div className={styles['img-container']} >
        <img src={`/svg/${country.code2.toLowerCase()}.svg `} alt={country.name} />
    </div>

    <ul className={styles['country-info']}>
        <li> <span> <strong>{country.name}</strong> </span>
        <button className='dark' onClick={() => navigate(`/countries-list/${country.code2}`)} > details </button>  
        
         </li>
        {/* <li> <span>Capital: <em>{country.capital}</em> </span>   </li> */}
       
    </ul>

   
 


    </div>
     
     </li>)}

     </ol>

    </>
)
}