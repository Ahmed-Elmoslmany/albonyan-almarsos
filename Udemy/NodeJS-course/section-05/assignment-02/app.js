const http = require('http')
const express = require('express')
const dirPath = require('path')
const app = express()

app.use('/user', (req,res,next) => {
  res.sendFile(dirPath, 'views', 'user.html')
})

app.use('/', (req,res,next) => {
  res.sendFile(dirPath, 'views', 'index.html')
})
const server = http.createServer(app)

server.listen(3000)