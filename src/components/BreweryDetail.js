import React from 'react';
import { withRouter } from 'react-router-dom';
import GoogleMap from './GoogleMap';

const BreweryDetail = ({brew, setBrewDetail, history}) =>{
    
    const handleOnClick = ()=>{
        setBrewDetail(brew)
        history.push(`/breweries/${brew.id}`)
    }

    return (
        <div>
            <section 
                style={{"border":"1px solid black"}}
                onClick={()=> handleOnClick()}
            >
                <h3>Name: {brew.name}</h3>
                <p>Brewery_type: {brew.brewery_type}</p>
                <p>Adress: {brew.street} </p>
                <p>{brew.city}, {brew.state} {brew.postal_code}</p>
                <a href={brew.website_url}>{brew.website_url}</a>
            </section>
            <section>
              {history.location.pathname ===`/breweries/${brew.id}`? <GoogleMap brew ={brew}/>: ""}
            </section>
        </div>
    )
}


export default withRouter(BreweryDetail);