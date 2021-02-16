//implementação filter
Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
       if(callback(this[i])){
           newArray.push(this[i])
       }
    }
    return newArray
}

const produtos = [
    {nome : 'Notebook', preco: 2499, fragil : true},
    {nome : 'Ipad pro', preco: 4199, fragil : true},
    {nome : 'Bola de futebol', preco: 15, fragil : false}
]

console.log(produtos.filter(e => e.fragil))
console.log(produtos.filter2(e => !e.fragil))


