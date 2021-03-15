function testando(frase,callback){
    frase = frase.toUpperCase()
    callback(frase)
}

testando('oloko', (frase) => console.log(frase))
