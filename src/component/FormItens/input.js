import React from 'react'

function Input({ name, label }){
  return (
    <div>
      <label htmlFor={ name }>{ label } </label>
      <input type="text" id={ name }/>
    </div>
  )
}

export default Input