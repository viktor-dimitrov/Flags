
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { GameProvider } from './contexts/GameContext';

import Quiz from "./components/Quiz/Quiz";
import Home from './components/Home/Home';
import ListOfCountries from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import SetupQuiz from './components/SetupQuiz/SetupQuiz';



import './App.css';




function App() {


  return (
    <>

      <BrowserRouter>
      <GameProvider>    
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/setup" element={<SetupQuiz />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/countries-list" element={<ListOfCountries />} />
          <Route path="/countries-list/:countryCode2" element={<CountryDetails />} />
        </Routes>
        </GameProvider>
 

    

      </BrowserRouter>


    </>
  )
}

export default App
