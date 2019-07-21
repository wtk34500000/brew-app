import React from 'react';
import BreweryDetail from '../components/BreweryDetail'

const BreweriesList = ({data})=>{
    console.log(data)
    const listArr = data.map(brew => <ul><BreweryDetail brew={brew}/></ul>)

    return <div>{listArr}</div>
}

export default BreweriesList;