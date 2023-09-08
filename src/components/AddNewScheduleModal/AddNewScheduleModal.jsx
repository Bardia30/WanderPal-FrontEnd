import { useState, useContext } from "react";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import ThemeContext from "../context/theme-context";
import './AddNewScheduleModal.scss';
import { calculateDayRelativeToArrival, timeStrToTimestamp } from "../util/dateConverter";
import axios from 'axios';

const AddNewScheduleModal = ({ uid, travelId, travelObj, placeType, placeDetailsObj, setIsAddScheduleClicked }) => {
    const { theme } = useContext(ThemeContext);


    const handleCloseModal = () => {
        setIsAddScheduleClicked(false);
    }

    const [isDateInputFocused, setIsDateInputFocused] = useState(false);
    const [isTimeInputFocused, setIsTimeInputFocused] = useState(false);
    const [isDurationInputFocused, setIsDurationInputFocused] = useState(false);

    const [scheduleObj, setScheduleObj] = useState({
        creatorId: uid, 
        destinationId: travelId,
        name: placeDetailsObj.name,
        activity_type: placeType,
        website: placeDetailsObj.website
    });


    const handleDateFocus = () => {
        setIsDateInputFocused(true);
    }

    const handleTimeFocus = () => {
        setIsTimeInputFocused(true);
    }

    const handleDurationFocus = () => {
        setIsDurationInputFocused(true);
    }

    const handleDateBlur = (e) => {
        if (!e.target.value) {
            setIsDateInputFocused(false);
        }
        if (calculateDayRelativeToArrival(travelObj.arrival_date, travelObj.departure_date, e.target.value)) {
            setScheduleObj({
                ...scheduleObj,
                day: calculateDayRelativeToArrival(travelObj.arrival_date, travelObj.departure_date, e.target.value)
            })
        } else {
            return alert('enter valid date');
        }
    }

    const handleTimeBlur = (e) => {
        if (!e.target.value) {
            setIsTimeInputFocused(false);
        }
        if (timeStrToTimestamp(e.target.value)) {
            setScheduleObj({
                ...scheduleObj,
                time: timeStrToTimestamp(e.target.value)
            })
        } else {
            return alert('enter valid date');
        }
    }

    const handleDurationBlur = (e) => {
        if (!e.target.value) {
            setIsDurationInputFocused(false);
        }
        if (Number(e.target.value) && Number(e.target.value) > 0) {
            setScheduleObj({
                ...scheduleObj,
                duration: Number(e.target.value)
            })
        }
    }

    const handleAddNewSchedule = (e) => {
        e.preventDefault();
        if (!scheduleObj.duration || !scheduleObj.time || !scheduleObj.day) {
            return alert('You must enter all fields');
        }

        const token = localStorage.getItem('token');

        if (token) {
            axios.post(`http://localhost:8080/schedules/${uid}/${travelId}/${scheduleObj.day}`, scheduleObj, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => {
                console.log(res.data);
                alert('new schedule has been successfully added');
                handleCloseModal();
            })
            .catch(err => {
                console.log(err.message);
            })
        } else {
            console.error('no token')
        }

        
    }


    return (
        <div onClick={handleCloseModal} className='wrapper'>
            <section onClick={e => e.stopPropagation()} className={`add-sched add-sched--${theme}`}>
                <section className='add-sched__top-section'>
                    {/* <section className='add-sched__left-section'> */}
                    <h1 className={`add-sched__title add-sched__title--${theme}`}>Add a New Schedule</h1>
                    <form onSubmit={handleAddNewSchedule} className='add-sched__form' action="submit">

                        <InputField
                            type={isDateInputFocused ? "date" : "text"}
                            onFocus={handleDateFocus}
                            onBlur={handleDateBlur}
                            inputClass="add-sched__input"
                            placeholder={isDateInputFocused ? "" : "Date..."}
                            name='scheduleDay'
                        />
                        <InputField
                            type={isTimeInputFocused ? "time" : "text"}
                            onFocus={handleTimeFocus}
                            onBlur={handleTimeBlur}
                            inputClass="add-sched__input"
                            placeholder={isTimeInputFocused ? "" : "Time..."}
                            name='scheduleTime'
                        />
                        <InputField
                            type={isDurationInputFocused ? "number" : "text"}
                            onFocus={handleDurationFocus}
                            onBlur={handleDurationBlur}
                            inputClass="add-sched__input"
                            placeholder={isDurationInputFocused ? "" : "Duration..."}
                            name='scheduleDuration'
                        />
                        <div className='add-sched__buttons'>
                            <Button
                                buttonClass={`add-sched__cancel-cta add-sched__cancel-cta--${theme}`}
                                text="cancel"
                                onClick={handleCloseModal}
                            />
                            <Button
                                buttonClass="add-sched__add-cta"
                                text="add new schedule"
                            />
                        </div>
                    </form>


                </section>


            </section>
        </div>
    )
}

export default AddNewScheduleModal