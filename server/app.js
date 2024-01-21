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
const videoRoutes = require('./routes/videos')
const commentsRoutes = require('./routes/comments')
const reviewRoutes = require('./routes/reviews.js')
const {notFound, errorHandler} = require('./middleware/errorMiddleware.js')
const cookieParser = require('cookie-parser')

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));


app.use(cookieParser())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})



app.use('/users', userRoutes)
app.use('/admin/articles', articleRoutes)
app.use('/admin/articleSections', articleSectionRoutes)
app.use('/admin/videos', videoRoutes)
app.use('/comments', commentsRoutes)
app.use('/reviews', reviewRoutes)



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


app.use(notFound);
app.use(errorHandler);



mongoose.connect(DATABASE)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to database, listening on port: ${PORT}`)
    })
  })
  .catch((err) => {
    console.error(err)
  })


 


