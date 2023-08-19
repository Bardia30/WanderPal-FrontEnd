import {useContext, useState} from 'react'
import Button from '../components/Button/Button';
import DropDown from '../components/DropDown/DropDown';
import backButton from '../assets/back-logo.png';
import backButtonDark from '../assets/back-logo-dark.png';
import mapLogo from '../assets/map.png';
import mapLogoDark from '../assets/map-dark.png';
import likeLogoDark from '../assets/like-dark.png';
import likeLogo from '../assets/like.png';
import restoPic from '../assets/temp-rest-pic.png';
import './TravelDetailsPage.scss';
import ThemeContext from '../components/context/theme-context';
import AddNewScheduleModal from '../components/AddNewScheduleModal/AddNewScheduleModal';



const TravelDetailsPage = () => {
  const {theme} = useContext(ThemeContext);
  
  const [isAddScheduleClicked, setIsAddScheduleClicked] = useState(false)
  
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
             />
          </section>
          <DropDown />
        </div>
        <div className={`travel__mid-right travel__mid-right--${theme}`}> 
          <img className="travel__rest-pic" src={restoPic} alt="restaurant" />
          <section className='travel__texts-section'>
            <h3 className={`travel__restaurant-name travel__restaurant-name--${theme}`}>Restaurant Name</h3>
            <p className={`travel__restaurant-details travel__restaurant-details--${theme}`}><span className='travel__restaurant-details--bold'>Category: </span>French Restaurant</p>
            <p className={`travel__restaurant-details travel__restaurant-details--${theme}`}><span className='travel__restaurant-details--bold'>Distance From Hotel: </span>12 km</p>
            <p className={`travel__restaurant-details travel__restaurant-details--${theme}`}><span className='travel__restaurant-details--bold'>Rating: </span>4/5</p>
            <p className={`travel__restaurant-details travel__restaurant-details--${theme}`}><span className='travel__restaurant-details--bold'>Price Range: </span>$$</p>
            <a className={`travel__restaurant-website-link travel__restaurant-website-link--${theme}`} href="www.google.com">Visit Website</a>
            <div className='travel__restaurant-buttons'>
              <div>
                <img className='travel__map-logo' src={theme === 'light' ? mapLogo : mapLogoDark} alt="map" />
                <img className='travel__like-logo' src={theme === 'light' ? likeLogo : likeLogoDark} alt="like" />
              </div>
              <Button
                text="Add to schedule"
                buttonClass="travel__add-schedule-button"
                onClick={setIsAddScheduleClicked}
              />
            </div>
          </section>
        </div>
        <section className='map-section'>

        </section>
      </div>
    </div>

    {isAddScheduleClicked &&
      <AddNewScheduleModal setIsAddScheduleClicked={setIsAddScheduleClicked}/>
    }
    </>
  )
}

export default TravelDetailsPage