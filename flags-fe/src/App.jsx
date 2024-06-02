
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Quiz from "./components/Quiz/Quiz";
import Home from './components/Home/Home';
import ListOfCountries from './components/CountriesList/CountriesList';
import CountryDetails from './components/CountryDetails/CountryDetails';

import './App.css';




function App() {


  return (
    <>

      <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/countries-list" element={<ListOfCountries />} />
          <Route path="/countries-list/:countryCode2" element={<CountryDetails />} />
        </Routes>

    

      </BrowserRouter>


    </>
  )
}

export default App
