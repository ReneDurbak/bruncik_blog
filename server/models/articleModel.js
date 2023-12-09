const mongoose = require('mongoose')

const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    readingTime: {
        type: Number,
        required: true
    },
    section:{
        type: String,
        required:true
    },
    label:{
        type: String,
        required:true
    }
}, { timestamps: true})

module.exports = mongoose.model('Article', articleSchema)