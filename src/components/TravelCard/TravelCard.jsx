import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './TravelCard.scss';
import Button from '../Button/Button';
import deleteLogo from '../../assets/delete-logo.png';
import ThemeContext from '../context/theme-context';
import deleteLogoDark from '../../assets/delete-logo-dark.png';
import { timestampToDateStr } from '../util/dateConverter';


const TravelCard = ({ uid, handleTravelId, setIsDeleteClicked, destinationObj }) => {
  
  const {id, destination, arrival_date, departure_date, image } = destinationObj;

  const { theme } = useContext(ThemeContext);
 
  const navigate = useNavigate();

  const arrivalDate = timestampToDateStr(arrival_date);
  const departureDate = timestampToDateStr(departure_date);


  const HandleOpenDeleteModal = () => {
    setIsDeleteClicked(true);
    handleTravelId(id);
  }
  

  const handleDetailsClick = () => {
    navigate(`/${uid}/travelDetails/${id}`);
  }


  return (
    <div className={`card card--${theme}`}>
        <div className='card__img-box'>
          <img className='card__img' src={image} alt={`${destination}-landscape`} />
        </div>
        <section className='card__bottom-section'>
            <h3 className={`card__title card__title--${theme}`}>{destination}</h3>
            <p className={`card__date card__date--${theme}`}>{`${arrivalDate} - ${departureDate}`}</p>
            <div className='card__buttons-section'>
                <img onClick={HandleOpenDeleteModal} className='card__delete-logo' src={theme === "light" ? deleteLogo : deleteLogoDark} alt="delete" />
                <Button onClick={handleDetailsClick} text="view details" buttonClass={`cta cta--${theme} card__cta`}/>
            </div>
        </section>
    </div>
  )
}

export default TravelCard