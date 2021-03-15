const alunos = [
    {nome : 'Fodase', nota : 7.3, bolsita: true},
    {nome : 'Gabriel', nota : 5.3, bolsita: false},
    {nome : 'pedro', nota : 8.3, bolsita: true},
    {nome : 'ana', nota : 4.3, bolsita: false},
]

const resultado = alunos.map(a => a.nota).reduce(function (acumulador,atual){
    console.log(`acumulador : ${acumulador} e atual: ${atual}`)
    return acumulador + atual
},0)
console.log(resultado)