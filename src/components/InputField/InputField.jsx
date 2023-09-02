import React, {useContext} from 'react';
import ThemeContext from '../context/theme-context';


const InputField = ({ onChange, name, onFocus, onBlur, type, inputClass, placeholder}) => {
  
  const {theme} = useContext(ThemeContext);
  
  return (
    <input onChange={onChange} name={name} onBlur={onBlur} onFocus={onFocus} type={type} className={`input input--${theme} ${inputClass}`} placeholder={placeholder}/>
  )
}

export default InputField