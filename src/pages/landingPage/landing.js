import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'

import config from '../../config/index'

const URL_RECIPES = `${config}/recipes`

function Landing() {

  const history = useHistory()
  
  const [ ingredient, setIngredient ] = useState('')

  async function getAllRecipesByIngredient(ingredient) {

    const serverResponse = await fetch(`${URL_RECIPES}`)

    const recipesReturned =  await serverResponse.json()

    let recipesArray = []
    
    for(let i in recipesReturned){
      for(let j in recipesReturned[i].ingredientsArray){
        if(recipesReturned[i].ingredientsArray[j] === ingredient){
          recipesArray.push(recipesReturned[i])
        }
      }
    }
    history.push({
      pathname: '/recipes',
      state: { detail: recipesArray }
    })
  }  

  function handleSubmit(event) {
    event.preventDefault()

    getAllRecipesByIngredient(ingredient)

  }

  return (
    <div>
      <h1>Landing Page</h1>
      <Link to='/register'>
        To Register
      </Link>
      <br></br>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="ingredient"
          value={ingredient} 
          onChange={(event) => { setIngredient(event.target.value) }} 
          />
        <button type="submit">
          Click
        </button>
      </form>

    </div>
  )
}

export default Landing