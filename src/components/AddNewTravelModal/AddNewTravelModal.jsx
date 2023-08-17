import React from 'react';
import './AddNewTravelModal.scss';
import '../InputField/InputField';
import InputField from '../InputField/InputField';
import '../InputField/InputField.scss';
import { DateCalendar } from '@mui/x-date-pickers';
import Button from '../Button/Button';


const AddNewTravelModal = ({setAddNewModalClicked}) => {
  const handleCloseModal = () => {
    setAddNewModalClicked(false);
  }
  
  
    return (
    <div onClick={handleCloseModal}  className='add-dest'>
        <section onClick={e => e.stopPropagation()} className='add-new'>
            <section className='add-new__top-section'>
            <section className='add-new__left-section'>
                <h1 className='add-new__title'>Add Your New Adventure!</h1>
                    <form className='add-new__form' action="submit">
                        <InputField 
                            type="text"
                            inputClass="add-new__input"
                            placeholder="Destination..."
                        />    
                        <InputField 
                            type="text"
                            inputClass="add-new__input"
                            placeholder="Hotel..."
                        />   
                        <InputField 
                            type="text"
                            inputClass="add-new__input"
                            placeholder="Arrival..."
                        />
                        <InputField 
                            type="text"
                            inputClass="add-new__input"
                            placeholder="Departure..."
                        />               
                    </form>
                </section>
                <DateCalendar width="100%" className='add-new__datepicker'/>
            </section>

            <div className='add-new__buttons'>
                <Button 
                    buttonClass="add-new__cancel-cta"
                    text="cancel"
                />
                <Button 
                    buttonClass="add-new__add-cta"
                    text="add new travel"
                />
            </div>
        </section>
    </div>
  )
}

export default AddNewTravelModal