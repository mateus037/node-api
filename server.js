const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const dotenv = require('dotenv')
dotenv.config()

const { DB_HOST, DB_PORT, DB_NAME } = process.env
const {SERVER_PORT} = process.env

const HOST = '0.0.0.0';

// Iniciando o App
const app = express()
app.use(express.json())
app.use(cors())

// Iniciando o DB
mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
requireDir('./src/models')

// Rotas
app.use('/api', require('./src/routes'))

app.listen(SERVER_PORT, HOST)