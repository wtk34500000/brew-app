import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMap=({brew})=>{

    const API_key=process.env.REACT_APP_GOOGLE_API_KEY
    const {latitude, longitude, name} =brew

    const Marker = ({ text }) => (
        <div className="text-white bg-danger p-2 d-inline-flex text-center text-justify rounded-circle" 
        // style={{
        //   color: 'white', 
        //   background: 'red',
        //   padding: '15px 15px',
        //   display: 'inline-flex',
        //   textAlign: 'center',
        //   alignItems: 'center',
        //   justifyContent: 'center',
        //   borderRadius: '100%',
        //   transform: 'translate(-50%, -50%)'
        // }}
        >
          {text}
        </div>
      );

      return (
          <div>
            <section className="border border-dark" style={{width: '100%', height: '58vh'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: API_key}}
                    defaultCenter={{lat: 59.95, lng:30.33}}
                    center={{lat: latitude? parseInt(latitude): 59.95, lng: longitude? parseInt(longitude):30.33}}
                    defaultZoom={8}
                >
                <Marker
                    lat={latitude? latitude: 59.95} 
                    lng={longitude? longitude: 30.33} 
                    text={latitude && longitude? name: "N/A"} 
                />
                </GoogleMapReact>
            </section> 
          </div>
      )
}

export default GoogleMap;