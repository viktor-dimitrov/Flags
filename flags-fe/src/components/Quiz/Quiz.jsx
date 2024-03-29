import { useEffect, useState } from "react"
import countriesData from "../../data/countries.json"



export default function Quiz() {


    const [countryList, setCountryList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [scores, setScores] = useState(0);


    useEffect(() => {
        selectRandomCountries();

    }, []);


    const country = countryList[currentIndex];
    const options = countryList.slice();

    const selectRandomCountries = () => {
        const selected = [];
        const countryIndices = [];
        while (countryIndices.length < 10) {
            const randomIndex = Math.floor(Math.random() * countriesData.length);
            if (!countryIndices.includes(randomIndex)) {
                countryIndices.push(randomIndex);
                selected.push(countriesData[randomIndex]);
            }
        }
        setCountryList(selected);
    };


    const moveToNextQuestion = () => {
        if (currentIndex < countriesData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setQuizComplete(true);
        }
    };

    const answerHandler = (event) => {
        (event.target.textContent) === country.name ? setScores( (scores) => scores + 1) : null
        moveToNextQuestion();
        }

    return (

        <>

        <h1>Scores: {scores}</h1>
        {
        country ?   
                <div>   
                    <img src={`/svg/${country.code2.toLowerCase()}.svg `} alt={country.name} />
                </div> : <> <h1>wait</h1> </>
        }

     
                <div>
                {options.map((country, index) => <button key={index} onClick={answerHandler} >{country.name}</button>) }  
                </div>


                </>
    )
}

{/* <img src={`/svg/${country.code2.toLowerCase()}.svg `} alt="bg" /> */}