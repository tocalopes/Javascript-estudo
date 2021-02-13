function printNome ({nome} = obj) {
    console.log(nome)
}

const obj = {
    nome : 'Gabriel',
    idade : 23
}

printNome(obj)
console.log(Math.random())

function rand ({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const random = {
    min : 955,
    max : 50
}

console.log(rand(random))