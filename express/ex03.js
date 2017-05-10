const express = require('express')
const server = express()

server.get('/api', function(req, res, next) {
  console.log('Inicio...')
  next()
  console.log('Fim...')
  //res.send('<h1>Teste</h1>')
})

server.get('/api', function(req, res) {
  console.log('Resposta...')
  res.send('<h1>API</h1>')
})

server.listen(3000, () => console.log('Executando...'))
