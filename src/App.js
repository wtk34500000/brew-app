import React, {useEffect, useState} from 'react';
import './App.css';

import BreweriesList from "./components/BreweriesList";

const App= ()=> {

  const [data, setData]=useState([])
  
  useEffect(()=>{
    fetch("https://api.openbrewerydb.org/breweries")
    .then(req =>req.json())
    .then(result => console.log(result)||setData(result))
  },[])

  return (
    <div className="App">
      <BreweriesList data={data}/>
    </div>
  );
}

export default App;
