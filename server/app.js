require('dotenv').config()
const cors = require('cors')
const express = require('express');
const path = require('path')
const PORT = process.env.PORT
const DATABASE = process.env.DATABASE
const app = express();
const mongoose = require('mongoose')
const articleRoutes = require('./routes/articles')
const articleSectionRoutes = require('./routes/articleSections.js')


app.use(express.json())
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));



app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})



app.use('/admin/articles',articleRoutes)
app.use('/admin/articleSections', articleSectionRoutes)


mongoose.connect(DATABASE)
  .then(()=> {
    app.listen(PORT,()=>{
      console.log(`Connected to database, listening on port: ${PORT}`)
    })
  })
  .catch((err) => {
    console.error(err)
  })


