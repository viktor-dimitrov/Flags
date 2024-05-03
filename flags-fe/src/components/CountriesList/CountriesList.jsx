
import countriesData from "../../assets/data/countries.json";
import Quit from "../Quit/Quit";

import styles from "./CountriesList.module.css";

export default function CountriesList () {

return (
    <>

<Quit/>
    <h1>Countries List</h1>

    <ol>
   { countriesData.map(country => <li key={country.name} className={styles['country']}>

    <div className={styles['country-container']}>
    <div className={styles['img-container']} >
        <img src={`/svg/${country.code2.toLowerCase()}.svg `} alt={country.name} />
    </div>

    <ul className={styles['country-info']}>
        <li> <span>Name: <em>{country.name}</em> </span>   </li>
        <li> <span>Capital: <em>{country.capital}</em> </span>   </li>
       
      
    </ul>
 


    </div>
     
     </li>)}

     </ol>

    </>
)
}