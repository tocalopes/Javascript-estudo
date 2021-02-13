//primeira forma
function Pessoa() {
    this.idade = 0
    const context = this
    setInterval(function () {
        context.idade++
        console.log('pessoa:' + context.idade + ' intervalo: ' + Date.now())
    }, 1000)
}

new Pessoa

function Cachorro() {
    this.idade = 0
    setInterval(function () {
        this.idade++
        console.log('cachorro:' +this.idade + ' intervalo: ' + Date.now())
    }.bind(this), 1000)
}

new Cachorro