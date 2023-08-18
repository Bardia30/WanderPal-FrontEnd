import React, {useState, useContext} from 'react';
import './AddNewTravelModal.scss';
import '../InputField/InputField';
import InputField from '../InputField/InputField';
import '../InputField/InputField.scss';
import Button from '../Button/Button';
import ThemeContext from '../context/theme-context';

const AddNewTravelModal = ({ setAddNewModalClicked }) => {
    const {theme} = useContext(ThemeContext);
    
    
    const handleCloseModal = () => {
        setAddNewModalClicked(false);
    }

    const [isArrivalInputFocused, setIsArrivalInputFocused] = useState(false);
    const [isDepartureInputFocused, setIsDepartureInputFocused] = useState(false);

    const handleArrivalFocus = () => {
        setIsArrivalInputFocused(true);
    }

    const handleDepartureFocus = () => {
        setIsDepartureInputFocused(true);
    }

    const handleArrivalBlur = (e) => {
        if (!e.target.value) {
            setIsArrivalInputFocused(false);
        }
    }

    const handleDepartureBlur = (e) => {
        if (!e.target.value) {
            setIsDepartureInputFocused(false);
        }
    }

    return (
        <div onClick={handleCloseModal} className='add-dest'>
            <section onClick={e => e.stopPropagation()} className={`add-new add-new--${theme}`}>
                <section className='add-new__top-section'>
                    {/* <section className='add-new__left-section'> */}
                        <h1 className={`add-new__title add-new__title--${theme}`}>Add Your New Adventure!</h1>
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
                                type= {isArrivalInputFocused ? "date" : "text"}
                                onFocus = {handleArrivalFocus}
                                onBlur = {handleArrivalBlur}
                                inputClass="add-new__input"
                                placeholder={isArrivalInputFocused ? "" : "Arrival..."}
                            />
                            <InputField
                                type= {isDepartureInputFocused ? "date" : "text"}
                                onFocus = {handleDepartureFocus}
                                onBlur = {handleDepartureBlur}
                                inputClass="add-new__input"
                                placeholder={isDepartureInputFocused ? "" : "Departure..."}
                            />
                        </form>
                    {/* </section> */}

                </section>

                <div className='add-new__buttons'>
                    <Button
                        buttonClass={`add-new__cancel-cta add-new__cancel-cta--${theme}`}
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