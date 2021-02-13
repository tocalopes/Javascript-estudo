//Função é tratado como dado
//Higher-order function

//forma literal
function fun1(){

}

//armezenar em variável
const fun2 = function() {}

//em array
const array = [(a,b) => a + b,fun1,fun2]
console.log(array[0](2,3))

//armazenar em um atributo de objeto
const obj = {}
obj.falar = () => console.log('OPa')
obj.falar()

function run(fun){
    fun()
}

run(obj.falar)

//uma função pode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(1,2)(3)
