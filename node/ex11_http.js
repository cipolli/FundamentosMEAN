const http = require('http')

const server = http.createServer(function(req,res) {
    res.writeHead(200, {"Content-type": "text/html"})
    res.end('<h1>TEXTO AQUI!!!!!!!</h1>')
})

const porta = '5555'

server.listen(porta, function() {
    console.log(`Escutando a ${porta}`);
})
