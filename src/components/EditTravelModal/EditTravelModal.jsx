import { useState, useContext } from 'react';
import axios from 'axios';
import './EditTravelModal.scss';
import '../InputField/InputField';
import InputField from '../InputField/InputField';
import '../InputField/InputField.scss';
import Button from '../Button/Button';
import ThemeContext from '../context/theme-context';
import { timestampToDateStr, dateToTimeStamp } from '../util/dateConverter';

const EditTravelModal = ({ setIsEditTravelClicked, travel, uid, setIsTravelUpdated }) => {
    const { theme } = useContext(ThemeContext);

    const { destination, hotel, arrival_date, departure_date, _id } = travel;


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
        if (dateToTimeStamp(e.target.value)) {
            setUpdatedTravelObj({
                ...updatedTravelObj,
                arrival_date: dateToTimeStamp(e.target.value)
            })
        } else {
            return alert('enter valid date');
        }
    }

    const handleDepartureBlur = (e) => {
        if (!e.target.value) {
            setIsDepartureInputFocused(false);
        }
        if (dateToTimeStamp(e.target.value)) {
            setUpdatedTravelObj({
                ...updatedTravelObj,
                departure_date: dateToTimeStamp(e.target.value)
            })
        } else {
            return alert('enter valid date');
        }
    }
    

    const [updatedTravelObj, setUpdatedTravelObj] = useState({
        arrival_date: travel.arrival_date,
        departure_date: travel.departure_date,
        hotel: {
            name: travel.hotel.name
        },
        destination: travel.destination
    });

    const [isHotelChanged, setIsHotelChanged] = useState(false);
    const [isDestinationChanged, setIsDestinationChanged] = useState(false);

    const handleDestinationChange = (e) => {
        setUpdatedTravelObj({
            ...updatedTravelObj,
            destination: e.target.value
        })
        setIsDestinationChanged(true);
    }

    const handleHotelChange = (e) => {
        setUpdatedTravelObj({
            ...updatedTravelObj,
            hotel: {
                name: e.target.value
            }
        })
        setIsHotelChanged(true);
    }

    const handleEditTravel = (e) => {
        e.preventDefault();

        if (isDestinationChanged && !isHotelChanged) {
            return alert('You must change both destination and hotel');
        }

        
        axios.put(`http://localhost:8080/destinations/${uid}/${_id}`, updatedTravelObj)
            .then(res => {
                console.log(res.data);
                alert('Travel was successfully updated');
                setIsTravelUpdated(true);
                handleCloseModal();
            })
            .catch(err => console.log(err.message));
    }

    return (
        <div onClick={handleCloseModal} className='add-dest'>
            <section onClick={e => e.stopPropagation()} className={`add-new add-new--${theme}`}>
                <section className='add-new__top-section'>
                    {/* <section className='add-new__left-section'> */}
                    <h1 className={`add-new__title add-new__title--${theme}`}>Edit Your New Adventure!</h1>
                    <form onSubmit={handleEditTravel} className='add-new__form' action="submit">
                        <InputField
                            type="text"
                            inputClass="add-new__input"
                            placeholder={destination}
                            name="updatedDestination"
                            onChange={handleDestinationChange}
                        />
                        <InputField
                            type="text"
                            inputClass="add-new__input"
                            placeholder={hotel.name}
                            name="updatedHotelName"
                            onChange={handleHotelChange}
                        />
                        <InputField
                            type={isArrivalInputFocused ? "date" : "text"}
                            onFocus={handleArrivalFocus}
                            onBlur={handleArrivalBlur}
                            inputClass="add-new__input"
                            placeholder={isArrivalInputFocused ? "" : timestampToDateStr(arrival_date)}
                            name="updatedArrivalDate"
                            
                        />
                        <InputField
                            type={isDepartureInputFocused ? "date" : "text"}
                            onFocus={handleDepartureFocus}
                            onBlur={handleDepartureBlur}
                            inputClass="add-new__input"
                            placeholder={isDepartureInputFocused ? "" : timestampToDateStr(departure_date)}
                            name="updatedDepartureDate"
                            
                        />
                        <div className='add-new__buttons add-new__buttons--edit'>
                            <Button
                                buttonClass={`add-new__cancel-cta add-new__cancel-cta--${theme}`}
                                text="cancel"
                                onClick={handleCloseModal}
                            />
                            <Button
                                buttonClass="add-new__add-cta "
                                text="Edit Travel"
                            />
                        </div>
                    </form>
                </section>


            </section>
        </div>
    )
}

export default EditTravelModal