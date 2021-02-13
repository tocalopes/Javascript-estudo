let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis (global)
const obj = {

}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports) //trata-se do modulo do node, o próprio arquivo
console.log(module.exports)
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj) //bind não funciona com arrow Funtion
comparaComThisArrow(obj) 
comparaComThisArrow(module.exports) 