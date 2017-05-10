const express = require('express')
const server = express()

server.route('/clientes')
  .get((req, res) => res.send('listar'))
  .

server.listen(3000, () => console.log('Executando esta bodega'))
