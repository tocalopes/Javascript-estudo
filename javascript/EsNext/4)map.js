const tecnologias = new Map()
tecnologias.set('react', {framework : false})
tecnologias.set('angular',{framework : true})
console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [123,'numero'],
    [{}, 'Objeto'],
    [function(){},'Função']
])

chavesVariadas.forEach((key,value) => {
    console.log(`key : ${key} || value : ${value}`)
})

console.log(chavesVariadas.has(123))
console.log(chavesVariadas.delete(123))
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)
