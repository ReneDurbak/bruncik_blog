const express = require('express')
const Article = require('../models/articleModel')
const {
    createArticle,
    getAllArticles,
    getArticle,
    deleteArticle,
    updateArticle
} = require("../controllers/articleController")

const router = express.Router()


router.get('/getAllArticles', getAllArticles)


router.get('/getArticle/:id', getArticle)


router.post('/postArticle', createArticle)


router.delete('/postArticle/:id', deleteArticle)


router.patch('/patchArticle/:id', updateArticle)



module.exports = router