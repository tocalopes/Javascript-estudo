const pessoa = {
    saudacao : "Bom dia",
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas : Funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)//Vai chamar a função a partir do contexto de pessoa
falarDePessoa()
