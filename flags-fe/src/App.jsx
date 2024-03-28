
import countries from "./data/countries.json";

function App() {

  console.log(countries)


  return (
    <>

<h1>{countries[25].name}</h1>
<img src={`/svg/${countries[25].code2.toLowerCase()}.svg `}alt="bg" />





      <p className="links">
      https://github.com/stefanbinder <br />
      https://github.com/hampusborgos
      </p>
    </>
  )
}

export default App
