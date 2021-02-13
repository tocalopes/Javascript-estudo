const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 45
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(
    ([chave,valor]) => console.log(`${chave} : ${valor}`)
)

Object.defineProperty(pessoa,'dataNascimento',{
    enumerable: true,
    writable: false,
    value: '03/07/1997'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa)

//Object.assign(ECMASCRIPT 2015)
const destino = {
    a: 1
}
const o1 = {
    b: 2
}

const o2 = {
    c: 3,
    a: 4
}

const obj = Object.assign(destino,o1,o2)
console.log(obj)

Object.freeze(obj)
obj.c = 123
console.log(obj)