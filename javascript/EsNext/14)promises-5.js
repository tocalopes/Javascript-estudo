function gerarNumeroEntre(min,max,tempo) {
    if(min > max){
        [min,max] = [max,min]
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            const random = parseInt(Math.random() * (max - min + 1))
        resolve(random)    
        },tempo)  
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumeroEntre(1,60,1000),
        gerarNumeroEntre(1,60,500),
        gerarNumeroEntre(1,60,2000),
        gerarNumeroEntre(1,60,1500),
    ])
}

gerarVariosNumeros().then(numeros => console.log(numeros))
