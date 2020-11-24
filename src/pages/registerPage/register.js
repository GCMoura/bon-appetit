import React from 'react'

import { Link } from 'react-router-dom'

function Register() {
  return (
    <div>
      <h1>Register Page</h1>
      <Link to='/'>
        Return to Landing
      </Link>
      <br></br>
      <Link to='/recipes'>
        To Recipes
      </Link>

    </div>
  )
}

export default Register