import React from 'react'

function Recipe({title, ingredients, directions}) {
  return(
    <div>
      <h1>{title}</h1>
      {ingredients.map((ingredient) => {
          return <h1>{ingredient}</h1>
        })
      }
      <h1>{directions}</h1>
    </div>
  ) 
}

export default Recipe