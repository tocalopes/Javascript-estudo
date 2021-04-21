const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended : false}))

app.post('/usuarios',(req,resp) => {
    console.log(req.body)
    resp.send('<p>Parabéns</p>')
})

app.post('/usuarios/:id',(req,resp) => {
    console.log(req.body)
    console.log(req.params.id)
    resp.send('<p>Parabéns Usuário alterado!</p>')
})

app.listen(3003)
