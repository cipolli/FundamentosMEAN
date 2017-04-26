process.stdout.write('Esta tomando no cú?')
process.stdin.on('data', function(data) {
    process.stdout.write(`Sua resposta foi ${data.toString()} Obrigado!\n`)
    process.exit()
})
