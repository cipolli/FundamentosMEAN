function temParam(param) {
  return process.argv.indexOf(param) !== -1
}

if(temParam('--producao')){
  console.log('se liga ai maluco!!!')
}else {
  console.log('Ta tranquilo... Ta favoravel')
}
