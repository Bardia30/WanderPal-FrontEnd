import React, {useContext} from 'react';
import './AddNewTravel.scss';
import addNewLogo from '../../assets/add-new-travel.png';
import ThemeContext from '../context/theme-context';

const AddNewTravel = ({ setAddNewModalClicked }) => {
  
  const {theme} = useContext(ThemeContext);
  
  const handleAddNewButton = () => {
    setAddNewModalClicked(true);
  }
  return (
    <section onClick={handleAddNewButton} className={`add-new-button add-new-button--${theme}`}>
        <img className='add-new-button__logo' src={addNewLogo} alt="add-new" />
        <h3 className='add-new-button__title'>Add New Travel</h3>
    </section>
  )
}

export default AddNewTravel