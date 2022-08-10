const porta = 3003

const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const banco = require('./banco.js')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(banco.getProdutos()) //converter to JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(banco.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = banco.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = banco.excluir(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor execuntando na porta ${porta}.`)
})