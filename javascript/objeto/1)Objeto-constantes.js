const pessoa = {
    nome : 'João'
}
pessoa.nome = 'Pedro'
console.log(pessoa)
//Object.freeze(pessoa) //mantem o objeto constante

pessoa.nome = 'Maria'
pessoa.end = 'rua fodase'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({
    nome : 'Fodase'
})

pessoaConstante.nome = 'Chablau'
console.log(pessoaConstante)