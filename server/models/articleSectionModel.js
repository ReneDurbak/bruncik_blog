const mongoose = require("mongoose")

const Schema = mongoose.Schema

const articleSectionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true,
    },
    imageClicked:{
        type: String,
        required: true,
    },
})



module.exports = mongoose.model('articleSection', articleSectionSchema)