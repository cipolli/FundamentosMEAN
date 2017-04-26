const express = require('express')
const server = express()

//os paramentros de da funcão dentro de server pode
// ser escrito de com qualquer nome
server.get('/', function(req, resp) {
  resp.send('<h1>Index?</h1>')
})

server.all('/teste', function(req, res) {
    res.send('<h1>teste!</h1>')
})

//server com Arrow function
server.get(/api/, (req, res) => res.send('<h1>API!</h1>'))

server.listen(3000, () => console.log('Executando esta bodega'))
