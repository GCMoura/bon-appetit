import React from 'react'

import './style.css'

function TextArea({ name, ...rest }) {
  return (
    <div className="text-area-div">
      <textarea  id={ name } { ...rest } />
    </div>
  )
}

export default TextArea