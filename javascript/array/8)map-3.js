Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i ++){
        newArray.push(callback(this[i]))
    }
    return newArray
}


const carrinho = [
    '{"nome" : "Borracha","preco" : 3.45}',
    '{"nome" : "Fodase","preco" : 5.45}',
    '{"nome" : "Cachaça","preco" : 36.95}',
    '{"nome" : "dorgas","preco" : 1.99}'
]


let precos = carrinho.map2(e => JSON.parse(e).preco)
console.log(precos)
