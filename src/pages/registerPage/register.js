import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Input from '../../component/FormItens/input'
import TextArea from '../../component/FormItens/textArea'
import TableOfIngredients from '../../component/FormItens/table'

function Register() {

  const [ title, setTitle ] = useState('')
  const [ direction, setDirection ] = useState('')

  return (
    <div>
      <h1>Register Page</h1>
      <Link to='/'>
        Return to Landing
      </Link>
      <br></br>
      <Link to='/recipes'>
        To Recipes
      </Link>

      <main>
        <form>
          <Input 
            name="title"
            label="Nome da receita:"
            value={title}
            onChange={(event) => { setTitle(event.target.value)}}
          />

          <TableOfIngredients 
            
          />

          <TextArea 
            name='directions'
            label='Modo de fazer:'
            value={direction}
            onChange={(event) => { setDirection(event.target.value)}}
          />

        </form>
      </main>

    </div>
  )
}

export default Register