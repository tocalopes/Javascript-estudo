//Estrutura não indexada que não aceita repetição
const pokemons = new Set()
pokemons.add('pikachu').add('charmander').add('bulbassauro')

console.log(pokemons)
console.log(pokemons.has('pikachu'))
console.log(pokemons.size)
pokemons.delete('charmander')
console.log(pokemons.has('charmander'))

const nome = ['gabriel','gabriel','lucas','mouse']
const nomeSet = new Set(nome)
console.log(nomeSet)