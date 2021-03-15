const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const { default: axios } = require('axios')
const axio = require('axios')

axios.get(url).then((response) => {
    const funcionarios = response.data
    console.log(funcionarios)
})