import React from 'react'

const InputField = ({ onFocus, onBlur, type, inputClass, placeholder}) => {
  return (
    <input onBlur={onBlur} onFocus={onFocus} type={type} className={`input ${inputClass}`} placeholder={placeholder}/>
  )
}

export default InputField