const express = require('express')
const fs = require('fs')
const electronics = require('./roles(Electronics)2.json')
const chem_mech = require('./roles(Chemical,-Mechanical)2.json')
const Fin_Man = require('./roles(Finance-and-Management)2.json')
const Healthcare = require('./roles(Healthcare)2.json')
const IT = require('./roles(IT)2.json')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/electronics',(req,res)=>{
    res.send(electronics)
})

app.get('/chemical-mechanical',(req,res)=>{
    res.send(chem_mech)
})

app.get('/finance_and_management',(req,res)=>{
    res.send(Fin_Man)
})

app.get('/healthcare',(req,res)=>{
    res.send(Healthcare)
})

app.get('/IT',(req,res)=>{
    res.send(IT)
})

app.listen(port, ()=>{
    console.log('server is running on port '+port)
})