const porta = 3003

const express = require("express")
const app = express()

app.get('/produtos', (req, res, next) => {
    res.send({ Nome:  'notebook', Preco: 123.45, quantidade: 50 }) //converter to JSON
})

app.listen(porta, () => {
    console.log(`Servidor execuntando na porta ${porta}.`)
})