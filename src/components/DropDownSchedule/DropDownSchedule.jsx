import { useContext, useState } from "react";
import ThemeContext from "../context/theme-context";
import DropDownLogo from '../../assets/drop-down-logo.png';
import DropDownDark from '../../assets/drop-down-dark.png';
import '../DropDownVacation/DropDownVacation.scss';

//has to dynamically set the vacation's list for a user, 
//and days of each vacation from the given data
const DropDownSchedule = ({data, dropClass}) => {

    const { theme } = useContext(ThemeContext);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState(1)

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    const handleSelection = (e) => {
        setIsOpen(false);
        //rest of logic
        const selection = e.target.firstChild.data;
        setSelectedTitle(selection);
        //some other logic is left
        
    }
    
    
    
    return (
        <div className={dropClass}>
            <section onClick={handleToggle} className={isOpen ? `dropdown dropdown-vacation dropdown--dropped dropdown--${theme}` : `dropdown dropdown-vacation  dropdown--${theme}`}>
                <h3 className={`dropdown__title dropdown-vacation__title dropdown__title--${theme}`}>{` day ${selectedTitle}`}</h3>
                <img className='dropdown__drop-logo' src={theme === "light" ? DropDownLogo : DropDownDark} alt="drop-down" />
            </section>
            {isOpen &&
                <ul className={`dropdown__list dropdown-vacation__list dropdown__list--${theme}`}>
                    <li onClick={handleSelection} className={`dropdown__item dropdown__item--${theme}`}>1</li>
                    <li onClick={handleSelection} className={`dropdown__item dropdown__item--${theme}`}>2</li>
                    <li onClick={handleSelection} className={`dropdown__item dropdown__item--${theme}`}>3</li>
                </ul>
            }
        </div>
    )
}

export default DropDownSchedule;