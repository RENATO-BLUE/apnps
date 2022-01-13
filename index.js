const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send("Olá Renato!")
})

app.get('/msg', function(req,res){
    res.send("Essa mensagem é automática!")
})
app.get('/layout', function(req,res){
    res.send("Esse é o novo layout!")
})


app.listen(3333, function(){
    console.log("Conexão iniciada...")
})
