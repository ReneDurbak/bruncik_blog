const express = require('express')
const {
    getAllVideoGalleries,
    getVideoGallery,
    updateVideoGallery,
    deleteVideoGallery,
    createVideoGallery
} = require('../controllers/videoGalleryController.js')

const router = express.Router()



router.get('/getAllVideoGalleries', getAllVideoGalleries)
router.get('/getVideoGallery/:id', getVideoGallery)
router.patch('/updateVideoGallery/:id', updateVideoGallery)
router.delete('/deleteVideoGallery/:id', deleteVideoGallery)
router.post('/createVideoGallery', createVideoGallery)




module.exports = router