//Object.preventExtensios : Impede a adição de novos atributos
const produto = Object.preventExtensions({
    nome : 'Qualquer',
    preco: 1.99,
    tag: 'Promoção'
})

console.log('Extensível:',Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao = 'fodase' //impossivel
delete produto.tag
console.log(produto)


//Onject.seal : Não da pra adicionar nem exlcuir elementos
const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa)
console.log('selado:',Object.isSealed(pessoa))
delete pessoa.nome
pessoa.nome = 'joão'
pessoa.sexo = 'masculino'
console.log(pessoa)

//OBJECT.FREEZ = selado + valores constantes
