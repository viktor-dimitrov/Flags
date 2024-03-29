
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Quiz from "./components/Quiz/Quiz";


function App() {


  return (
    <>

      <BrowserRouter>
     
        <Routes>
        <Route path="/" element={<> <Link to={"/quiz"} >Get started</Link> </>} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
