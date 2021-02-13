const escola = "Xablauzão"

console.log(escola.charAt(1))
console.log(escola.charCodeAt(1)) // Código na tabela ascii
console.log(escola.indexOf('a')) //retorna o indice da primeira letra encontrada
console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace('a','$'))
console.log(escola.replace(/\w/g,'12')) //rejex expressões regulares
console.log('Ana,maria,pedro'.split(','))
console.log(3 + '2')