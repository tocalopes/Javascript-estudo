const alunos = [
    { nome : "joão", nota : 7.9},
    { nome : "maria", nota : 4.5}
]

//imperativo
let total = 0
for(let i = 0; i < alunos.length; i++){
    total += alunos[i].nota
}
console.log(total / alunos.length)

//Declarativo
const getNota = aluno => aluno.nota
const soma = (acumulador,notaAtual) => acumulador + notaAtual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)
