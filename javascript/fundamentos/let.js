//Diferente de let, as variáveis podem existir dentro do seu escopo (bloco)
var numero = 1 //funciona com let
{ 
    let numero  = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

let fodase = 'fodase'
{
    console.log(fodase)
}

