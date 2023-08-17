import React from 'react';
import closeLogo from '../../assets/delete.png';
import './DeleteTravelModal.scss';
import Button from '../Button/Button';

const DeleteTravelModal = ({ setIsDeleteClicked }) => {
  const closeDeleteModalHandler = () => {
    setIsDeleteClicked(false);
  }
  
    return (
    <div onClick={closeDeleteModalHandler} className='delete__wrapper'>
        <section onClick={e => e.stopPropagation()} className='delete__modal'>
            <img onClick={closeDeleteModalHandler} className='delete__close-logo' src={closeLogo} alt="delete-button" />
            <h1 className='delete__title'>Are you sure you want to delete your trip?</h1>
            <div className='delete__buttons'>
            <Button 
                    buttonClass="delete__cancel-cta"
                    text="cancel"
                />
                <Button 
                    buttonClass="delete__delete-cta"
                    text="delete"
                />
            </div>
        </section>
    </div>
  )
}

export default DeleteTravelModal