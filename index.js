const express = require('express')
const bodyparser = require('body-parser')
const connectdb = require('./db/db')
const studentRoute = require('./route/studentRoute')
require('dotenv').config()

const app = express()
const port = process.env.PORT
connectdb()

app.use(bodyparser.json())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(studentRoute)



app.listen(port, () => {
    console.log(`server started sucessfully . click http://localhost:${port} to open website`)
})