import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './DestinationsPage.scss';
import TravelCard from '../components/TravelCard/TravelCard';
import AddNewTravel from '../components/AddNewTravel/AddNewTravel';
import AddNewTravelModal from '../components/AddNewTravelModal/AddNewTravelModal';
import DeleteTravelModal from '../components/DeleteTravelModal/DeleteTravelModal';
import ThemeContext from '../components/context/theme-context';


const DestinationsPage = ({ setUserPic }) => {
  const [addNewModalClicked, setAddNewModalClicked] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [travelId, setTravelId] = useState("");

  const { theme } = useContext(ThemeContext);

  const { uid } = useParams();
  

  const [userDestinations, setUserDestinations] = useState([]);

  const [userName, setUserName] = useState("");

  //test to see how we can delete http requests. I am using dummy id for now. 
  // useEffect(()=> {
  //   console.log(travelId);
  // }, [travelId]);

  useEffect(()=> {
    axios.get(`http://localhost:8080/user/${uid}`)
      .then(res => {
        setUserName(res.data.name);
        setUserPic(`http://localhost:8080/${res.data.image}`);
      })
      .catch(err => console.log(err.message))
  }, [])

  useEffect(()=> {
    axios.get(`http://localhost:8080/destinations/${uid}`)
      .then(res => {
        setUserDestinations(res.data.destinations);
      })
      .catch(err => console.log(err.message));
  },[userDestinations])

  return (
    <React.Fragment>
    <section className="destinations">
      <h1 className={`destinations__title destinations__title--${theme}`}>{userName}'s Travel Destinations</h1>
      <div className='destinations__cards'>
      {userDestinations.length === 0 ? <h3>You Have No Travel Plans On Your Dashboard!</h3> : 
        userDestinations.map(destination => (
          <TravelCard key={destination._id} destinationObj = {destination} handleTravelId={setTravelId} setIsDeleteClicked={setIsDeleteClicked}/>
        ))
      }
        {/* <TravelCard id="dummyId" handleTravelId={setTravelId} setIsDeleteClicked={setIsDeleteClicked}/>
        <TravelCard id="dummyId2" handleTravelId={setTravelId} setIsDeleteClicked={setIsDeleteClicked}/>
        <TravelCard id="dummyId3" handleTravelId={setTravelId} setIsDeleteClicked={setIsDeleteClicked}/>
        <TravelCard id="dummyId4" handleTravelId={setTravelId} setIsDeleteClicked={setIsDeleteClicked}/> */}
        
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