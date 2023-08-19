import React, {useContext} from 'react';
import './Button.scss';
import ThemeContext from '../context/theme-context';

const Button = ({text, buttonClass, onClick}) => {
  const {theme} = useContext(ThemeContext);


  return (
    <button onClick={onClick} className={`cta cta--${theme} ${buttonClass}`}>{text}</button>
  )
}

export default Button