import React from 'react'

function Input({type='text',title, id ,placeholder='',name ,value="" }) {
  return (
    <div className="col-12">
    <label htmlFor={id} className="form-label">{title}</label>
    <input type={type} name={name} className="form-control" id={id} placeholder={placeholder}   
         value={value}/>
  </div>
  )
}

export default Input