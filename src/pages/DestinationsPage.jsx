import React, { useState } from 'react';
import './DestinationsPage.scss';
import TravelCard from '../components/TravelCard/TravelCard';
import AddNewTravel from '../components/AddNewTravel/AddNewTravel';
import AddNewTravelModal from '../components/AddNewTravelModal/AddNewTravelModal';

const DestinationsPage = () => {
  const [addNewModalClicked, setAddNewModalClicked] = useState(false);
 
  return (
    <React.Fragment>
    <section className="destinations">
      <h1 className='destinations__title'>Bardia's Travel Destinations</h1>
      <div className='destinations__cards'>
        <TravelCard />
        <TravelCard />
        <TravelCard />
        <TravelCard />
        
      </div>
      
        <AddNewTravel setAddNewModalClicked={setAddNewModalClicked}/>
      
      
    </section>
    {
      addNewModalClicked && <AddNewTravelModal setAddNewModalClicked={setAddNewModalClicked}/>
    }
      
    </React.Fragment>
    
    
  )
}

export default DestinationsPage