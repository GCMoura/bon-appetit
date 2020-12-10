import React from 'react'

import './style.css'

function Ingredient({ ingredients }){

  var ingredient = []
  var mergeIngredient

  for(let i in ingredients){
    mergeIngredient = `${ingredients[i].description} - ${ingredients[i].quant}`
    ingredient.push(mergeIngredient)
  }

  return (
    <div>
      <table border='0' cellSpacing='0' className="table-ingredient">
        <tbody>
      {
        ingredient.map((value) => {
          let split = value.split('-')
          let ingredientForResponse = split[0][0].toUpperCase() + split[0].slice(1)
          return (
            <tr key={value}>
              <td id="ingredient" >{ingredientForResponse}</td>
              <td>-</td>
              <td id="quant" >{split[1]}</td>
            </tr>
          )
        })
      }
      </tbody>
      </table> 
    </div>
  )
}

export default Ingredient