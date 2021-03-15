const print = conteudo => console.log(conteudo)

let isAtivo = false
print(isAtivo)

isAtivo = 1
print(!!isAtivo)

print('os verdadeiros ...')
print(!!3)
print(!!-1)
print(!!' ')
print(!!'asdash')
print(!![])
print(!!{})
print(!!Infinity)
print(!!(isAtivo = true))

print('os falsos ...')
print(!!0)
print(!!'')
print(!!null)
print(!!NaN)
print(!!undefined)
print(!!(isAtivo = false))


console.log('pra finalizar')
print(!!('' || null || 0 || ' ' || false))

let nome = ''
print(nome || 'Gabriel')

