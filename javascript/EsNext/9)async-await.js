//recursos ES8
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

let obterAluno = async ()  => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta,tb,tc)
}//retorna async function


obterAluno()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))
