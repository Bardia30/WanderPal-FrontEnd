import { useState, useContext } from "react";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import ThemeContext from "../context/theme-context";
import './AddNewScheduleModal.scss';

const AddNewScheduleModal = ({setIsAddScheduleClicked}) => {
    const { theme } = useContext(ThemeContext);


    const handleCloseModal = () => {
        setIsAddScheduleClicked(false);
    }

    const [isDateInputFocused, setIsDateInputFocused] = useState(false);
    const [isTimeInputFocused, setIsTimeInputFocused] = useState(false);
    const [isDurationInputFocused, setIsDurationInputFocused] = useState(false);

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
    }

    const handleTimeBlur = (e) => {
        if (!e.target.value) {
            setIsTimeInputFocused(false);
        }
    }

    const handleDurationBlur = (e) => {
        if (!e.target.value) {
            setIsDurationInputFocused(false);
        }
    }

    return (
        <div onClick={handleCloseModal} className='wrapper'>
            <section onClick={e => e.stopPropagation()} className={`add-sched add-sched--${theme}`}>
                <section className='add-sched__top-section'>
                    {/* <section className='add-sched__left-section'> */}
                    <h1 className={`add-sched__title add-sched__title--${theme}`}>Add a New Schedule</h1>
                    <form className='add-sched__form' action="submit">
                        
                        <InputField
                            type={isDateInputFocused ? "date" : "text"}
                            onFocus={handleDateFocus}
                            onBlur={handleDateBlur}
                            inputClass="add-sched__input"
                            placeholder={isDateInputFocused ? "" : "Date..."}
                        />
                        <InputField
                            type={isTimeInputFocused ? "time" : "text"}
                            onFocus={handleTimeFocus}
                            onBlur={handleTimeBlur}
                            inputClass="add-sched__input"
                            placeholder={isTimeInputFocused ? "" : "Time..."}
                        />
                        <InputField
                            type={isDurationInputFocused ? "number" : "text"}
                            onFocus={handleDurationFocus}
                            onBlur={handleDurationBlur}
                            inputClass="add-sched__input"
                            placeholder={isDurationInputFocused ? "" : "Duration..."}
                        />
                    </form>
                    {/* </section> */}

                </section>

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
            </section>
        </div>
    )
}

export default AddNewScheduleModal