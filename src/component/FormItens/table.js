import React from 'react'

function TableOfIngredients({ ingredient, qtd, measure }) {
  return (
    <table>
      <tr>
        <th>Ingrediente</th>
        <th>Quantidade</th>
        <th>Medida</th>
      </tr>
      <tr>
        <th>{ingredient}</th>
        <th>{qtd}</th>
        <th>{measure}</th>
      </tr>
    </table>
  )
}

export default TableOfIngredients