import { useState, useContext } from 'react';
import DropDownLogo from '../../assets/drop-down-logo.png';
import DropDownDark from '../../assets/drop-down-dark.png';
import './DropDown.scss';
import ThemeContext from '../context/theme-context';

const DropDown = () => {
    const { theme } = useContext(ThemeContext);

    const [isOpen, setIsOpen] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState("Select an Attraction...")

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
        <>
            <section onClick={handleToggle} className={isOpen ? `dropdown dropdown--dropped dropdown--${theme}` : `dropdown dropdown--${theme}`}>
                <h3 className={`dropdown__title dropdown__title--${theme}`}>{selectedTitle}</h3>
                <img className='dropdown__drop-logo' src={theme === "light" ? DropDownLogo : DropDownDark} alt="drop-down" />
            </section>
            {isOpen &&
                <ul className={`dropdown__list dropdown__list--${theme}`}>
                    <li onClick={handleSelection} className={`dropdown__item dropdown__item--${theme}`}>Restaurants</li>
                    <li onClick={handleSelection} className={`dropdown__item dropdown__item--${theme}`}>Attractions</li>
                </ul>
            }
        </>
    )

}

export default DropDown