const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment:{
        type: String,
        required: true,
    },
    userId:{
        type: String,
        required: true,
    },
    userName:{
        type: String,
        required: true,
    },
    articleId:{
        type: String,
        required: true,
    }
},  { timestamps: true})

module.exports = mongoose.model('comment', commentSchema)

