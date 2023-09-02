import React, {useContext} from 'react';
import './Button.scss';
import ThemeContext from '../context/theme-context';

const Button = ({text, buttonClass, onClick, type}) => {
  const {theme} = useContext(ThemeContext);


  return (
    <button type={type} onClick={onClick} className={`cta cta--${theme} ${buttonClass}`}>{text}</button>
  )
}

export default Button