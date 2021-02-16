const moduloA = require ('./moduleA.js')
const moduloB = require ('./moduleB')

console.log(`
    modulo A : ${moduloA.ola} e ${moduloA.bemVindo} e ${moduloA.ateLogo} 
    objeto inteiro A => ${moduloA}
    \n\n
    modula B : ${moduloB.bomDia} e ${moduloB.boaNoite()}
    objeto inteiro B => ${moduloB}
`)