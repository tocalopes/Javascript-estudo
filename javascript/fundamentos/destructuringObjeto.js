//novo recuroso do ES2015

const pessoa = {
    nome :'Ana',
    idade : 5,
    endereco : {
        rua : 'Iperoig',
        cep : 05016000
    }
}

//Destructuring pesso. Tira do objeto variáveis
let {nome,idade} = pessoa
console.log(nome,idade)
nome = 'Gabriel'

console.log(nome)
console.log(pessoa)

const {nome : n, idade : i} = pessoa
console.log(n,i)

const {sobrenome, bemHumorada = false} = pessoa
console.log(sobrenome,bemHumorada)

const {endereco : {rua,cep}} = pessoa
console.log(rua,cep)

const {rua : r, cep : c} = pessoa.endereco
console.log(r,c)

const {conta: { ag, num}} = pessoa
console.log(ag,num)// da merda