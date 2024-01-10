require('dotenv').config()
const cors = require('cors')
const express = require('express');
const router = express.Router()
const path = require('path')
const PORT = process.env.PORT
const DATABASE = process.env.DATABASE
const app = express();
const mongoose = require('mongoose')
const articleRoutes = require('./routes/articles')
const articleSectionRoutes = require('./routes/articleSections.js')
const AdminCredentialsModel = require('./models/adminCredentialsModel')
const userRoutes = require('./routes/userRoutes.js')

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));


app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})





app.use('/api/users', userRoutes)
app.use('/admin/articles', articleRoutes)
app.use('/admin/articleSections', articleSectionRoutes)



mongoose.connect(DATABASE)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to database, listening on port: ${PORT}`)
    })
  })
  .catch((err) => {
    console.error(err)
  })


  app.get('/getAdminCredentials', async(req, res)=>{

    try {
      const adminCredentials = await AdminCredentialsModel.find({}).sort({createdAt: -1})
  
      res.status(200).json(adminCredentials)
    } catch (err) {
      res.status(400).json({error: err.message})
    }
  })
  
  
  app.post('/postAdminCredentials', async(req, res)=>{
  
    const {password, username} = req.body
  
    try {
      const adminCredentials = await AdminCredentialsModel.create({password, username})
  
      res.status(200).json(adminCredentials)
    } catch (err) {
      res.status(400).json({error: err.message})
    }
  })
  


