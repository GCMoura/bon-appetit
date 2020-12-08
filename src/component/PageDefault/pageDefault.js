import React from 'react'

import Header from '../Header/header'

import './style.css'

function PageDefault( props ) {

  return (
    
    <div className="container">
        <Header title={props.title}/>
          {props.children}
    </div>
  )
}

export default PageDefault