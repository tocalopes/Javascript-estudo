const fs = require('fs')

function lerArquivo(path) {
    return (new Promise((resolve, reject) => {

        fs.readFile(__dirname + path
            , { encoding: 'utf-8' }
            , (err, content) => {
                resolve(content.toString())
                reject(err)
            }
        )

    }))
}

lerArquivo('/dados.txts')
    .then(console.log)