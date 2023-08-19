import React from 'react'
import Button from '../components/Button/Button';
import DropDown from '../components/DropDown/DropDown';
import backButton from '../assets/back-logo.png';
import mapLogo from '../assets/map.png';
import likeLogo from '../assets/like.png';
import restoPic from '../assets/temp-rest-pic.png'


const TravelDetailsPage = () => {
  return (
    <div className="travel">
      <section className='travel__upper-section'>
        <section className='travel__upper-left'>
          <img className='travel__back-logo' src={backButton} alt="back-button" />
          <h1 className='travel__title'>Las Vegas Trip</h1>
        </section>
        <Button 
          text="travel schdeule"
          buttonClass="travel__schedule-cta"
        />
      </section>
      <div className='travel__mid-section'>
        <div className='travel__mid-left'>
          <section className='travel__details-card'>
            <h1 className='travel__details-title'><span className='travel__details-title--bold'>hotel: </span>Caesar's Palace</h1>
            <p className='travel__dates'><span className='travel__dates--bold'>Arrival: </span>Saturday, September 16th</p>
            <p className='travel__dates'><span className='travel__dates--bold'>Departure: </span>Wednesday, September 20th</p>
            <Button
              text="edit travel"
              buttonClass="travel__edit-cta"
             />
          </section>
          <DropDown />
        </div>
        <div className='travel__mid-right'> 
          <img className="travel__rest-pic" src={restoPic} alt="restaurant" />
          <section className='travel__texts-section'>
            <h3 className='travel__restaurant-name'>Restaurant Name</h3>
            <p className='travel__restaurant-details'><span className='travel__restaurant-details--bold'>Category: </span>French Restaurant</p>
            <p className='travel__restaurant-details'><span className='travel__restaurant-details--bold'>Distance From Hotel: </span>12 km</p>
            <p className='travel__restaurant-details'><span className='travel__restaurant-details--bold'>Rating: </span>4/5</p>
            <p className='travel__restaurant-details'><span className='travel__restaurant-details--bold'>Price Range: </span>$$</p>
            <a className='travel__restaurant-website-link' href="www.google.com">Visit Website</a>
            <div className='travel__restaurant-buttons'>
              <div>
                <img className='travel__map-logo' src={mapLogo} alt="map" />
                <img className='travel__like-logo' src={likeLogo} alt="like" />
              </div>
              <Button
                text="Add to schedule"
                buttonClass="travel__add-schedule-button"
              />
            </div>
          </section>
        </div>
        <section>

        </section>
      </div>
    </div>
  )
}

export default TravelDetailsPage