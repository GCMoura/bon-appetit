import React from 'react'

function Input({ name, label, type, ...rest }){
  return (
    <div>
      <label htmlFor={ name }>{ label } </label>
      <input type={ type } className={ name } { ...rest }/>
    </div>
  )
}

export default Input