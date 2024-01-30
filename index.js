const express = require('express')
const fs = require('fs')
const electronics = require('./roles(Electronics)2.json')
const chem_mech = require('./roles(Chemical,-Mechanical)2.json')
const Fin_Man = require('./roles(Finance-and-Management)2.json')
const Healthcare = require('./roles(Healthcare)2.json')
const IT = require('./roles(IT)2.json')
const search = require('./search')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/electronics',(req,res)=>{
    if(!req.query.city){
        return res.send(electronics)
    }
    const city = req.query.city
    const capCity = city.charAt(0).toUpperCase() + city.slice(1)
    res.send(search(capCity, "roles(Electronics).json"))

})

app.get('/chemical-mechanical',(req,res)=>{
    if(!req.query.city){
        return res.send(chem_mech)
    }
    const city = req.query.city
    const capCity = city.charAt(0).toUpperCase() + city.slice(1)
    res.send(search(capCity, "roles(Chemical,-Mechanical).json"))
})

app.get('/finance_and_management',(req,res)=>{
    if(!req.query.city){
        return res.send(Fin_Man)
    }
    const city = req.query.city
    const capCity = city.charAt(0).toUpperCase() + city.slice(1)
    res.send(search(capCity, "roles(Finance-and-Management).json"))
})

app.get('/healthcare',(req,res)=>{
    if(!req.query.city){
        return res.send(Healthcare)
    }
    const city = req.query.city
    const capCity = city.charAt(0).toUpperCase() + city.slice(1)
    res.send(search(capCity, "roles(healthcare).json"))
})

app.get('/IT',(req,res)=>{
    if(!req.query.city){
        return res.send(IT)
    }
    const city = req.query.city
    const capCity = city.charAt(0).toUpperCase() + city.slice(1)
    res.send(search(capCity, "roles(IT).json"))
}) 

app.listen(port, ()=>{
    console.log('server is running on port '+port)
})

