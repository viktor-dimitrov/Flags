import { useEffect, useState } from "react";
import { useRandomSelector } from "../../hooks/useRandomSelector";
import { useLoading } from "../../hooks/useLoading";

import countriesData from "../../assets/data/countries.json";

import Loader from "../Loader/Loader";

import styles from "./SetupQuiz.module.css";



const regions = ["World", "Europe", "Asia", "Africa", "Americas"]

export default function SetupQuiz({ startGame }) {

    const { selectRandomCountries } = useRandomSelector();
    const { isLoading, handleLoad } = useLoading();

    const [gameConfig, setGameConfig] = useState({
        "region": "World",
        "count": 9
    })

    const [activeRegion, setActiveRegion] = useState("world");

    const [countries, setCountries] = useState(null);

    useEffect(() => {
    
        setCountries(selectRandomCountries( gameConfig.region != "World" ? countriesData.filter(country => country.region == gameConfig.region) : countriesData, gameConfig.count));
       
    }, [gameConfig])


    const handleRegionChange = (selectedRegion) => {
        handleLoad(true);
        console.log(isLoading)
        setGameConfig(config => ({ ...config, region: selectedRegion }));
        setActiveRegion(activeRegion => selectedRegion.toLowerCase());
    };

    const handleCountChange = (selectedCount) => {
        setGameConfig(config => ({ ...config, count: selectedCount }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (countries) {
            startGame(countries, gameConfig);
        }
    };



    return (


        <div className={styles['setup']} >
            <form onSubmit={handleSubmit}>

            <div className={styles['count-wrapper']}>
                    <p>Questions:</p>
                    <div className={styles['count-btns']}>
                    <label>
                        <input type="radio" name="count" value="9" onClick={() => handleCountChange(9)} defaultChecked />
                        9
                    </label>
                    <label>
                        <input type="radio" name="count" value="16" onClick={() => handleCountChange(16)} />
                        16
                    </label>
                    <label>
                        <input type="radio" name="count" value="25" onClick={() => handleCountChange(25)} />
                        25
                    </label>
                    <label>
                        <input type="radio" name="count" value="36" onClick={() => handleCountChange(36)} />
                        36
                    </label>
                    </div>
                </div> 
        

                 <div className={styles['region-btns']}>
                    <p>Region:</p>

                    {regions.map(region => 
                        <label key={region} >
                        <input  className={activeRegion === region.toLocaleLowerCase() ? styles['active'] : null}  type="button" name={region.toLowerCase()} value={region} onClick={() => handleRegionChange(region)} />
                    </label>
                    )}

                </div> 


                {gameConfig.region && <button className={styles['start-btn']} type="submit">Start</button>}
              

                {gameConfig.region && <> 
                                    {isLoading && <Loader/> }     
                                    <div className={styles['region-img']} onLoad={() => handleLoad(false)} style={{ display: isLoading ? 'none' : 'block' }}  >
                                            <img src={`/images/${gameConfig.region}.png`} alt={gameConfig.region} />
                                        </div>                                 
                               
                                      </>
}

       

            </form>

          
      

        </div>
    )
}