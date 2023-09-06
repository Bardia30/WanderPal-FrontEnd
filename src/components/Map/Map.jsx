import { useState, useEffect } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { GoogleMap, Marker } from "@react-google-maps/api";
import './Map.scss';
import '../MapCard/MapCard.scss';
import restoSvg from '../../assets/restaurant.svg';
import restoSvgDark from '../../assets/restaurant-dark.svg';
import hotelLogo from '../../assets/hotel.svg';
import attractionSvg from '../../assets/attraction.svg';
import attractionSvgDark from '../../assets/attraction-dark.svg';
import darkMapStyles from './darkMapStyle';
import lightMapStyles from './lightMapStyle';



const Map = ({ placeDetailsObj, calculateDistance, setPlaceDetailsObj, placeType, places, setCoordinates, setBounds, coordinates, userHotelLocation, theme }) => {

    const MapContainerStyle = {
        width: '100%',
        height: '100%'
    };

    const [restoLogo, setRestoLogo] = useState(restoSvg);
    const [attractionLogo, setAttractionLogo] = useState(attractionSvg);



    useEffect(()=> {
        if(theme === 'dark') {
            setRestoLogo(restoSvgDark);
            setAttractionLogo(attractionSvgDark);    
        } else {
            setRestoLogo(restoSvg);
            setAttractionLogo(attractionSvg);
        }
    }, [theme])

    const defaultCenter = { lat: 36.11702, lng: -115.17471 };

    const [mapInstance, setMapInstance] = useState(null);

    

    const trySetBounds = (retryCount = 0) => {
        if (!mapInstance) return;

        const bounds = mapInstance.getBounds();
        if (bounds) {
            const ne = bounds.getNorthEast();
            const sw = bounds.getSouthWest();
            setBounds({
                ne: { lat: ne.lat(), lng: ne.lng() },
                sw: { lat: sw.lat(), lng: sw.lng() }
            });
            console.log('Bounds Set');
        } else if (retryCount < 5) {
            setTimeout(() => {
                trySetBounds(retryCount + 1);
            }, 200);
        }
    };



    useEffect(() => {
        trySetBounds();
    }, [mapInstance, placeType]);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyCUWDlkP61gtUg4lnwS85K5gkpaj3ys7Ak',
        libraries: ['geometry', 'drawing'],
      });


    return (
        <div className='map'>
            {isLoaded && 
                <GoogleMap
                    mapContainerStyle={MapContainerStyle}
                    zoom={14}
                    center={coordinates || defaultCenter}
                    options={{ styles: theme === "dark" ? darkMapStyles : lightMapStyles }}
                    onLoad={(map) => {
                        console.log('Map Loaded');
                        setMapInstance(map);
                        if (map && map.getBounds()) {
                            const bounds = map.getBounds();
                            const ne = bounds.getNorthEast();
                            const sw = bounds.getSouthWest();

                            setBounds({
                                ne: { lat: ne.lat(), lng: ne.lng() },
                                sw: { lat: sw.lat(), lng: sw.lng() }
                            });
                        }
                    }}
                    onDragEnd={() => {
                        if (mapInstance) {
                            const bounds = mapInstance.getBounds();
                            const ne = bounds.getNorthEast();
                            const sw = bounds.getSouthWest();

                            setBounds({
                                ne: { lat: ne.lat(), lng: ne.lng() },
                                sw: { lat: sw.lat(), lng: sw.lng() }
                            });
                            setCoordinates({
                                lat: mapInstance.getCenter().lat(),
                                lng: mapInstance.getCenter().lng()
                            });
                        }
                    }}
                >


                    {places?.map((place) => (
                        <>
                            <Marker
                                key={place.location_id}
                                position={{ lat: parseFloat(place.latitude), lng: parseFloat(place.longitude) }}
                                icon={placeType === "restaurants" ? restoLogo : attractionLogo}
                                onClick={() => {
                                    if (placeType === "restaurants") {
                                        setPlaceDetailsObj({
                                        name: place.name,
                                        category: (place.cuisine && place.cuisine.length > 0) ? place.cuisine[0].name : null,
                                        distance: calculateDistance(place.latitude, place.longitude),
                                        price: place.price_level,
                                        website: place.web_url,
                                        isClosed: place.is_closed,
                                        image: place.photo.images.original.url
                                    })
                                    } else {
                                        setPlaceDetailsObj({
                                        name: place.name,
                                        category: place.subcategory[0].name,
                                        distance: calculateDistance(place.latitude, place.longitude),
                                        rating: place.rating,
                                        website: place.web_url,
                                        isClosed: place.is_closed,
                                        image: place.photo.images.original.url
                                    })
                                    }
                                    
                                    console.log(placeDetailsObj);
                                }

                                }



                            // Add onClick or any other event listeners to the Marker 
                            />
                            <Marker
                                key="hotel"
                                position={{ lat: userHotelLocation.lat, lng: userHotelLocation.lng }}
                                icon={hotelLogo}
                            />
                        </>
                    ))}
                    {

                    }

                </GoogleMap>
            }
        </div>

    )
}




export default Map;