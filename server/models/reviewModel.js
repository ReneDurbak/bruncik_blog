const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    rating:{
        type: Number,
        required: true,
        min: 0,
        max: 5,
        validate: {
            validator: (value) => Number.isInteger(value) || value % 0.5 === 0,
            message: 'Rating must be a multiple of 0.5 or an integer between 0 and 5.'
        }
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