const { promises } = require('fs')
const http = require('http')
const { templateSettings } = require('lodash')


const getTurma = (turma) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${turma}.json`
    return new Promise((resolve,reject) =>{
        http.get(url,res => {
            let resultado = ''
    
            res.on('data',dados => {
                resultado += dados
            })
    
            res.on('end',() => {
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })
        })
    })
}

let nomes = []


let nomesComPromise = []

Promise.all([getTurma('A'),getTurma('B'),getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))

getTurma('D').catch(e => console.log(e))

