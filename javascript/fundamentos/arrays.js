const print = r => console.log(r)
const valores = [
    7.7,8.8,9.8
]

valores[10] = 10
print(valores)
print(valores.lenght)

valores.push({id : 3}, false, null, 'teste')
print(valores)

print(valores.pop())

print(valores)
delete valores[0]
print(valores)

console.log(typeof valores)