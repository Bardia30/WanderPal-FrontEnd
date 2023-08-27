import { useContext, useState, useEffect } from 'react';
import Button from '../components/Button/Button';
import DropDown from '../components/DropDown/DropDown';
import backButton from '../assets/back-logo.png';
import backButtonDark from '../assets/back-logo-dark.png';
import './TravelDetailsPage.scss';
import ThemeContext from '../components/context/theme-context';
import AddNewScheduleModal from '../components/AddNewScheduleModal/AddNewScheduleModal';
import EditTravelModal from '../components/EditTravelModal/EditTravelModal';
import Map from '../components/Map/Map';
import {getRestaurantsData, getAttractionsData} from '../components/api/travelAdvisor';
import MapCard from '../components/MapCard/MapCard';


const TravelDetailsPage = () => {
  const { theme } = useContext(ThemeContext);

  const [isAddScheduleClicked, setIsAddScheduleClicked] = useState(false)

  const [isEditTravelClicked, setIsEditTravelClicked] = useState(false)

  const [userHotelLocation, setUserHotelLocation] = useState({})

  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);


  const [placeType, setPlaceType] = useState("restaurants");


  const [placeDetailsObj, setPlaceDetailsObj] = useState({});


  const calculateDistance = (lat, lng) => {
    //haversine formula
    const hotelLat = (userHotelLocation.lat)* Math.PI/180;
    const hotelLng = (userHotelLocation.lng) * Math.PI/180;

    const destinationLat = lat * Math.PI/180;
    const destinationLng = lng * Math.PI/180;

    const deltaLat = hotelLat - destinationLat;
    const deltaLng = hotelLng - destinationLng;

    const a = (Math.sin(deltaLat/2) **2) + Math.cos(hotelLat) * Math.cos(destinationLat) * (Math.sin(deltaLng/2) **2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    let d = (6371*(10**3))*c;


    if (d >= 1000) {
      d = Math.round(d/1000);
      return `${d} km`
    } else if (d < 1000) {
      return `${Math.round(d)} m`
    }

  }



  //write function to set user's hotel as location
  useEffect(() => {
    setCoordinates({ lat: 36.11702, lng: -115.17471 });
    setUserHotelLocation({ lat: 36.11702, lng: -115.17471 });
  }, [])
  

  useEffect(() => {
    if (bounds) {
      if (placeType === 'restaurants') {
        getRestaurantsData(bounds.sw, bounds.ne)
        .then((data) => {
          console.log(data);
          setPlaces(data);
          
        })
        .catch(err => console.log(err.message));
    } else {
      getAttractionsData(bounds.sw, bounds.ne)
        .then((data) => {
          console.log(data);
          setPlaces(data);
          
        })
        .catch(err => console.log(err.message));
    }
      }
      
  }, [bounds, placeType]);


  //for test, gotta be received from backend
  const travelObj = {
    destination: "Las Vegas",
    hotel: "Caesar's Palace",
    arrival: "Saturday, September 16th",
    departure: "Wednesday, September 20th",
    location: {
      lat: 36.11702,
      lng: -115.17471
    }
  }




  return (
    <>
      <div className="travel">
        <section className='travel__upper-section'>
          <section className='travel__upper-left'>
            <img className='travel__back-logo' src={theme === "light" ? backButton : backButtonDark} alt="back-button" />
            <h1 className={`travel__title travel__title--${theme}`}>Las Vegas Trip</h1>
          </section>
          <Button
            text="travel schdeule"
            buttonClass="travel__schedule-cta"
          />
        </section>
        
        <div className='travel__mid-section'>
        
          <div className='travel__mid-left'>
            <section className={`travel__details-card travel__details-card--${theme}`}>
              <h1 className={`travel__details-title travel__details-title--${theme}`}><span className='travel__details-title--bold'>hotel: </span>Caesar's Palace</h1>
              <p className={`travel__dates travel__dates--${theme}`}><span className='travel__dates--bold'>Arrival: </span>Saturday, September 16th</p>
              <p className={`travel__dates travel__dates--${theme}`}><span className='travel__dates--bold'>Departure: </span>Wednesday, September 20th</p>
              <Button
                text="edit travel"
                buttonClass="travel__edit-cta"
                onClick={setIsEditTravelClicked}
              />
            </section>
            <DropDown setPlaceDetailsObj={setPlaceDetailsObj} setPlaceType={setPlaceType}/>
          </div>
          <MapCard setIsAddScheduleClicked={setIsAddScheduleClicked} placeDetailsObj={placeDetailsObj} placeType={placeType} theme={theme}/>
      
        </div> 
        <Map theme={theme} placeDetailsObj={placeDetailsObj} setPlaceDetailsObj={setPlaceDetailsObj} calculateDistance={calculateDistance} placeType={placeType} places={places} userHotelLocation={userHotelLocation} coordinates={coordinates} setBounds={setBounds} setCoordinates={setCoordinates} />
      </div>

      {isAddScheduleClicked &&
        <AddNewScheduleModal setIsAddScheduleClicked={setIsAddScheduleClicked} />
      }

      {isEditTravelClicked &&
        <EditTravelModal travel={travelObj} setIsEditTravelClicked={setIsEditTravelClicked} />
      }



    </>
  )
}

export default TravelDetailsPage