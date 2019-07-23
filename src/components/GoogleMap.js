import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMap=()=>{

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
            <section style={{border:"1px solid black", width: '100%', height: '400px'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: ""}}
                    defaultCenter={{lat: 59.95, lng:30.33}}
                    defaultZoom={11}
                >
                <AnyReactComponent 
                    lat={brew.latitude} 
                    lng={brew.longitude} 
                    text={brew.name} 
                />
                </GoogleMapReact>
            </section> 
          </div>
      )
}

export default GoogleMap;