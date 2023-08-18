import React, {useContext} from 'react';
import './TravelCard.scss';
import Button from '../Button/Button';
import deleteLogo from '../../assets/delete-logo.png';
import vegasPic from '../../assets/vegas.png';
import ThemeContext from '../context/theme-context';
import deleteLogoDark from '../../assets/delete-logo-dark.png';


const TravelCard = ({ id, handleTravelId, setIsDeleteClicked }) => {
  

  const { theme } = useContext(ThemeContext);
 

  const HandleOpenDeleteModal = () => {
    setIsDeleteClicked(true);
    handleTravelId(id);
  }
  
  return (
    <div className={`card card--${theme}`}>
        <img className='card__img' src={vegasPic} alt="vegas-landscape" />
        <section className='card__bottom-section'>
            <h3 className={`card__title card__title--${theme}`}>Las Vegas</h3>
            <p className={`card__date card__date--${theme}`}>Sep 16th - Sep 20th</p>
            <div className='card__buttons-section'>
                <img onClick={HandleOpenDeleteModal} className='card__delete-logo' src={theme === "light" ? deleteLogo : deleteLogoDark} alt="delete" />
                <Button text="view details" buttonClass={`cta cta--${theme} card__cta`}/>
            </div>
        </section>
    </div>
  )
}

export default TravelCard