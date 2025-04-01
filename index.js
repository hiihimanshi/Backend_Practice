require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.port

app.get('/', (req,res) => {
    res.send('Hello world')
})
app.get('/x',(req,res) => {
    res.send('hiihimanshi')
})
app.get('/signin',(req,res) => {
    res.send('Enter your email')
})
app.listen(port,() => {
    console.log(`app listening on port ${port}`)
})