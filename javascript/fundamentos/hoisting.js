//Hoisting é o efeito de issaamento. Toda variável declara é jogada 'pra cima' no códio
//sendo sua instanciação/declaração executada antes do programa
console.log('a = ', a)
var a = 2
console.log('a = ', a)

function teste() {
    console.log('a = ', b)
    var b = 2
    console.log('a = ', b)
}

teste()