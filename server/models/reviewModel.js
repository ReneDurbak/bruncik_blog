const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    rating:{
        type: Number,
        required: true,
    },
    labels:{
        type: [String],
    },
    comment:{
        type:String,
        required: true
    },
    articleId:{
        type: String,
        required: true
    }
}, {timestamps: true})


module.exports = mongoose.model('review', reviewSchema)