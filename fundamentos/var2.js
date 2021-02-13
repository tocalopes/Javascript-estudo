//var => as variáveis são consideradas globais. Menos quando declaradas dentro do 
//escopo de funções
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)