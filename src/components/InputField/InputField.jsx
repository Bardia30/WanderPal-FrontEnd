import React from 'react'

const InputField = ({ type, inputClass, placeholder}) => {
  return (
    <input type={type} className={`input ${inputClass}`} placeholder={placeholder}/>
  )
}

export default InputField