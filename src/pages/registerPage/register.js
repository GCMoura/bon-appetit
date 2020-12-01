import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Input from '../../component/FormItens/input'
import TextArea from '../../component/FormItens/textArea'

import config from '../../config/index'

const URL_RECIPES = `${config}/recipes`

function Register() {

  const id = Date.now().toString()

  const [ title, setTitle ] = useState('')
  const [ direction, setDirection ] = useState('')

  const valueBase = {description: '', quant: ''};

  const [ingredients, setIngredients] = useState([{...valueBase}]);

  const handleAdd = () => {
    setIngredients(state => [...state, {... valueBase}]);
  }

  const handleChange = (event, index) => {
    const {name, value} = event.target;
    let values = [...ingredients];
    values[index][name] = value;
    setIngredients(state => [...values]);
  }

  const handleDelete = (index) => {
    let values = ingredients.filter((a, b) => {    
      if (b !== index) {
        return a;
      }
    });
    setIngredients(state => [...values]);    
  }
  
  async function handleRecipe(){

    let newRecipe = {id, title, ingredients, direction}

    console.log(title, ingredients, direction)
    
    const serverResponse = await fetch(`${URL_RECIPES}`)

    const recipesReturned =  await serverResponse.json()

    recipesReturned.push(newRecipe)

    console.log(recipesReturned)

  }

  return (  
    <div>
      <div>
        <h1>Register Page</h1>
        <Link to='/'>
          Return to Landing
        </Link>
        <br></br>
        <Link to='/recipes'>
          To Recipes
        </Link>
      </div>

      <main>
        <Input 
            name="title"
            label="Nome da receita:"
            type="text"
            value={title}
            onChange={(event) => { setTitle(event.target.value)}}
          />

        <div>
          <div>
            {ingredients.map((ing, index) => (
              <div key={index}>
                <label> Descrição:
                <input name="description" type="text" value={ing.description} onChange={event => handleChange(event, index)}/>
                </label>
                <label> Quantidade:
                <input name="quant" type="text" value={ing.quant} onChange={event => handleChange(event, index)}/>
                </label> { ' ' }
                <button onClick={e => handleDelete(index)}>Remover</button>
              </div>
            ))}
            <br />
            <br />
            <button onClick={handleAdd}>Adicionar Ingrediente</button>
          </div>
        </div>
     
         <TextArea 
            name='direction'
            label='Modo de fazer:'
            type="text"
            value={direction}
            onChange={(event) => { setDirection(event.target.value)}}
          />
          <div>
            <button onClick={handleRecipe}>
              Cadastrar receita
            </button>
          </div>
    </main>
  </div>
    
  )
}

export default Register