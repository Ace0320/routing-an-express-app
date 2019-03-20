
const express = require('express')
const api = express.Router()

api.get('/',(req,res) =>{
    res.send('this is a default path from the group controller');
})

api.get('/hello',(req,res) =>{
    res.send('this is a hello path from the group controller');
})

module.exports = api