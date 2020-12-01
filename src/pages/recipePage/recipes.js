import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Title from '../../component/Recipe/title'
import Ingredient from '../../component/Recipe/ingredient'
import Direction from '../../component/Recipe/direction'

function Recipes() {
 
  const history = useHistory()

  const recipes = history.location.state.detail

  var title
  var direction
  var ingredients = []

  for(let i in recipes){
    title = recipes[i].title
    direction = recipes[i].direction
    ingredients.push(recipes[i].ingredients)
  }

  console.log(ingredients)
  
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

      <Title 
        title={title}
      />
      <Ingredient 
        ingredients={ingredients}
      />
      <Direction 
        direction={direction}
      />
            
    </div> 
  )
}

export default Recipes