import React, {useContext} from 'react';
import closeLogo from '../../assets/delete.png';
import './DeleteTravelModal.scss';
import Button from '../Button/Button';
import closeDark from '../../assets/delete-dark.png';
import ThemeContext from '../context/theme-context';


const DeleteTravelModal = ({ setIsDeleteClicked }) => {
  const {theme} = useContext(ThemeContext);
  
  
  const closeDeleteModalHandler = () => {
    setIsDeleteClicked(false);
  }
  
    return (
    <div onClick={closeDeleteModalHandler} className='delete__wrapper'>
        <section onClick={e => e.stopPropagation()} className={`delete__modal delete__modal--${theme}`}>
            <img onClick={closeDeleteModalHandler} className='delete__close-logo' src={theme === "light" ? closeLogo : closeDark} alt="delete-button" />
            <h1 className={`delete__title delete__title--${theme}`}>Are you sure you want to delete your trip?</h1>
            <div className='delete__buttons'>
            <Button 
                    buttonClass={`delete__cancel-cta delete__cancel-cta--${theme}`}
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