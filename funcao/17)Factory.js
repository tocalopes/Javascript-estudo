//Factory Simples
function criarPessoa(){
    return {
        nome:'Ana',
        sobrenome : 'Silva'
    }
}

//Factory Simples
function criarProduto(nome = 'prod', preco = 0.0, desconto = 0){
    return {
        nome,
        preco : preco - (desconto * preco)
    }
}

console.log(criarPessoa())
console.log(criarProduto('coca',10))
console.log(criarProduto())