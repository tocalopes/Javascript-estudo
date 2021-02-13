let valor
console.log (valor)

valor = null //Não aponta pra nenhum endereço de memória
let valor2

console.log(valor) //Undefined significa que o valor não foi inicializado
console.log(valor2)

const produto = {

}

console.log(produto.preco) //undefined
//console.log(produto.preco.a)  => erro

produto.preco = undefined // Não fazer
console.log(produto.preco)
delete produto.preco
console.log(produto)