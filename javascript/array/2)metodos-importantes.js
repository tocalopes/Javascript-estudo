const print = (conteudo) => console.log(conteudo)

const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() // massa quebrou carro
print('pop =>' + pilotos)

pilotos.push('Verstappen')
print('push =>' + pilotos)

pilotos.shift()// remove o primeiro
print('shift =>' +pilotos)

pilotos.unshift('Hamilton')
print('unshift =>' +pilotos)


//splice pode adicionar e remover intens de um array
pilotos.splice(2,0,'Bottas','Massa')
print('splice add =>' + pilotos)

//rempovendo
pilotos.splice(0,1)
print('splice remove => ' + pilotos)

//adidionando e removendo
pilotos.splice(3,1,'fodase')
print('splice removendo e adicionando =>' + pilotos)

const algunsPilotos1 = pilotos.slice(2) //pega uma parte do array
print('slice =>' + algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,3) //pega uma parte do array
print('slice do 1 ao 3 sem incluir o 3 =>' + algunsPilotos2)

