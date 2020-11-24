import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/landingPage/landing'
import Register from './pages/registerPage/register'
import Recipes from  './pages/recipePage/recipes'

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Landing} exact />
        <Route path='/register' component={Register}/>
        <Route path='/recipes' component={Recipes}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes