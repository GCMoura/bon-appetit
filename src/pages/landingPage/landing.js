import React from 'react'

import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div>
      <h1>Landing Page</h1>
      <Link to='/register'>
        To Register
      </Link>
      <br></br>
      <Link to='/recipes'>
        To Recipes
      </Link>

    </div>
  )
}

export default Landing