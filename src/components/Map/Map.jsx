import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import './Map.scss';

const Map = ({location}) => {
    


    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCUWDlkP61gtUg4lnwS85K5gkpaj3ys7Ak" }}
                defaultCenter={location}
                center={location}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}

            >
                <Marker 
                    lat={location.lat}
                    lng={location.lng}
                    text="marker"
                />
            </GoogleMapReact>
        </div>


    )
}




export default Map;