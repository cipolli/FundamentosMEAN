const express = require('express')
const server = express()

server.route('/clientes')
  .get((req, res) => res.send('<h1>Lista Cliente</h1>'))
  .post((req, res) => res.send('Novo'))
  .put((req, res) => res.send('Altera'))
  .delete((req, res) => res.send('Apaga'))

server.listen(3000, () => console.log('Executando...'))
