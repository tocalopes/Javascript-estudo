function real(partes,...valores){
    const resultado = []
    valores.forEach((valor,indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice],valor)
    })
    return resultado.join('')
}

const preco = 29.99
const parcela = 11
const exclamacao = '!'
console.log(real `1 x de ${preco} ou 3 x de ${parcela}${exclamacao}`)