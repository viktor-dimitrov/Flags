import { useEffect, useState } from "react";
import { useRandomSelector } from "../../hooks/useRandomSelector";

import countriesData from "../../assets/data/countries.json";

import styles from "./SetupQuiz.module.css"

export default function SetupQuiz({ startGame }) {

    const {selectRandomCountries} = useRandomSelector();

    const [gameConfig, setGameConfig] = useState({
        "region": null,
        "count": null
    })

    const [countries, setCountries] = useState(null);

    useEffect(() => {
        setCountries(selectRandomCountries( gameConfig.region != "World" ? countriesData.filter(country => country.region == gameConfig.region) : countriesData, gameConfig.count))
    }, [gameConfig])


    const handleRegionChange = (selectedRegion) => {
        console.log(selectedRegion)
        setGameConfig(config => ({ ...config, region: selectedRegion }))
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

                {!gameConfig.region ? <>
                    <p>Choose Region:</p>
                    <label>
                        <input type="button" value="Europe" onClick={() => handleRegionChange("Europe")} />
                    </label>
                    <label>
                        <input type="button" value="Asia" onClick={() => handleRegionChange("Asia")} />
                    </label>
                    <label>
                        <input type="button" value="Africa" onClick={() => handleRegionChange("Africa")} />
                    </label>
                    <label>
                        <input type="button" value="Americas" onClick={() => handleRegionChange("Americas")} />
                    </label>
                    <label>
                        <input type="button" value="World" onClick={() => handleRegionChange("World")} />
                    </label>


                </> : null}

                {(gameConfig.region && !gameConfig.count) ? <>
                    <p>Choose Count:</p>
                    <label>
                        <input type="button" value="9" onClick={() => handleCountChange(9)} />
                    </label>
                    <label>
                        <input type="button" value="16" onClick={() => handleCountChange(16)} />
                    </label>
                    <label>
                        <input type="button" value="25" onClick={() => handleCountChange(25)} />
                    </label>
                    <label>
                        <input type="button" value="36" onClick={() => handleCountChange(36)} />
                    </label>
                </> : null}

        
                {gameConfig.count && <button type="submit">Start</button>}
              

                {gameConfig.count && <> <p>{gameConfig.count} flags </p>
         
                </>}
                {gameConfig.region && <>                                       
                                        <p>{gameConfig.region}</p>
                                            <div>
                                                <img src={`/images/${gameConfig.region}.png`} alt={gameConfig.region} />
                                            </div>
                                      </>
}

       

            </form>

          


        </div>
    )
}