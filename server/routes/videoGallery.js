const express = require('express')
const multer = require('multer')
const path = require('path')
const {
    getAllVideoGalleries,
    getVideoGallery,
    updateVideoGallery,
    deleteVideoGallery,
    createVideoGallery
} = require('../controllers/videoGalleryController.js')

const router = express.Router()


const storage = multer.diskStorage({
    destination: (req,file, cb) => {
      cb(null, 'public/videoGallery')
    },
    filename: (req, file, cb)=>{
      cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
      
  })
  
  const upload = multer({
    storage: storage
  })



router.get('/getAllVideoGalleries', getAllVideoGalleries)
router.get('/getVideoGallery/:id', getVideoGallery)
router.patch('/updateVideoGallery/:id', upload.single("image"), updateVideoGallery)
router.delete('/deleteVideoGallery/:id', deleteVideoGallery)
router.post('/createVideoGallery', upload.single("image") ,createVideoGallery)




module.exports = router