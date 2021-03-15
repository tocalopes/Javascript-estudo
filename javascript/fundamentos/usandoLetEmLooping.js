const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(() => { 
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
funcs[12]() //Porquê deu erro? porque undefined is not a function MANNN