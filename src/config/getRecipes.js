import config from './index'

const URL_RECIPES = `${config}/recipes`

function getAllRecipes() {
  return fetch(URL_RECIPES)
      .then(async (response) => {
        if(response) {
          const recipe = await response.json();
          return recipe;
        }
      })
}

export default getAllRecipes