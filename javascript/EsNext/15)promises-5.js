function funcionarOuNao(valor, chanceDeErro){
    return new Promise((resolve,reject) => {
        if(Math.random() < chanceDeErro){
            reject('deu merda')
        }else{
            resolve('deu bom, ta aqui teu valor :' + valor)
        }
    })
}

funcionarOuNao(12,0.8)
    .then(console.log,
        err => console.log(`erro espeficico ${err}`))
    .catch(e => console.log('erro: ' + e))