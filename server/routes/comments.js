const {
    getAllComments,
    postComment,
    deleteComment,
    patchComment
} = require('../controllers/commentsController')

const express = require('express')
const router = express.Router()

router.get('/getAllComments', getAllComments)
router.post('/postComment', postComment)
router.delete('/deleteComment/:id', deleteComment)
router.patch('/patchComment/:id', patchComment)


module.exports = router
