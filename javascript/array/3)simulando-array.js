const print = (conteudo) => console.log(conteudo)

const quaseArray = {
    0 :'Rafael',
    1 : 'Ana',
    2: 'Bia'
}

print(quaseArray)

Object.defineProperty(quaseArray,'toString',{
    value : function(){
        return Object.value(this)
    },
    enumarable : false
})

Object.defineProperty(quaseArray,'push',{
    value : function(valor){
        let lastKey;
        for (key in Object.keys(quaseArray)){
            lastKey = parseInt(key,10) + 1
        }
        Object.defineProperty(quaseArray,`${lastKey}`,{
            value: valor,
            enumerable: true     
        })
        
    }
})


quaseArray.push('teste')
print(quaseArray)


