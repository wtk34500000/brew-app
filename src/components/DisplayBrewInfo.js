import React from 'react';
import GoogleMapReact from 'google-map-react';

const DisplayBrewInfo = ({brew}) => {
    // console.log(brew)
    // const AnyReactComponent = ({ text }) => (
    //     <div style={{
    //       color: 'white', 
    //       background: 'grey',
    //       padding: '15px 10px',
    //       display: 'inline-flex',
    //       textAlign: 'center',
    //       alignItems: 'center',
    //       justifyContent: 'center',
    //       borderRadius: '100%',
    //       transform: 'translate(-50%, -50%)'
    //     }}>
    //       {text}
    //     </div>
    //   );
    
    return (
        <div>
            <section>
                <h3>Name: {brew.name}</h3>
                <p>Brewery_type: {brew.brewery_type}</p>
                <p>Adress: {brew.street} </p>
                <p>{brew.city}, {brew.state} {brew.postal_code}</p>
            </section>
            {/* <section style={{border:"1px solid black", width: '100%', height: '400px'}}>
                <GoogleMapReact
                    defaultCenter={{lat: 59.95, lng:30.33}}
                    defaultZoom={11}
                >
                <AnyReactComponent 
                    lat={brew.latitude} 
                    lng={brew.longitude} 
                    text={brew.name} 
                />
                </GoogleMapReact>
            </section>  */}
        </div>      
    )
}

export default DisplayBrewInfo;