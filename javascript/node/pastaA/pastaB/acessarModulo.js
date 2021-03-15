const modulaA = require('../../moduleA')
const modulaB = require('/home/lopes/www/javascript-estudo/node/moduleB.js') //num é bom não
console.log(modulaA.ola)
console.log(modulaB.bomDia)

const c = require('./pastaC')
console.log(c.ola2)
const http = require('http') //core
http.createServer((req,res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080)
