const { resolve } = require("path")

function falarDepois(segundos,frase) {
    return new Promise(
        (resolve,reject) => {
            setTimeout(() => resolve(frase), segundos * 1000)
        }
    )
}

falarDepois(1,'oloko meu')
    .then(frase => frase.concat('!'))
    .then(outraFrase => console.log(outraFrase))