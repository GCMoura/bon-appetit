import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import PageDefault from '../../component/PageDefault/pageDefault'
import Title from '../../component/Recipe/title'
import Image from '../../component/Recipe/image'
import Ingredient from '../../component/Recipe/ingredient'
import Direction from '../../component/Recipe/direction'

import Home from '../../assets/images/home.svg'
import Register from '../../assets/images/register.svg'

import config from '../../config/index'

import './style.css'

const URL_RECIPES = `${config}/recipes`

function Recipes() {
 
  const history = useHistory()

  const recipes = history.location.state.detail
  
  return (
    <PageDefault title="Minhas Receitas">
    
      <div className="return-icon">
        <Link to='/'>
          <img src={ Home } alt="Return to Home"/>
          Home
        </Link>
      </div>
      <div className="register-icon">
        <Link to='/register'>
          <img src={ Register } alt="Go to register"/>
          Cadastrar
        </Link>
      </div>

        <div className='recipe-page'>
          { recipes.map((recipe) => {
              return(
                <div key={recipe.id} className="recipe-container">
                  <Title 
                    title={recipe.title}
                  />
                  <Image 
                    url={recipe.image}
                  />
                  <p className="label-ingredient">Ingredientes:</p>
                  <Ingredient 
                    ingredients={recipe.ingredients}
                  />
                  <p className="label-ingredient">Modo de preparo:</p>
                  <Direction 
                    direction={recipe.direction}
                  />
                </div>
              )
            })}
        </div>
    </PageDefault>
  )
}

export default Recipes