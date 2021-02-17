const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const { default: axios } = require('axios')
const axio = require('axios')
//minha versão
axios.get(url).then((response) => {
    const funcionarios = response.data
    const mulher = func => func.genero === 'F'
    const chinesa = func => func.pais === 'China'

    const mulheresChinesas = funcionarios.filter(mulher).filter(chinesa)
    const primeira = mulheresChinesas.sort((a,b) => {
        if(a.salario < b.salario){
            return -1
        }

        if(a.salario > b.salario){
            return 1
        }
        return 0
    })
    const mulherChinesaMenosSalario = mulheresChinesas[0]

    const menorSalario = (func,funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }

    const cod3rRes = mulheresChinesas.reduce(menorSalario)
    console.log(mulherChinesaMenosSalario)
    console.log('cod3r')
    console.log(cod3rRes)

})