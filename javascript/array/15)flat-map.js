const escola = [{
    nome: 'turma 1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    },
    {
        nome: 'ana',
        nota: 9.5
    }]
},
{
    nome: 'turma 2',
    alunos: [{
        nome: 'Jamal',
        nota: 6.1
    },
    {
        nome: 'chablin',
        nota: 5.5
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log([].concat(notas1))

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)
