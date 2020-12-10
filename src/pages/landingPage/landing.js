import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import config from '../../config/index'

import Input from '../../component/FormItens/Input/input'
import PageDefault from '../../component/PageDefault/pageDefault'

import landingImage from '../../assets/images/donut-guy.svg'

import './style.css'

const URL_RECIPES = `${config}/recipes`

function Landing() {

  const history = useHistory()
  
  const [ ingredient, setIngredient ] = useState('')

  async function getAllRecipesByIngredient(ingredient) {

    const serverResponse = await fetch(`${URL_RECIPES}`)

    const recipesReturned =  await serverResponse.json()

    let recipesArray = []
    
    for(let i in recipesReturned){
      for(let j in recipesReturned[i].ingredients){
        if(recipesReturned[i].ingredients[j].description === ingredient.toLowerCase()){
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

    if(ingredient === ""){
      
    } else {
      getAllRecipesByIngredient(ingredient)
    }
  }

  return (
    <PageDefault title="Meu Doce">
    
      <img src={ landingImage } alt="Donut-Guy" id="logo"/>
      <div className="form-div">
        <form onSubmit={handleSubmit}>
          <Input
            type="text" 
            name="ingredient"
            value={ingredient} 
            onChange={(event) => { setIngredient(event.target.value) }} 
            placeholder="Digite o ingrediente"
            />
            <div className="button-div">
              <button type="submit" id="recipe-button">
                <i className="fas fa-search"></i>
                Pesquisar receita
              </button>
              <button id="register-button">
                <i className="fas fa-clipboard-list"></i>
                <Link to='/register'>
                    Cadastrar receita
                </Link>
              </button>
            </div>
        </form>
      </div>
      <footer>
        <span>
          Made by Gabriel Moura
          <a href="linkedin.com/in/gabriel-moura-b45b90150/" target='_blank' rel="noreferrer">
            <i className="fab fa-linkedin" id='linkedin'></i> 
          </a>
          <a href="https://github.com/GCMoura" target='_blank' rel="noreferrer">
            <i className="fab fa-github" id='github'> </i> 
          </a>
        </span>
      </footer>
   
    </PageDefault>
    )

}

export default Landing