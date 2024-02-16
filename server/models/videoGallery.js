const mongoose = require('mongoose')


const videoGallerySchema = mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    image:{
        type: String,
        require: true
    }
}, {timestamps: true})

const videoGallery = mongoose.model('videoGallery', videoGallerySchema)


module.exports = videoGallery;