import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import config from '../../config/index.js'
const URL_RECIPES = `${config}/recipes`


function Recipes() {

  var recipesReturned = ''

  async function handleSubmit(event) {
    event.preventDefault()

    const serverResponse = await fetch(`${URL_RECIPES}`)

    recipesReturned = await serverResponse.json()

    console.log(recipesReturned)
  }

  return (
    <div>
      <h1>Recipes Page</h1>
      <Link to='/'>
        Return to Landing
      </Link>
      <br></br>
      <Link to='/register'>
        To Register
      </Link>
      <form onSubmit={handleSubmit}>
        <input type="text" name="word"/>
        <button type="submit">
          Click
        </button>
      </form>
      <div>
        <h1>Receitas: {recipesReturned.title}</h1>
      </div>
    </div>
  )
}

export default Recipes