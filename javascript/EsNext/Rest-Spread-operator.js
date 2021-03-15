//Operador rest(juntar) e spread(espalhar)

//Usar spread com objeto
const cachorro = {
    raca : 'Vira-lata'
}

const heleno = {
    nome : 'Heleno',
    ...cachorro
}

console.log(cachorro)
console.log(heleno)

//Spread com aray
const array1 = [1,2,3,4]
const array2 = [...array1,5,6,7,8]
console.log(array1)
console.log(array2)
