
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Quiz from "./components/Quiz/Quiz";
import Home from './components/Home/Home';
import ListOfCountries from './components/CountriesList/CountriesList';

function App() {


  return (
    <>

      <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/countries-list" element={<ListOfCountries />} />
        </Routes>

    

      </BrowserRouter>


    </>
  )
}

export default App
