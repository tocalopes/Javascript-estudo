// setTimeout(() => {
//     console.log('Execuntando depois de 1s')
//     setTimeout(() => {
//         console.log('Executando novamento depois de 1s')
//         setTimeout(() => {
//             console.log('Executando novamento de novo depois de 1s')
//         },1000)
//     },1000)
// },1000)

const esperarPor = (tempo = 2000) => {
    return new Promise((resolve) => {
        console.log('executando promise')
        setTimeout(() => resolve(), tempo)
    })
}

esperarPor(1000)
    .then(esperarPor(1000))
    .then(esperarPor(1000))