const alunos = [
    {nome : 'Fodase', nota : 7.3, bolsita: true},
    {nome : 'Gabriel', nota : 5.3, bolsita: false},
    {nome : 'pedro', nota : 8.3, bolsita: true},
    {nome : 'ana', nota : 4.3, bolsita: false},
]

let todosBolsistas = alunos.map(e => e.bolsita).reduce((acumulador,valor) => acumulador && valor,true)
let algumBolsista = alunos.map(e => e.bolsita).reduce((acumulador,valor) => acumulador || valor,false)
console.log('todos os alunos são bolsistas: ' + todosBolsistas + ' \n algum é bolsista :' + algumBolsista)
