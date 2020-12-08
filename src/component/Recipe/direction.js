import React from 'react'

import './style.css'

function Direction({ direction }) {
  return(
    <div className='recipe-direction'>
      <p>{direction}</p>
    </div>
  )
}

export default Direction