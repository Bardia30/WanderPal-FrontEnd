import { useContext, useState } from "react";
import ThemeContext from "../context/theme-context";
import DropDownLogo from '../../assets/drop-down-logo.png';
import DropDownDark from '../../assets/drop-down-dark.png';
import './DropDownVacation.scss';

//has to dynamically set the vacation's list for a user, 
//and days of each vacation from the given data
const DropDownVacation = ({ data, dropClass, setSelectedDestinationId }) => {

    const { theme } = useContext(ThemeContext);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState("Las Vegas")

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    // const handleSelection = (e) => {
    //     setIsOpen(false);
    //     //rest of logic
    //     const selection = e.target.firstChild.data;
    //     setSelectedTitle(selection);
    //     //some other logic is left
    //     setSelectedDestinationId(destination._id);
    // }



    return (
        <div className={dropClass}>
            <section onClick={handleToggle} className={isOpen ? `dropdown dropdown-vacation dropdown--dropped dropdown--${theme}` : `dropdown dropdown-vacation  dropdown--${theme}`}>
                <h3 className={`dropdown__title dropdown-vacation__title dropdown__title--${theme}`}>{selectedTitle}</h3>
                <img className='dropdown__drop-logo' src={theme === "light" ? DropDownLogo : DropDownDark} alt="drop-down" />
            </section>
            {isOpen &&
                <ul className={`dropdown__list dropdown-vacation__list dropdown__list--${theme}`}>
                    {data.map(destination => (
                        <li onClick={(e) => {
                            setIsOpen(false);
                            //rest of logic
                            const selection = e.target.firstChild.data;
                            setSelectedTitle(selection);
                            //some other logic is left
                            setSelectedDestinationId(destination._id);
                        }} className={`dropdown__item dropdown__item--${theme}`}>{destination.destination}</li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default DropDownVacation