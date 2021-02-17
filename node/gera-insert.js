const fs = require('fs')
const dir =__dirname + '/arquivo-insert-test.txt'

//sincrono..
const conteudo = fs.readFileSync(dir,'utf-8').split("\n")
console.log(conteudo)

const campos = conteudo[0].split(';').map((campo) => {
    const i = campo.indexOf('-')
    return campo.substr(0,i)
})

const tipos = conteudo[0].split(';').map((campo) => {
    const i = campo.indexOf('-')
    return campo.substr(i+1,campo.length)
})
const values = conteudo.slice(1).map((linha) => {
    return linha.split(';')
})
console.log(campos)
console.log(tipos)
console.log(values)
