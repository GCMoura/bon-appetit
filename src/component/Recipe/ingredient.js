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
          return (
            <tr key={value}>
              <td width="200">{split[0]}</td>
              <td>-</td>
              <td width="150">{split[1]}</td>
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