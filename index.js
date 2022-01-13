const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send("Olá Renato!")
})

app.get('/mensagem', function(req,res){
    res.send("Essa mensagem é automática!")
})
app.listen(3333, function(){
    console.log("Conexão iniciada...")
})
