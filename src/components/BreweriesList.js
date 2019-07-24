import React from 'react';
import {withRouter} from 'react-router-dom';
import BreweryDetail from '../components/BreweryDetail'

const BreweriesList = ({data, setBrewDetail, history})=>{
    const listArr = data.map(brew => <BreweryDetail key={brew.id} setBrewDetail={setBrewDetail} brew={brew}/>)

    return (
        <div className="container">
            <div>
                <h1>Breweries List: </h1>
                <hr />
                <ul>{listArr}</ul>
            </div>
            
        </div>
        
    )
}

export default withRouter(BreweriesList);