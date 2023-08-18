import React, {useContext} from 'react';
import './Button.scss';
import ThemeContext from '../context/theme-context';

const Button = ({text, buttonClass}) => {
  const {theme} = useContext(ThemeContext);


  return (
    <button className={`cta cta--${theme} ${buttonClass}`}>{text}</button>
  )
}

export default Button