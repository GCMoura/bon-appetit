import React from 'react'

function TextArea({ name, label }) {
  return (
    <div>
      <label htmlFor={ name }>{ label } </label>
      <textarea  id={ name }/>
    </div>
  )
}

export default TextArea