//Closure é o escopo cirado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas à função


//Context léxico em ação!

const x = 'Global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())