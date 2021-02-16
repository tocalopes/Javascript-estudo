const obj = {
    a: 1,
    b: 2,
    soma: function() {
        return a + b
    }
}

console.log(JSON.stringify(obj))
console.log(JSON.parse(
    '{"a" : 1, "b":2,"c" :3}'
))
console.log(JSON.parse('{"a" : 1.5, "b" : "String", "d" : {},"e" : []}'))