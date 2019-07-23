import React from 'react';
import BreweryDetail from '../components/BreweryDetail'

const BreweriesList = ({data, setBrewDetail})=>{
    const listArr = data.map(brew => <BreweryDetail key={brew.id} setBrewDetail={setBrewDetail} brew={brew}/>)

    return (
        <div className="container">
            <h1>Breweries List: </h1>
            <ul>{listArr}</ul>
        </div>
        
    )
}

export default BreweriesList;