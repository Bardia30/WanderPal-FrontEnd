import React from 'react';
import './AddNewTravel.scss';
import addNewLogo from '../../assets/add-new-travel.png'

const AddNewTravel = ({ setAddNewModalClicked }) => {
  const handleAddNewButton = () => {
    setAddNewModalClicked(true);
  }
  return (
    <section onClick={handleAddNewButton} className='add-new-button'>
        <img className='add-new-button__logo' src={addNewLogo} alt="add-new" />
        <h3 className='add-new-button__title'>Add New Travel</h3>
    </section>
  )
}

export default AddNewTravel