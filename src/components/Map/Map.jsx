import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import MapCard from '../MapCard/MapCard';
import './Map.scss';
import dummyImg from '../../assets/vegas.png';

const Map = ({setCoordinates, setBounds, coordinates, userHotelLocation}) => {
    


    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCUWDlkP61gtUg4lnwS85K5gkpaj3ys7Ak" }}
                defaultCenter={userHotelLocation}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
                } }

            >
                {/* <Marker 
                    lat={location.lat}
                    lng={location.lng}
                    text="marker"
                /> */}
                {/* <MapCard
                    lat={location.lat}
                    lng={location.lng}
                    name="Caesar's Palace"
                    img={dummyImg}
                    isOpen={true}

                /> */}
            </GoogleMapReact>
        </div>


    )
}




export default Map;