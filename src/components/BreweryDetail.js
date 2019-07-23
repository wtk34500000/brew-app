import React from 'react';
import { withRouter } from 'react-router-dom';
import GoogleMap from './GoogleMap';

const BreweryDetail = ({brew, setBrewDetail, history}) =>{
    
    const handleOnClick = ()=>{
        setBrewDetail(brew)
        history.push(`/breweries/${brew.id}`)
    }

    return (
        <div className="container form-group">
            <section>
                {history.location.pathname ===`/breweries/${brew.id}`? <button className="btn btn-primary mb-4" onClick={()=>history.goBack()}> GO BACK</button>: ""}
            </section>
            <section 
                style={{"border":"1px solid black"}}
                onClick={history.location.pathname ===`/breweries/${brew.id}`? null : ()=>handleOnClick()}
                // onClick={()=> handleOnClick()}
            >
                
                <div style={{textAlign:"left"}}>
                    <h3>{brew.name}</h3>
                    <p>Brewery_type: {brew.brewery_type}</p>
                    <p>Address1: {brew.street} </p>
                    <p>Address2: {brew.city}, {brew.state} {brew.postal_code}</p>
                    <a href={brew.website_url}>{brew.website_url}</a>
                </div>
                
            </section>
            <section className="mt-2">
              {history.location.pathname ===`/breweries/${brew.id}`? <GoogleMap brew ={brew}/>: ""}
            </section>
        </div>
    )
}


export default withRouter(BreweryDetail);