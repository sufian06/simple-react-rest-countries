import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);

  useEffect( () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])

  return (
    <div>
      <h1>Visiting every country in the world!</h1>
      <h3>Available Countries: {countries.length}</h3>
    </div>
  )
}

export default App;
