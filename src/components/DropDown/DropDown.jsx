import { useState } from 'react';
import DropDownLogo from '../../assets/drop-down-logo.png';
import './DropDown.scss';

const DropDown = () => {
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
    if (!isOpen) {
        return (
        <section onClick={handleToggle} className='dropdown'>
            <h3 className='dropdown__title'>{selectedTitle}</h3>
            <img className='dropdown__drop-logo' src={DropDownLogo} alt="drop-down" />
        </section>
        )
    } else {
        return (
            <>
            <section onClick={handleToggle} className='dropdown dropdown--dropped'>
                <h3 className='dropdown__title'>{selectedTitle}</h3>
                <img className='dropdown__drop-logo--inverted' src={DropDownLogo} alt="drop-down" />
            </section>
            <ul className='dropdown__list'>
                <li onClick={handleSelection} className='dropdown__item'>Restaurants</li>
                <li onClick={handleSelection} className='dropdown__item'>Attractions</li>
            </ul>
            </>
        )
    }

}

export default DropDown