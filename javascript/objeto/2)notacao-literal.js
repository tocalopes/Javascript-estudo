const [a,b,c] = [1,2,3]

const obj1 = {
    acarai:a,
    bcarai:b,
    c:c
}

const obj2 = {a,b,c}
console.log(obj1)
console.log(obj2)

const nomeAtributo = 'nota'
const valorAtributo = 9.99

const obj3 = {

}

obj3[nomeAtributo] = valorAtributo
console.log(obj3)

const obj4 = {
    [nomeAtributo] : valorAtributo
}
console.log(obj4)

const obj5 = {
    funcao(){
        console.log('isso é uma função')
    },
    funcao2 : function(){
        console.log('isso também é uma função')
    }

}

obj5.funcao()
obj5.funcao2()