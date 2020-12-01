import React from 'react'

function Ingredient({ ingredients }){

  var ingredient = []
  var mergeIngredient

  Object.values(ingredients).map((values) => {
    Object.entries(values).map((key) => {
      console.log(key.length)
      mergeIngredient = ''
      for(let i = 0; i < key.length; i++){
        mergeIngredient += `${key[i]} `
      }
      ingredient.push(mergeIngredient)
    })
  }) 
  console.log(ingredient)

  return (
    <div>
      {
        ingredient.map((value) => {
          return <h1>{value}</h1>
        })
      }
    </div>
  )
}

export default Ingredient