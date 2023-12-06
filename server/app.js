require('dotenv').config()
const express = require('express');
const PORT = process.env.PORT
const DATABASE = process.env.DATABASE
const app = express();
const mongoose = require('mongoose')
const articleRoutes = require('./routes/articles')


app.use(express.json())


app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})



app.use('/admin/articles',articleRoutes)


mongoose.connect(DATABASE)
  .then(()=> {
    app.listen(PORT,()=>{
      console.log(`Connected to database, listening on port: ${PORT}`)
    })
  })
  .catch((err) => {
    console.error(err)
  })


