import React from 'react';
import GoogleMapReact from 'google-map-react';

const DisplayBrewInfo = ({brew, center, zoom}) => {
    const AnyReactComponent = ({ text }) => (
        <div style={{
          color: 'white', 
          background: 'grey',
          padding: '15px 10px',
          display: 'inline-flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '100%',
          transform: 'translate(-50%, -50%)'
        }}>
          {text}
        </div>
      );
    
    return (
        <div>
            <section>
                <h3>Name: {brew.name}</h3>
                <p>Brewery_type: {brew.brewery_type}</p>
                <p>Adress: {brew.street} </p>
                <p>{brew.city}, {brew.state} {brew.postal_code}</p>
            </section>
            <section style={{border:"1px solid black", width: '100%', height: '400px'}}>
                <GoogleMapReact
                    // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                    defaultCenter={center}
                    defaultZoom={zoom}
                >
                <AnyReactComponent 
                    lat={59.955413} 
                    lng={30.337844} 
                    text={brew.name} 
                />
                </GoogleMapReact>
            </section> 
        </div>      
    )
}

export default DisplayBrewInfo;