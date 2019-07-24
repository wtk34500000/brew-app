import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import BreweriesList from "./components/BreweriesList";
import BreweryDetail from './components/BreweryDetail';
import Home from './components/Home';
import Carousel from './components/Carousel'

const App= ()=> {

  const [data, setData]=useState([])

  const [brewDetail, setBrewDetail]= useState({})

  const [term, setTerm] = useState("")
  
  //post request, retrieving data from backend
  useEffect(()=>{
    if(term !== ""){

      const url='https://api-brew-backend.herokuapp.com/breweries' || 'http://localhost:3001/breweries'

      fetch(url, {
        method: 'post',
        headers: {
          'content-type':"application/json"
        },
        body:JSON.stringify({"term": term})
      })
      .then(req =>{
        if(req.ok){
          return req.json()
        }else{
          throw Error(req.statusText)
        }  
      })
      .then(result => setData(result))
      .catch(err=>console.log(err))
    }
    
  },[term])

  return (
    <div className="App mt-3">
        <Home setTerm={setTerm}/>
      <Switch>
        <Route path='/breweries/:id' render={()=> <BreweryDetail brew={brewDetail}/>}/>
        <Route path='/breweries' render={data && data.length>0? ()=> <BreweriesList data={data} setBrewDetail={setBrewDetail}/>:()=><h1>Loading.... or Invalid city name!</h1>}/>
        <Route path='/' render={()=> <Carousel />} />
      </Switch>
    </div>
  );
}

export default App;
