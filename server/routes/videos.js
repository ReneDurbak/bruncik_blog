const express = require('express')
const {
    getAllVideos,
    updateVideo,
    deleteVideo,
    createVideo,
    getVideo
} = require('../controllers/videoController')

const router = express.Router()


router.get('/getAllVideos', getAllVideos)
router.get('/getVideo/:id', getVideo)
router.post('/postVideo', createVideo)
router.patch('/patchVideo/:id', updateVideo)
router.delete('/deleteVideo/:id', deleteVideo)

module.exports = router