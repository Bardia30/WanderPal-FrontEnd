import React, { useState, useContext } from 'react';

import './DestinationsPage.scss';
import TravelCard from '../components/TravelCard/TravelCard';
import AddNewTravel from '../components/AddNewTravel/AddNewTravel';
import AddNewTravelModal from '../components/AddNewTravelModal/AddNewTravelModal';
import DeleteTravelModal from '../components/DeleteTravelModal/DeleteTravelModal';
import ThemeContext from '../components/context/theme-context';


const DestinationsPage = () => {
  const [addNewModalClicked, setAddNewModalClicked] = useState(false);
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  const [travelId, setTravelId] = useState("");

  const { theme } = useContext(ThemeContext);

  //test to see how we can delete http requests. I am using dummy id for now. 
  // useEffect(()=> {
  //   console.log(travelId);
  // }, [travelId]);

  

  return (
    <React.Fragment>
    <section className="destinations">
      <h1 className={`destinations__title destinations__title--${theme}`}>Bardia's Travel Destinations</h1>
      <div className='destinations__cards'>
        <TravelCard id="dummyId" handleTravelId={setTravelId} setIsDeleteClicked={setIsDeleteClicked}/>
        <TravelCard id="dummyId2" handleTravelId={setTravelId} setIsDeleteClicked={setIsDeleteClicked}/>
        <TravelCard id="dummyId3" handleTravelId={setTravelId} setIsDeleteClicked={setIsDeleteClicked}/>
        <TravelCard id="dummyId4" handleTravelId={setTravelId} setIsDeleteClicked={setIsDeleteClicked}/>
        
      </div>
      
        <AddNewTravel setAddNewModalClicked={setAddNewModalClicked}/>
      
      
    </section>
    {
      addNewModalClicked && <AddNewTravelModal setAddNewModalClicked={setAddNewModalClicked}/>
    }
    {
      isDeleteClicked && <DeleteTravelModal travelId={travelId} setIsDeleteClicked={setIsDeleteClicked}/>
    }
      
    </React.Fragment>
    
    
  )
}

export default DestinationsPage