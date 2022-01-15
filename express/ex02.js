const express = require('express')
const server = express()

<<<<<<< HEAD
server.get('/', (req, res, next) => {
  console.log('inicio');
  next()
  console.log('fim ');
} )

server.get('/', function(req, res) {
  console.log('meio');
  res.send('<h1>Olá Express</h1>')
})

server.listen(3000, () => console.log('Executando esta bodega'))
=======
server.get('/', function(req, res, next) {
  console.log('Inicio...')
  next()
  console.log('Fim...')
  res.send('<h1>Teste</h1>')
})

server.get('/', function(req, res) {
  console.log('Resposta...')
  res.send('<h1>Olá Express!</h1>')
})

server.listen(3000, () => console.log('Executando...'))
>>>>>>> origin/master
