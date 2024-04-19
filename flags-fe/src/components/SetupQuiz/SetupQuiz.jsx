import { useEffect, useState } from "react";

import countriesData from "../../assets/data/countries.json";

import styles from "./SetupQuiz.module.css"

export default function SetupQuiz({ startGame }) {

    const [gameConfig, setGameConfig] = useState({
        "region": null,
        "count": null
    })
    const [countries, setCountries] = useState(null);


    useEffect(() => {

        setCountries(selectRandomCountries(countriesData.filter(country => country.region == gameConfig.region), gameConfig.count))
       
    }, [gameConfig])


    const handleRegionChange = (selectedRegion) => {
        setGameConfig(config => ({ ...config, region: selectedRegion }))
    };

    const handleCountChange = (selectedCount) => {
        setGameConfig(config => ({ ...config, count: selectedCount }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (countries) {
            startGame(countries);
        }
    };

    // const selectedList = selectRandomCountries(countriesData.filter(country => country.region == selectedRegion),36);
    // startGame(selectedList);

    const selectRandomCountries = (list, count) => {
        const selected = [];
        const countryIndices = [];
        let i = 0;
        while (i < count && i < list.length) {
            const randomIndex = Math.floor(Math.random() * list.length);
            if (!countryIndices.includes(randomIndex)) {
                countryIndices.push(randomIndex);
                selected.push(list[randomIndex]);
                i++;
            }
        }
        return selected;
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
                </> : <p>{gameConfig.region}</p>}

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
                </> : <p>{gameConfig.count}</p>}


                {gameConfig.count && <button type="submit">Start Game</button>}

            </form>


        </div>
    )
}