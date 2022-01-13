const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send("Olá Renato!")
})

app.listen(3333, function(){
    console.log("Conexão inicializada na porta 3333")
})
