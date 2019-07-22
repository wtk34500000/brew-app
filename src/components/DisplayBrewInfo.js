import React from 'react';
import GoogleMapReact from 'google-map-react';

const DisplayBrewInfo = ({brew}) => {
    console.log("inside here!")
    return (
        <div>
            <section>
                <h3>Name: {brew.name}</h3>
                <p>Brewery_type: {brew.brewery_type}</p>
                <p>Adress: {brew.street} </p>
                <p>{brew.city}, {brew.state} {brew.postal_code}</p>
            </section>
            {/* <section> */}
                {/* <GoogleMapReact */}
                    {/* bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }} */}
                    {/* defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="Location"
                />
                </GoogleMapReact>
            </section> */}
        </div>      
    )
}

export default DisplayBrewInfo;