import React from 'react'

import './style.css'

function Title({ title }) {

  return(
    <div className="recipe-title">
      <p>{ title }</p>
    </div>
  ) 
}

export default Title