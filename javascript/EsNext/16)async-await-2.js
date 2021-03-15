function delay(tempo = 1000){
    return new Promise((resolve) => {
       setTimeout(() => {
           resolve('exec')
       },tempo)
    })
}

async function retornaValor(){
    return new Promise((resolve) => {
       setTimeout(() => resolve(10),5000)
    })
}
async function executar(){
    let asyncValue = await retornaValor()
    await delay()
    console.log(`dalay... ${asyncValue}`)

    await delay()
    console.log(`dalay... ${asyncValue}`)

    await delay()
    console.log(`dalay... ${asyncValue}`)
}

executar()