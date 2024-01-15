const express = require('express')
const {
    getAllVideos,
    updateVideo,
    deleteVideo,
    createVideo
} = require('../controllers/videoController')

const router = express.Router()


router.get('/getAllVideos', getAllVideos)
router.post('/postVideo', createVideo)
router.patch('/patchVideo/:id', updateVideo)
router.delete('/deleteVideo/:id', deleteVideo)

module.exports = router