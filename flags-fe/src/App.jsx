
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Quiz from "./components/Quiz/Quiz";
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {


  return (
    <>

      <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>

        <Footer/>

      </BrowserRouter>


    </>
  )
}

export default App
