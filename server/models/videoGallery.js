const mongoose = require('mongoose')


const videoGallerySchema = mongoose.Schema({
    title:{
        type: String,
        require: true,
        unique: true
    },
    image:{
        type: String,
    },
}, {timestamps: true})

const videoGallery = mongoose.model('videoGallery', videoGallerySchema)


module.exports = videoGallery;