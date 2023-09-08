import React, {useState, useEffect, useContext} from 'react';
import './AddNewTravelModal.scss';
import '../InputField/InputField';
import InputField from '../InputField/InputField';
import '../InputField/InputField.scss';
import Button from '../Button/Button';
import ThemeContext from '../context/theme-context';
import axios from 'axios';
import { dateToTimeStamp } from '../util/dateConverter';

const AddNewTravelModal = ({ setAddNewModalClicked, uid }) => {
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


    const handleCancelButton = (e) => {
        e.preventDefault();
        handleCloseModal();
    }

    const [userPostObj, setUserPostObj] = useState({});


    const handleAddNewTravel = (e) => {
        e.preventDefault();
        const {userDestination, userHotelName, userArrivalDate, userDepartureDate} = e.target;
        

        const userArrival = dateToTimeStamp(userArrivalDate.value);
        const userDeparture = dateToTimeStamp(userDepartureDate.value);

        

        setUserPostObj({
            destination: userDestination.value,
            arrival_date: userArrival,
            departure_date: userDeparture,
            creatorId: uid,
            hotelName: userHotelName.value
        })
    }


    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token && userPostObj.destination ) {
            axios.post(`http://localhost:8080/destinations/${uid}`, userPostObj, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => {
                    console.log(res.data);
                    alert('new travel added');
                    handleCloseModal();
                })
                .catch(err => console.log(err.message));
        } else {
            console.error('no token');
        }
    }, [userPostObj])


    return (
        <div onClick={handleCloseModal} className='add-dest'>
            <section onClick={e => e.stopPropagation()} className={`add-new add-new--${theme}`}>
                <section className='add-new__top-section'>
                        <h1 className={`add-new__title add-new__title--${theme}`}>Add Your New Adventure!</h1>
                        <form onSubmit={handleAddNewTravel} className='add-new__form' action="submit">
                            <InputField
                                type="text"
                                inputClass="add-new__input"
                                placeholder="Destination..."
                                name='userDestination'
                            />
                            <InputField
                                type="text"
                                inputClass="add-new__input"
                                placeholder="Hotel..."
                                name='userHotelName'
                            />
                            <InputField
                                type= {isArrivalInputFocused ? "date" : "text"}
                                onFocus = {handleArrivalFocus}
                                onBlur = {handleArrivalBlur}
                                inputClass="add-new__input"
                                placeholder={isArrivalInputFocused ? "" : "Arrival..."}
                                name='userArrivalDate'
                            />
                            <InputField
                                type= {isDepartureInputFocused ? "date" : "text"}
                                onFocus = {handleDepartureFocus}
                                onBlur = {handleDepartureBlur}
                                inputClass="add-new__input"
                                placeholder={isDepartureInputFocused ? "" : "Departure..."}
                                name='userDepartureDate'
                            />
                            <div className='add-new__buttons'>
                    <Button
                        buttonClass={`add-new__cancel-cta add-new__cancel-cta--${theme}`}
                        text="cancel"
                        onClick={handleCancelButton}
                    />
                    <Button
                        buttonClass="add-new__add-cta"
                        text="add new travel"
                        type='submit'
                    />
                </div>
                        </form>
                </section>

                
            </section>
        </div>
    )
}

export default AddNewTravelModal