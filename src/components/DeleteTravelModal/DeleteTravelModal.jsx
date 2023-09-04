import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import closeLogo from '../../assets/delete.png';
import './DeleteTravelModal.scss';
import Button from '../Button/Button';
import closeDark from '../../assets/delete-dark.png';
import ThemeContext from '../context/theme-context';
import axios from 'axios';


const DeleteTravelModal = ({ setIsDeleteClicked, travelId }) => {
  const {theme} = useContext(ThemeContext);
  
  const {uid} = useParams();


  const closeDeleteModalHandler = () => {
    setIsDeleteClicked(false);
  }

  const handleDeleteButton = () => {
    //cant test this until I have schedules
    //does not work right now. 
    axios.delete(`http://localhost:8080/destinations/${uid}/${travelId}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
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
                    onClick={closeDeleteModalHandler}
                />
                <Button 
                    buttonClass="delete__delete-cta"
                    text="delete"
                    onClick={handleDeleteButton}
                />
            </div>
        </section>
    </div>
  )
}

export default DeleteTravelModal