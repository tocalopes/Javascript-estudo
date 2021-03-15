const separador = (title) => {
    console.log(`\n ____________ ${title}___________\n`)
}

separador('let string')
for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promises']

separador('for in')
for (let i in assuntosEcma) [
    console.log(i)
]

separador('for of')
for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['map', { abordado: true }],
    ['set', { abordado: true }],
    ['primises', { abordado: false }]
])


separador('for of assuntosMap')
for (let assunto of assuntosMap) {
    console.log(assunto)
}

separador('for of assuntosMap chaves')
for (let assunto of assuntosMap.keys()) {
    console.log(assunto)
}

separador('for of assuntosMap valores')
for (let assunto of assuntosMap.values()) {
    console.log(assunto)
}

separador('for of assuntosMap entries')
for (let [chave,valor] of assuntosMap.entries()) {
    console.log(chave,valor)
}