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


router.get('/', getAllArticles)


router.get('/:id', getArticle)


router.post('/', createArticle)


router.delete('/:id', deleteArticle)


router.patch('/:id', updateArticle)



module.exports = router