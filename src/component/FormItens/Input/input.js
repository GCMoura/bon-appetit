import React from 'react'

import './style.css'

function Input({ name, type, ...rest }){
  return (
    <div className="input-div">
      <input type={ type } className={ name } { ...rest }/>
    </div>
  )
}

export default Input