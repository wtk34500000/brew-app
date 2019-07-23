import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import BreweriesList from "./components/BreweriesList";
import BreweryDetail from './components/BreweryDetail';
import Home from './components/Home';

const App= ()=> {

  const [data, setData]=useState([])

  const [brewDetail, setBrewDetail]= useState({})

  const [term, setTerm] = useState("")
  
  useEffect(()=>{
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${term}`)
    .then(req =>{
      if(req.ok){
        return req.json()
      }else{
        throw Error(req.statusText)
      }  
    })
    .then(result => setData(result))
    .catch(err=>console.log(err))
  },[term])

  return (
    <div className="App">
      <Switch>
        <Route path='/breweries/:id' render={()=> <BreweryDetail brew={brewDetail}/>}/>
        <Route path='/breweries' render={()=> <BreweriesList data={data} setBrewDetail={setBrewDetail}/>}/>
        <Route path='/' render={()=> <Home setTerm={setTerm}/>}/>
      </Switch>
    </div>
  );
}

export default App;
