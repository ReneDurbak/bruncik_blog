const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentModel = new Schema({
    comment:{
        type: String,
        required: true
    }
})