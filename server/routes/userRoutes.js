const authUser =  require('../controllers/userController.js')
const express = require('express')
const router = express.Router()

router.post('/auth' ,authUser)

module.exports = router