import React from 'react';
import './DestinationsPage.scss';
import TravelCard from '../components/TravelCard/TravelCard';

const DestinationsPage = () => {
  return (
    <section className="destinations">
      <h1 className='destinations__title'>Bardia's Travel Destinations</h1>
      <TravelCard />
    </section>
    
    
  )
}

export default DestinationsPage