const obj1 = {}
obj1.nome = 'bola'
obj1['preco'] = 'teste'

console.log(obj1)
console.log(obj1.nome)
console.log(obj1.preco)

function Obj(nome) { //this deixa a dunção pública
    this.nome = nome
    this.exec = function (){
        console.log('oloco')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('chablau')
console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()