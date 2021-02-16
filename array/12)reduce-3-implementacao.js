Array.prototype.recude2 = function (callback,acumulador){
    let i = 0
    if(acumulador === undefined || acumulador ===null){
        acumulador = this[0]
        console.log('teste')
        i = 1
    }
    for(i; i < this.length; i ++){
        acumulador = callback(acumulador,this[i], i, this)
    }
    return acumulador
}

const soma = (total,valor) => total + valor
const nums = [1,2,3,4,5,6]
console.log(nums.recude2(soma,0))