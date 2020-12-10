import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import TextArea from '../../component/FormItens/TextArea/textArea'
import PageDefault from '../../component/PageDefault/pageDefault'
import Home from '../../assets/images/home.svg'

import './style.css'

import config from '../../config/index'

const URL_RECIPES = `${config}/recipes`

function Register() {

  const history = useHistory()

  const id = Date.now().toString()

  const [ title, setTitle ] = useState('')
  const [ image, setImage ] = useState('')
  const [ direction, setDirection ] = useState('')

  const valueBase = {description: '', quant: ''};
  const [ingredients, setIngredients] = useState([{...valueBase}]);

  const [ recipes, setRecipes ] = useState([])

  const handleAdd = () => {
    setIngredients(state => [...state, {...valueBase}]);
  }

  const handleChange = (event, index) => {
    const {name, value} = event.target;
    let values = [...ingredients];
    values[index][name] = value.toLowerCase();
    setIngredients(state => [...values]);
  }

  function handleRecipe(){

    let newRecipe = {id, title, image, ingredients, direction}

    fetch(`${URL_RECIPES}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newRecipe)
    })

    let recipeCreated = [newRecipe]

    history.push({
      pathname: '/recipes',
      state: { detail: recipeCreated }
    })
  }

  useEffect(() => {
    fetch(`${URL_RECIPES}`)
      .then(async (response) => {
        const recipesReturned =  await response.json()
        setRecipes(
          recipesReturned
        )
      })   
  }, [])

  return (  
    <PageDefault title="Cadastrar Receita">

        <div className="return-icon">
          <Link to='/'>
            <img src={ Home } alt="Return to Home"/>
            Home
          </Link>
        </div>

      <div className="register-container">
        <main>
          <label> Nome da Receita:
            <input 
                name="title"
                type="text"
                value={title}
                onChange={(event) => { setTitle(event.target.value)}}
              />
          </label>
          <label> Imagem:
            <input 
                name="image"
                type="text"
                value={image}
                onChange={(event) => { setImage(event.target.value)}}
              />
          </label>

          <div>
              {ingredients.map((ing, index) => (
                <div key={index} className="ingredient-div">
                  <label> Ingrediente:
                  <input 
                    id="ingredient"
                    name="description" 
                    type="text" 
                    value={ing.description} 
                    onChange={event => handleChange(event, index)}
                  />
                  </label>
                  <label id="quant"> Quantidade:
                  <input 
                    name="quant" 
                    type="text" 
                    value={ing.quant} 
                    onChange={event => handleChange(event, index)}
                  />
                  </label>
                </div>
              ))}
              <button id="add-ingredient-button" onClick={handleAdd}>
                Adicionar ingrediente
                <i className="fas fa-plus-circle"></i>  
              </button>
          </div>
          <label> Modo de preparo:
            <TextArea 
              name='direction'
              type="text"
              value={direction}
              onChange={(event) => { setDirection(event.target.value)}}
            />
          </label> 
            <div>
              <button id="register-button" onClick={handleRecipe}>
                Cadastrar receita
                <i className="fas fa-clipboard-list"></i>
              </button>
            </div>
      </main>
    </div>
      
    </PageDefault>
  )
}

export default Register