import {useState, useContext} from 'react';
import './EditTravelModal.scss';
import '../InputField/InputField';
import InputField from '../InputField/InputField';
import '../InputField/InputField.scss';
import Button from '../Button/Button';
import ThemeContext from '../context/theme-context';

const EditTravelModal = ({setIsEditTravelClicked, travel}) => {
    const {theme} = useContext(ThemeContext);
    
    const {destination, hotel, arrival, departure} = travel;
    
    const handleCloseModal = () => {
        setIsEditTravelClicked(false);
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
                        <h1 className={`add-new__title add-new__title--${theme}`}>Edit Your New Adventure!</h1>
                        <form className='add-new__form' action="submit">
                            <InputField
                                type="text"
                                inputClass="add-new__input"
                                placeholder={destination}
                            />
                            <InputField
                                type="text"
                                inputClass="add-new__input"
                                placeholder={hotel}
                            />
                            <InputField
                                type= {isArrivalInputFocused ? "date" : "text"}
                                onFocus = {handleArrivalFocus}
                                onBlur = {handleArrivalBlur}
                                inputClass="add-new__input"
                                placeholder={isArrivalInputFocused ? "" : arrival}
                            />
                            <InputField
                                type= {isDepartureInputFocused ? "date" : "text"}
                                onFocus = {handleDepartureFocus}
                                onBlur = {handleDepartureBlur}
                                inputClass="add-new__input"
                                placeholder={isDepartureInputFocused ? "" : departure}
                            />
                        </form>
                    {/* </section> */}

                </section>

                <div className='add-new__buttons'>
                    <Button
                        buttonClass={`add-new__cancel-cta add-new__cancel-cta--${theme}`}
                        text="cancel"
                        onClick={handleCloseModal}
                    />
                    <Button
                        buttonClass="add-new__add-cta"
                        text="Edit Travel"
                    />
                </div>
            </section>
        </div>
    )
}

export default EditTravelModal