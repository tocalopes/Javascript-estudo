const porta = 3003
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./db')

app.use(bodyParser.urlencoded({
    extended : true
}))

app.get('/produtos', (req,res,next) => {
    console.log('Middleware 1...')
    next()
})

app.get('/produtos',(req,res,next) => {
    res.send(db.getProducts())//converte para json
})

app.get('/produtos/:id',(req,res,next) => {
    res.send(db.getProduct(req.params.id))//converte para json
})

app.post('/produtos',(req,res,next) => {
    console.log(req.body)
    const product = db.saveProduct({
        nome : req.body.nome,
        preco: req.body.preco
    })
    res.send(product)
})

app.put('/produtos/:id',(req,res,next) => {
    const product = db.saveProduct({
        id:req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(product)
})

app.delete('/produtos/:id',(req,res,next) => {
    const product = db.deleteProduct(req.params.id)
    res.send(product)
})
app.listen(porta,() => {
    console.log(`Servidor executando na porta ${porta}`)
})