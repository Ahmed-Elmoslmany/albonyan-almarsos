
const express = require('express')
const app = express()
app.use('/add-user', (req,res,next) => {
  res.send("<h1> hello </h1>")
})

app.use('/', (req,res,next) => {
  res.send("<h1> hello </h1>")
  next()
})

app.use((req,res,next) => {
  console.log("Hey");
})

app.use((req,res,next) => {
  console.log("Hey2");
})



app.listen(3000)