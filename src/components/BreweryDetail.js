import React from 'react';
import { withRouter } from 'react-router-dom';
import GoogleMap from './GoogleMap';

const BreweryDetail = ({brew, setBrewDetail, history}) =>{

    const {id, name, brewery_type, street, city, postal_code, website_url}=brew;

    const isPathTrue=history.location.pathname ===`/breweries/${id}`;

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
                    <h3>{name}</h3>
                    <p>Brewery_type: {brewery_type}</p>
                    <p>Address1: {street} </p>
                    <p>Address2: {city}, {brew.state} {postal_code}</p>
                    <p>Website: <a href={website_url} target="_blank" rel="noopener noreferrer" >{website_url}</a></p>
            </section>
            <section className="mt-2">
              {history.location.pathname ===`/breweries/${id}`? <GoogleMap brew ={brew}/>: ""}
            </section>
        </div>
    )
}


export default withRouter(BreweryDetail);