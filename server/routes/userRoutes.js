const {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile } = require('../controllers/userController.js')
const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware.js')

router.post('/', registerUser)
router.post('/auth', authUser)
router.post('/logout', logoutUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)


module.exports = router