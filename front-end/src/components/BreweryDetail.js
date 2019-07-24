import React from 'react';
import { withRouter } from 'react-router-dom';
import GoogleMap from './GoogleMap';

const BreweryDetail = ({brew, setBrewDetail, history}) =>{
    const isPathTrue=history.location.pathname ===`/breweries/${brew.id}`

    const handleOnClick = ()=>{
        setBrewDetail(brew)
        history.push(`/breweries/${brew.id}`)
    }

    return (
        <div className="container">
            <section>
                {isPathTrue? <button className="btn btn-primary mb-4 mt-4" onClick={()=>history.goBack()}> GO BACK</button>: ""}
            </section>
            <section 
                className={isPathTrue? "border":"border brew-card"}
                onClick={isPathTrue? null : ()=>handleOnClick()}

            >
                    <h3>{brew.name}</h3>
                    <p>Brewery_type: {brew.brewery_type}</p>
                    <p>Address1: {brew.street} </p>
                    <p>Address2: {brew.city}, {brew.state} {brew.postal_code}</p>
                    <p>Website: <a href={brew.website_url} target="_blank" >{brew.website_url}</a></p>
            </section>
            <section className="mt-2">
              {history.location.pathname ===`/breweries/${brew.id}`? <GoogleMap brew ={brew}/>: ""}
            </section>
        </div>
    )
}


export default withRouter(BreweryDetail);