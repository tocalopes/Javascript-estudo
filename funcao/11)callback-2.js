const notas = [ 
    7.7,
    6.5,
    5.5,
    8.9,
    3.6,
    7.1
]

let notasBaixas = []
for (let i in notas){
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)
notasBaixas = notas.filter(nota => nota <  5)

console.log(notasBaixas)