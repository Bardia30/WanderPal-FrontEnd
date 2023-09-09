import { useState, useContext } from "react";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import ThemeContext from "../context/theme-context";
import '../AddNewScheduleModal/AddNewScheduleModal.scss';
import { calculateDayRelativeToArrival, timeStrToTimestamp, timestampToTimeStr } from "../util/dateConverter";
import axios from 'axios';

const EditScheduleModal = ({ setIsUpdated, scheduleId, duration, day, time, uid, travelId, name, travelObj, website, placeType, setIsEditScheduleClicked}) => {
    const { theme } = useContext(ThemeContext);
    
    
    const handleCloseModal = () => {
        setIsEditScheduleClicked(false);
    }

    const [isDateInputFocused, setIsDateInputFocused] = useState(false);
    const [isTimeInputFocused, setIsTimeInputFocused] = useState(false);
    const [isDurationInputFocused, setIsDurationInputFocused] = useState(false);

    const [scheduleObj, setScheduleObj] = useState({
        creatorId: uid, 
        destinationId: travelId,
        name: name,
        activity_type: placeType,
        website: website,
        day: day,
        time: time,
        duration: duration
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
        
        const token = localStorage.getItem('token');

        if (token) {
            axios.put(`https://wanderpalapi.onrender.com/schedules/${uid}/${travelId}/${scheduleObj.day}/${scheduleId}`, scheduleObj, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => {
                console.log(res.data);
                alert('schedule has been successfully updated');
                handleCloseModal();
                setIsUpdated(true);
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
                    <h1 className={`add-sched__title add-sched__title--${theme}`}>Edit Schedule</h1>
                    <form onSubmit={handleAddNewSchedule} className='add-sched__form' action="submit">
                        <InputField
                            type={isDateInputFocused ? "date" : "text"}
                            onFocus={handleDateFocus}
                            onBlur={handleDateBlur}
                            inputClass="add-sched__input"
                            placeholder={isDateInputFocused ? "" : `Day ${day}`}
                            name='scheduleDay'
                        />
                        <InputField
                            type={isTimeInputFocused ? "time" : "text"}
                            onFocus={handleTimeFocus}
                            onBlur={handleTimeBlur}
                            inputClass="add-sched__input"
                            placeholder={isTimeInputFocused ? "" : timestampToTimeStr(time)}
                            name='scheduleTime'
                        />
                        <InputField
                            type={isDurationInputFocused ? "number" : "text"}
                            onFocus={handleDurationFocus}
                            onBlur={handleDurationBlur}
                            inputClass="add-sched__input"
                            placeholder={isDurationInputFocused ? "" : `${duration} hour`}
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

export default EditScheduleModal