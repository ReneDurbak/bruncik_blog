const {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    getAllUsers,
    resetUserNotificationsCount,
    resetUserNotifications,
    updateUserProfile,
    sendResetPasswordLink,
    resetPassword
} = require('../controllers/userController.js')
const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware.js')

router.post('/', registerUser)
router.post('/auth', authUser)
router.post('/logout', logoutUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.get('/getAllUsers', getAllUsers)
router.route('/resetNotificationsCount').patch(protect, resetUserNotificationsCount)
router.route('/resetNotifications').patch(protect, resetUserNotifications)
router.post('/sendResetPasswordLink', sendResetPasswordLink)
router.post('/resetPassword', resetPassword)


module.exports = router