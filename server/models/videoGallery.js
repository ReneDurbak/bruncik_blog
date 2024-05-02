const mongoose = require('mongoose')


const videoGallerySchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    image:{
        type: String,
        required: true
    },
    goal:{
        type: String,
        required: true
    }
}, {timestamps: true})

const videoGallery = mongoose.model('videoGallery', videoGallerySchema)


module.exports = videoGallery;