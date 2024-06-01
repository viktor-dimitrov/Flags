import { useNavigate, useParams } from "react-router-dom"

import countriesData from "../../assets/data/countries.json";
import { useEffect, useState } from "react";

import '../../App.css';
import styles from './CountryDetails.module.css';

export default function CountryDetails() {


    const navigate = useNavigate();
    const { countryCode2 } = useParams();

    const [country, setCountry] = useState(null);

    useEffect(() => {


        const foundCountry = countriesData.find(country => country.code2 == countryCode2)
        setCountry(foundCountry)


    }, [countryCode2])


    console.log(country)


    return (

        <>

         <div className={`${styles['details-header']} dark`}>
            <button className='dark' onClick={()=> navigate('/countries-list')} >Back</button>
           
         </div>
        

            {country &&

                <div className={styles['details-container']} >

                    <div  className={styles['img-container']} >
                        <img src={`/svg/${country.code2.toLowerCase()}.svg `} alt={country.name} />
                    </div>


                    <ul>

                        <li> <p>Name: <strong> {country.name} </strong> </p> </li>
                        <li> <p>Capital: <strong> {country.capital} </strong> </p> </li>
                        <li> <p>Region: <strong> {country.region} </strong> </p> </li>
                        <li> <p>Subregion: <strong> {country.subregion} </strong> </p> </li>
                        <li>States:
                            <ol>
                      
                           {country.states.map(state => <li key={state.name} > <strong> {state.name} </strong></li> )}
                     </ol>
                         </li>
                       
                    </ul>

                   
                   

                </div>

            }

        </>
    )
}