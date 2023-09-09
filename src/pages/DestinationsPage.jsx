import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './DestinationsPage.scss';
import TravelCard from '../components/TravelCard/TravelCard';
import AddNewTravel from '../components/AddNewTravel/AddNewTravel';
import AddNewTravelModal from '../components/AddNewTravelModal/AddNewTravelModal';
import DeleteTravelModal from '../components/DeleteTravelModal/DeleteTravelModal';
import ThemeContext from '../components/context/theme-context';


const DestinationsPage = ({ setUserPic, setUserId }) => {
  const [addNewModalClicked, setAddNewModalClicked] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [travelId, setTravelId] = useState("");

  const { theme } = useContext(ThemeContext);

  const { uid } = useParams();
  
  

  const [userDestinations, setUserDestinations] = useState([]);

  const [userName, setUserName] = useState("");


  useEffect(()=> {
    axios.get(`https://wanderpalapi.onrender.com/user/${uid}`)
      .then(res => {
        setUserName(res.data.name);
        setUserPic(`https://wanderpalapi.onrender.com/${res.data.image}`);
        setUserId(uid);
      })
      .catch(err => console.log(err.message))
  }, [])

  useEffect(()=> {
    const token = localStorage.getItem('token');

    if (token) {
      axios.get(`https://wanderpalapi.onrender.com/destinations/${uid}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => {
        setUserDestinations(res.data.destinations);
      })
      .catch(err => console.log(err.message));
    } else {
      console.error('Token is not available')
    }

    
  },[userDestinations])

  

  return (
    <React.Fragment>
    <section className="destinations">
      <h1 className={`destinations__title destinations__title--${theme}`}>{userName}'s Travel Destinations</h1>
      <div className='destinations__cards'>
      {userDestinations.length === 0 ? <h3>You Have No Travel Plans On Your Dashboard!</h3> : 
        userDestinations.map(destination => (
          <TravelCard uid={uid} key={destination._id} destinationObj = {destination} handleTravelId={setTravelId} setIsDeleteClicked={setIsDeleteClicked}/>
        ))
      }
      </div>
        <AddNewTravel setAddNewModalClicked={setAddNewModalClicked}/>
    </section>
    {
      addNewModalClicked && <AddNewTravelModal uid={uid} setAddNewModalClicked={setAddNewModalClicked}/>
    }
    {
      isDeleteClicked && <DeleteTravelModal travelId={travelId} setIsDeleteClicked={setIsDeleteClicked}/>
    }
      
    </React.Fragment>
    
    
  )
}

export default DestinationsPage