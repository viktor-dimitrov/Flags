import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import countriesData from "../assets/data/countries.json";

export const GameContext = createContext();

export const GameProvider = ({
    children
}) => {

    const navigate = useNavigate();

    const [gameConfig, setGameConfig] = useState({
        "quizType": null,
        "region": null,
        "count": null,
        "style": null
    });

    const [countries, setCountries] = useState(null)


    const quizTypeHandler = (selectedQuizType) => {
        setGameConfig(config => ({ ...config, quizType: selectedQuizType }));
    }

    const startGame = (countries, gameConfig) => {
        setGameConfig(gameConfig);
        setCountries(countries);
        navigate("/quiz")
    }
  
    const context = {
        gameConfig,
        countries,
        quizTypeHandler,
        startGame
       
    }

    return <>
    <GameContext.Provider value={context}>
        {children}
    </GameContext.Provider>
    </>

}

export const useGameContext = () => {
    const context = useContext(GameContext);
    return context
}