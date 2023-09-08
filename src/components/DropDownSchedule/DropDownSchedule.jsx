import { useContext, useEffect, useState } from "react";
import ThemeContext from "../context/theme-context";
import DropDownLogo from '../../assets/drop-down-logo.png';
import DropDownDark from '../../assets/drop-down-dark.png';
import '../DropDownVacation/DropDownVacation.scss';
import { daysBetweenTimestamps } from "../util/dateConverter";
import axios from 'axios';

//has to dynamically set the vacation's list for a user, 
//and days of each vacation from the given data
const DropDownSchedule = ({ isUpdated, uid, selectedDestinationId, dropClass, setSchedules }) => {

    const { theme } = useContext(ThemeContext);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState(1);


    
    const [daysArray, setDaysArray] = useState([]);


    useEffect(() => {
        if (selectedDestinationId) {
            axios.get(`http://localhost:8080/destinations/${uid}/${selectedDestinationId}`)
            .then(res => {
                const days = daysBetweenTimestamps(res.data.arrival_date, res.data.departure_date);
                const newDaysArray = [];
                for (let i = 0; i < days; i++) {
                    newDaysArray.push(i);
                }
                setDaysArray(newDaysArray);
            })
            .catch(err => console.log(err.message));
        }
    }, [selectedDestinationId, isUpdated]);



    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    const handleSelection = (e) => {
        setIsOpen(false);
        //rest of logic
        const selection = Number(e.target.firstChild.data);
        setSelectedTitle(selection);
        //some other logic is left
        
        
    }

    useEffect(() => {
        if (selectedDestinationId && selectedTitle) {
            axios.get(`http://localhost:8080/schedules/${uid}/${selectedDestinationId}`)
                .then(res => {
                    setSchedules(res.data.filter(schedule => schedule.day === selectedTitle ))
                })
                .catch(err => {
                    console.log(err.message);
                })
        }
    }, [selectedDestinationId, selectedTitle, isUpdated])
    
    
    
    return (
        <div className={dropClass}>
            <section onClick={handleToggle} className={isOpen ? `dropdown dropdown-vacation dropdown--dropped dropdown--${theme}` : `dropdown dropdown-vacation  dropdown--${theme}`}>
                <h3 className={`dropdown__title dropdown-vacation__title dropdown__title--${theme}`}>{` day ${selectedTitle}`}</h3>
                <img className='dropdown__drop-logo' src={theme === "light" ? DropDownLogo : DropDownDark} alt="drop-down" />
            </section>
            {isOpen &&
                <ul className={`dropdown__list dropdown-vacation__list dropdown__list--${theme}`}>
                    {daysArray?.map((day, index) => (
                        <li key={index} onClick={handleSelection} className={`dropdown__item dropdown__item--${theme}`}>{day+1}</li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default DropDownSchedule;