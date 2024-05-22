import { useEffect, useState } from "react";
import { useRandomSelector } from "../../hooks/useRandomSelector";
import { useLoading } from "../../hooks/useLoading";

import countriesData from "../../assets/data/countries.json";

import Loader from "../Loader/Loader";

import '../../App.css';
import styles from "./SetupQuiz.module.css";



const regions = ["World", "Europe", "Asia", "Africa", "Americas"]

export default function SetupQuiz({ startGame }) {

    const { selectRandomCountries } = useRandomSelector();
    const { isLoading, handleLoad } = useLoading();

    const [gameConfig, setGameConfig] = useState({
        "region": "World",
        "count": 16,
        "style": 'survival'
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

    const handleStyleChange = (selectedStyle) => {
        setGameConfig(config => ({ ...config, style: selectedStyle }))
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

            <div className={styles['radio-wrapper']}>
                    <p>Questions:</p>
                    <div className={`${styles['radio-btns']} dark`}>
                    <label>
                        <input type="radio" name="count" value="9" onClick={() => handleCountChange(9)}  />
                        9
                    </label>
                    <label>
                        <input type="radio" name="count" value="16" onClick={() => handleCountChange(16)} defaultChecked />
                        16
                    </label>
                    <label>
                        <input type="radio" name="count" value="25" onClick={() => handleCountChange(25)} />
                        25
                    </label>
                    <label  className={styles['game36']}>
                        <input type="radio" name="count" value="36" onClick={() => handleCountChange(36)} />
                        36
                    </label>
                    </div>
                </div> 
        

                 <div className={styles['region-btns']}>
                    <p>Region:</p>

                    {regions.map(region => 
                        <label key={region} >
                        <input  className={`${activeRegion === region.toLocaleLowerCase() ? styles['active'] : null} dark`}  type="button" name={region.toLowerCase()} value={region} onClick={() => handleRegionChange(region)} />
                    </label>
                    )}

                </div> 

                <div className={styles['radio-wrapper']}>
                    <p>Game Style:</p>
                    <div className={`${styles['radio-btns']} dark`}>
                    <label>
                        <input type="radio" name="style" value="freerun" onClick={() => handleStyleChange("freerun")}  />
                        FreeRun
                    </label>
                    <label>
                        <input type="radio" name="style" value="sprint" onClick={() => handleStyleChange("sprint")} disabled />
                        Sprint
                    </label>
                    <label>
                        <input type="radio" name="style" value="survival" onClick={() => handleStyleChange("survival")} defaultChecked/>
                        Survival
                    </label>
                    </div>
                </div> 


                {gameConfig.region && <button className={`${styles['start-btn']} dark`} type="submit">Start</button>}
              

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