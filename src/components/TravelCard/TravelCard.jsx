import React from 'react';
import './TravelCard.scss';
import Button from '../Button/Button';
import deleteLogo from '../../assets/delete-logo.png';
import vegasPic from '../../assets/vegas.png';



const TravelCard = ({ id, handleTravelId, setIsDeleteClicked }) => {
  
 

  const HandleOpenDeleteModal = () => {
    setIsDeleteClicked(true);
    handleTravelId(id);
  }
  
  return (
    <div className='card'>
        <img className='card__img' src={vegasPic} alt="vegas-landscape" />
        <section className='card__bottom-section'>
            <h3 className='card__title'>Las Vegas</h3>
            <p className='card__date'>Sep 16th - Sep 20th</p>
            <div className='card__buttons-section'>
                <img onClick={HandleOpenDeleteModal} className='card__delete-logo' src={deleteLogo} alt="delete" />
                <Button text="view details" buttonClass="card__cta"/>
            </div>
        </section>
    </div>
  )
}

export default TravelCard