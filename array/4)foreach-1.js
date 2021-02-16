
const separar = () => console.log('\n _____________________________ \n')
const pokemons = ['bulbassauro','pikachu','blastoise']

pokemons.forEach(function(nome,indice,array, x){
    console.log(`${indice+1}º ${nome}`)
    console.log(`${array}`)
    console.log(`${x}`)
})
separar()

pokemons.forEach(nome => console.log(nome))
separar()

const exibirDeÁgua = pokemon => {
    if(pokemon == 'blastoise'){
        console.log(pokemon)
    }
}

pokemons.forEach(exibirDeÁgua)
separar()
