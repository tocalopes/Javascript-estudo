const fabricantes = [
    "mercedes","fodase","fusca"
]

function imprimir(nome,indice){
    console.log(`${indice + 1}.${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach((fabricante,indice,teste1,teste2) => console.log(`${fabricante} indice: ${indice} teste ${teste1} teste2 ${teste2}`))
