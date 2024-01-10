const asyncHandler = require('express-async-handler')

const authUser = asyncHandler(async(req, res) => {
    res.status(200).json({message: 'Auth user'})
});

module.exports = authUser