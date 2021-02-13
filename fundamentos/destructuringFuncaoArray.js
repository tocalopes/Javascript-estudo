function rand([min = 0, max = 1000]){
    if (min > max) [min,max] [max,min] //inverte valores
    const result = Math.random() * (max - min) + min
    return Math.ceil(result)
}

console.log(rand([50,40]))
console.log(rand([992]))
console.log(rand([,10]))