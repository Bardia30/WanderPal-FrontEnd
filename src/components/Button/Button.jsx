import React from 'react';
import './Button.scss';

const Button = ({text, buttonClass}) => {
  return (
    <button className={`cta ${buttonClass}`}>{text}</button>
  )
}

export default Button