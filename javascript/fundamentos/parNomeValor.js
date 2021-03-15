//par nome/valor
const saudacao = 'Opa' // context léxico 1

function exec (){
    const saudacao = 'Falaaaaa' //contexto léxico 1
    return saudacao
}


const cliente = {
    nome : 'Pedro',
    idade: 32,
    endereco: {
        nome: 'fodase',
        numero : 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)