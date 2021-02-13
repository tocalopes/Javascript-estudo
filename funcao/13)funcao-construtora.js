function Carro(
    valocidadeMaxima = 200,
    delta = 5
) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= valocidadeMaxima) {
            velocidadeAtual += delta
        }
        else {
            velocidadeAtual = valocidadeMaxima
        }
    }

    this.acelerarVariasVezes = function(n) {
        for(let i=0; i < n; i++){
            this.acelerar()
        }
    }
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
uno.acelerarVariasVezes(100)
console.log(uno.getVelocidadeAtual())
console.log(typeof Carro)
console.log(typeof uno)