//minha implementação
const pokemons = ['bulbassauro','pikachu','blastoise']

Object.defineProperty(pokemons,'newForEach',{
    value : function(f){
        for(i in pokemons){
            f(pokemons[i])
        }
    }
})

pokemons.newForEach(pokemon => console.log(pokemon))

//implementação coder
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i],i,this)
    }
}

pokemons.forEach2(pokemon => console.log('foreach2: ' + pokemon))
