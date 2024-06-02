import { useEffect, useState } from "react";
import { useRandomSelector } from "../../hooks/useRandomSelector";
import { useLoading } from "../../hooks/useLoading";

import countriesData from "../../assets/data/countries.json";

import Loader from "../Loader/Loader";

import '../../App.css';
import styles from "./SetupQuiz.module.css";



const regions = ["World", "Europe", "Asia", "Africa", "Americas"]

export default function SetupQuiz({ startGame, quizTypeHandler }) {

    const { selectRandomCountries } = useRandomSelector();
    const { isLoading, handleLoad } = useLoading();

    const [gameConfig, setGameConfig] = useState({
        "quizType": null,
        "region": "World",
        "count": 16,
        "style": 'survival'
    })

    const [activeRegion, setActiveRegion] = useState("world");

    const [countries, setCountries] = useState(null);

    useEffect(() => {
    
        setCountries(selectRandomCountries( gameConfig.region != "World" ? countriesData.filter(country => country.region == gameConfig.region) : countriesData, gameConfig.count));
       
    }, [gameConfig])


    const handleQuizTypeChange = (selectedQuizType) => {
        setGameConfig(config => ({ ...config, quizType: selectedQuizType }));
        quizTypeHandler(selectedQuizType);
    };


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

            {!gameConfig.quizType && <div>

                <ul className={styles['games-container']}>
                    <li>
                        <div className={styles['type-img']}>
                            <img src="/images/guessthecountry.png" alt="guessthecountry" />
                        </div>
                        <div className={styles['game-info']}>
                            <h5>Guess the Country</h5>   
                        <button className="dark" onClick={() => handleQuizTypeChange("flag")} >Play</button>
                        </div>
                    </li>

                    <li>
                    <div className={styles['type-img']}>
                            <img src="/images/guesthecapital.png" alt="guessthecapital" />
                        </div>
                        <div className={styles['game-info']}>
                            <h5>Guess the Capital</h5>   
                            <button className="dark" onClick={() => handleQuizTypeChange("capital")} >Play</button>
                        </div>
                    </li>

                    
                    {/* <li>
                    <div className={styles['type-img']}>
                            <img src="/images/guesthecapita.png" alt="tabtheflag" />
                        </div>
                        <div className={styles['game-info']}>
                            <h5>Flags Quest</h5>   
                            <button className="dark" onClick={() => handleQuizTypeChange("quest")} >Play</button>
                        </div>
                    </li> */}
                </ul>
            </div>}

            {gameConfig.quizType && <form onSubmit={handleSubmit}>
                <div className={styles['wrapper']}>
                    <div className={styles['region-btns']}>
                        <p>Region:</p>
                        {regions.map(region =>
                            <label key={region} >
                                <input className={`${activeRegion === region.toLocaleLowerCase() ? styles['active'] : null} dark`} type="button" name={region.toLowerCase()} value={region} onClick={() => handleRegionChange(region)} />
                            </label>
                        )}
                    </div>

                    <div className={styles['radio-wrapper']}>
                        <p>Size:</p>
                        <div className={`${styles['radio-btns']} dark`}>
                            <label>
                                <input type="radio" name="count" value="9" onClick={() => handleCountChange(9)} />
                                3x3
                            </label>
                            <label>
                                <input type="radio" name="count" value="16" onClick={() => handleCountChange(16)} defaultChecked />
                                4x4
                            </label>
                            <label>
                                <input type="radio" name="count" value="25" onClick={() => handleCountChange(25)} />
                                5x5
                            </label>
                            <label className={styles['game36']}>
                                <input type="radio" name="count" value="36" onClick={() => handleCountChange(36)} />
                                6x6
                            </label>
                        </div>
                    </div>

                    <div className={styles['radio-wrapper']}>
                        <p>Style:</p>
                        <div className={`${styles['radio-btns']} dark`}>
                            <label>
                                <input type="radio" name="style" value="freerun" onClick={() => handleStyleChange("freerun")} />
                                Relax
                            </label>
                            <label>
                                <input type="radio" name="style" value="sprint" onClick={() => handleStyleChange("sprint")} disabled />
                                Sprint
                            </label>
                            <label>
                                <input type="radio" name="style" value="survival" onClick={() => handleStyleChange("survival")} defaultChecked />
                                Survival
                            </label>
                        </div>
                    </div>
                </div>

                {gameConfig.region && <button className={`${styles['start-btn']} dark`} type="submit">Start</button>}

                {gameConfig.region && <>
                    {isLoading && <Loader />}
                    <div className={styles['region-img']} onLoad={() => handleLoad(false)} style={{ display: isLoading ? 'none' : 'block' }}  >
                        <img src={`/images/${gameConfig.region}.png`} alt={gameConfig.region} />
                    </div>

                </>
                }
            </form>}
        </div>
    )
}