import React from 'react'

function TextArea({ name, label, ...rest }) {
  return (
    <div>
      <label htmlFor={ name }>{ label } </label>
      <textarea  id={ name } { ...rest } />
    </div>
  )
}

export default TextArea