const express = require('express')
const server = express()
const router = express.Router()
const fs = require('fs')

server.use(express.json({extend: true}))

const readFile = () => {
  const content = fs.readFileSync('./data/recipe.json', 'utf-8') //lendo o arquivo json
  return JSON.parse(content) //lendo o arquvio json e mostrando
}

const writeFile = (content) => {
  const updateFile = JSON.stringify(content)
  fs.writeFileSync('./data/recipe.json', updateFile, 'utf-8')
}

const returnRecipe = (search) => {
  const content = readFile()

  for(let i = 0; i < content.length; i++){
    for(let j = 0; j < content[i].ingredientsArray.length; j++){
      if(content[i].ingredientsArray[j].includes(search)){
        return content[i]
      }
    }
  }
}

router.get('/recipes', (req, res) => {
  const { search } = req.body

  const recipe = returnRecipe(search)

  res.send(recipe)
})

router.post('/register', (req, res) => {
  const { title, ingredients, howToMake } = req.body

  var ingredientsArray = []

  ingredientsArray.push(ingredients)

  const currentContent = readFile()

  currentContent.push({ title, ingredientsArray, howToMake })

  writeFile(currentContent)

  res.send({title, ingredients, howToMake})
})

server.use(router)

server.listen(3000, () =>{
  console.log('Servidor rodando')
})