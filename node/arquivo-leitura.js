const fs = require('fs')
const caminho =__dirname + '/arquivo.json'
const caminho2 =__dirname + '/arquivo-insert-test.txt'

//sincrono..
const conteudo = fs.readFileSync(caminho,'utf-8')
console.log(conteudo)
const insert = fs.readFileSync(caminho2,'utf-8')
console.log(insert)
const linhaInsert = insert.split('\n')
console.log(linhaInsert)

//assincrono
fs.readFile(caminho, 'utf-8',(err,conteudo)=> {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname,(err,arquivos) => {
    console.log('Conteúdo da pasta..')
    console.log(arquivos)
})