function gerarMegaSena(min,max) {
    if(min > max){
        [min,max] = [max,min]
    }
    return new Promise((resolve) => {
        const random = parseInt(Math.random() * (max - min + 1))
        resolve(random)
    })
}

gerarMegaSena(10,12)
    .then(console.log)