const mongoose = require("mongoose")

const Schema = mongoose.Schema

const articleSectionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true,
    },
    imageUrlClicked:{
        type: String,
        required: true,
    },
})



module.exports = mongoose.model('articleSection', articleSectionSchema)