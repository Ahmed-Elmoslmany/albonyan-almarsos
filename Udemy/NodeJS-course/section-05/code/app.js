const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
app.use(bodyParser.urlencoded({extended: false}))

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

app.use('/admin',adminRouter)
app.use('/shop' ,shopRouter)


const server = http.createServer(app);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, './', 'views', 'error.html'))
  
})

server.listen(3000)