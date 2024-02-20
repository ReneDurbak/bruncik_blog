const mongoose = require('mongoose')


const videoGallerySchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    image:{
        type: String,
    },
    goal:{
        type: Number,
        required: true
    }
}, {timestamps: true})

const videoGallery = mongoose.model('videoGallery', videoGallerySchema)


module.exports = videoGallery;