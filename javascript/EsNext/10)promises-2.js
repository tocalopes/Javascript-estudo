const quemEGabriel = new Promise(
    (resolve) => {
        resolve({
            nome : 'Adamastor',
            idade : '23',
            peso: 90
        })
    }
)

const getNome = (obj) => obj.nome
const turnFemale = function (nome) {
    if(nome.charAt(nome.length-1).toLowerCase() == 'o'){
        return nome.substr(0,nome.length - 2).concat('ana')
    }else{
        return nome.concat('a')
    }
}
quemEGabriel
    .then(getNome)
    .then(turnFemale)
    .then(console.log)