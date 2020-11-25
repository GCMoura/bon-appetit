import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Recipe from '../../component/Recipe/recipe'

function Recipes() {
 
  const history = useHistory()

  const recipes = history.location.state.detail

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

      { recipes.map((recipe) => {
        return <Recipe 
          key={recipe.id} 
          title={recipe.title} 
          ingredients={recipe.ingredientsArray} 
          directions={recipe.howToMake} />
      }) }
      
    </div>
  )
}

export default Recipes