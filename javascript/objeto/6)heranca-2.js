//Cadeida de protótipos (prototype chain)
Object.prototype.atributo0 = '0'

const avo = {
    atributo1: 'A'
}

const pai = {
    __proto__ : avo,
    atributo2 : 'B'
}

const filho = {
    __proto__:pai,
    atributo3 : 'C'
}

console.log(Object.keys(filho))
console.log(filho.atributo1)
console.log(filho.atributo2)
console.log(filho.atributo0)
console.log(filho.atributo20)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual} km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowin
}

const volvo = {
    modelo: 'v40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)
console.log(carro.status())
console.log(ferrari.status())
console.log(volvo.status())
