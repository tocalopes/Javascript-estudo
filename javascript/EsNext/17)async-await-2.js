function gerarNumero(min,max,repetidos){
    
    if(min > max){
        [max,min] = [min,max]
    }

    return new Promise((resolve,reject) => {
        const num = parseInt(Math.random() * (max - min + 1) + 1)
        
        if(repetidos.includes(num)){
            reject('Número repetido')
        }else{
            resolve(num)
        }
    })
}

async function gerarMegaSena(qtdNumeros,tentativas = 1){
    
    try{
        const numeros = []
        for(let _ of Array(qtdNumeros).fill()){
            numeros.push(await gerarNumero(1,60,numeros))
        }
        return numeros
    }
    catch(e){
        if(tentativas >= 1000){
            throw('deu ruim')
        }else{
            gerarMegaSena(qtdNumeros,tentativas + 1)
        }
    }
    
}

gerarMegaSena(25)
        .then(console.log)
        .catch(console.log)