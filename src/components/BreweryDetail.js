import React from 'react';
import { withRouter } from 'react-router-dom'

const BreweryDetail = ({brew, setBrewDetail, history}) =>{
    
    const handleOnClick = ()=>{
        setBrewDetail(brew)
        history.push(`/breweries/${brew.id}`)
    }

    return (
        <li 
            style={{"border":"1px solid black"}}
            onClick={()=> handleOnClick()}
        >
            <h3>Name: {brew.name}</h3>
            <p>Brewery_type: {brew.brewery_type}</p>
            <p>Adress: {brew.street} </p>
            <p>{brew.city}, {brew.state} {brew.postal_code}</p>
            <a href={brew.website_url}>{brew.website_url}</a>
        </li>
    )
}


export default withRouter(BreweryDetail);