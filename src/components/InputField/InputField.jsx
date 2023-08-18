import React, {useContext} from 'react';
import ThemeContext from '../context/theme-context';


const InputField = ({ onFocus, onBlur, type, inputClass, placeholder}) => {
  
  const {theme} = useContext(ThemeContext);
  
  return (
    <input onBlur={onBlur} onFocus={onFocus} type={type} className={`input input--${theme} ${inputClass}`} placeholder={placeholder}/>
  )
}

export default InputField