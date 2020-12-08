import React from 'react'

import './style.css'

function Image({ url }){
  return(
    <div className="recipe-image">
      <img src={ url } alt="Foto receita"/>
    </div>
  )
}

export default Image