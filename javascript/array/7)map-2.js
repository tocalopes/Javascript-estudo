const carrinho = [
    '{"nome" : "Borracha","preco" : 3.45}',
    '{"nome" : "Fodase","preco" : 5.45}',
    '{"nome" : "Cachaça","preco" : 36.95}',
    '{"nome" : "dorgas","preco" : 1.99}'
]

let precos = carrinho.map(e => JSON.parse(e).preco)
console.log(precos)