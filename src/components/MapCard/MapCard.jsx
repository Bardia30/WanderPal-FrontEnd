import mapLogo from '../../assets/map.png';
import mapLogoDark from '../../assets/map-dark.png';
import likeLogoDark from '../../assets/like-dark.png';
import likeLogo from '../../assets/like.png';
import Button from '../Button/Button';
import '../../pages/TravelDetailsPage.scss';



const MapCard = ({ setIsAddScheduleClicked, placeDetailsObj, placeType, theme }) => {
  
  if (Object.keys(placeDetailsObj).length <1 ) {
    return (
      <section className={`travel__mid-right travel__mid-right--${theme} travel__mid-right--empty`}>
        <h3 className={`travel__restaurant-name travel__restaurant-name--${theme}`}>Select a place to get more details...</h3>

      </section>
      
    )
  } else if (placeType === "restaurants") {
    return (
      <div className={`travel__mid-right travel__mid-right--${theme}`}>
              <div className='travel__pic-div'>
              <img className="travel__rest-pic" src={placeDetailsObj.image} alt="restaurant" />
              </div>
              <section className='travel__texts-section'>
                <h3 className={`travel__restaurant-name travel__restaurant-name--${theme}`}>{placeDetailsObj.name}</h3>
                <p className={`travel__restaurant-details travel__restaurant-details--${theme}`}><span className='travel__restaurant-details--bold'>Category: </span>{placeDetailsObj.category}</p>
                <p className={`travel__restaurant-details travel__restaurant-details--${theme}`}><span className='travel__restaurant-details--bold'>Distance From Hotel: </span>{placeDetailsObj.distance}</p>
                <p className={`travel__restaurant-details travel__restaurant-details--${theme}`}><span className='travel__restaurant-details--bold'>Status: </span>{placeDetailsObj.isClosed ? "CLOSED": "OPEN"}</p>
                <p className={`travel__restaurant-details travel__restaurant-details--${theme}`}><span className='travel__restaurant-details--bold'>Price Range: </span>{placeDetailsObj.price}</p>
                <a className={`travel__restaurant-website-link travel__restaurant-website-link--${theme}`} href={placeDetailsObj.website}>Visit Website</a>
                <div className='travel__restaurant-buttons'>
                  {/* <div>
                    <img className='travel__map-logo' src={theme === 'light' ? mapLogo : mapLogoDark} alt="map" />
                    <img className='travel__like-logo' src={theme === 'light' ? likeLogo : likeLogoDark} alt="like" />
                  </div> */}
                  <Button
                    text="Add to schedule"
                    buttonClass="travel__add-schedule-button"
                    onClick={setIsAddScheduleClicked}
                  />
                </div>
              </section>
            </div>
    )
  } else if (placeType === "attractions") {
    return (
    <div className={`travel__mid-right travel__mid-right--${theme}`}>
              <div className='travel__pic-div'>
              <img className="travel__rest-pic" src={placeDetailsObj.image} alt="restaurant" />
              </div>
              <section className='travel__texts-section'>
                <h3 className={`travel__restaurant-name travel__restaurant-name--${theme}`}>{placeDetailsObj.name}</h3>
                <p className={`travel__restaurant-details travel__restaurant-details--${theme}`}><span className='travel__restaurant-details--bold'>Category: </span>{placeDetailsObj.category}</p>
                <p className={`travel__restaurant-details travel__restaurant-details--${theme}`}><span className='travel__restaurant-details--bold'>Distance From Hotel: </span>{placeDetailsObj.distance}</p>
                <p className={`travel__restaurant-details travel__restaurant-details--${theme}`}><span className='travel__restaurant-details--bold'>Status: </span>{placeDetailsObj.isClosed ? "CLOSED": "OPEN"}</p>
                <p className={`travel__restaurant-details travel__restaurant-details--${theme}`}><span className='travel__restaurant-details--bold'>Rating: </span>{placeDetailsObj.rating}</p>
                <a className={`travel__restaurant-website-link travel__restaurant-website-link--${theme}`} href={placeDetailsObj.website}>Visit Website</a>
                <div className='travel__restaurant-buttons'>
                  {/* <div>
                    <img className='travel__map-logo' src={theme === 'light' ? mapLogo : mapLogoDark} alt="map" />
                    <img className='travel__like-logo' src={theme === 'light' ? likeLogo : likeLogoDark} alt="like" />
                  </div> */}
                  <Button
                    text="Add to schedule"
                    buttonClass="travel__add-schedule-button"
                    onClick={setIsAddScheduleClicked}
                  />
                </div>
              </section>
            </div>
    )
  } 
  
  
}

export default MapCard