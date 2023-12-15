const express = require('express')
const router = express.Router()
const {
    getAllArticleSections,
    getArticleSection,
    createArticleSection,
    updateArticleSection,
    deleteArticleSection
} = require("../controllers/articleSectionController")




router.get("/getAllArticleSections", getAllArticleSections)

router.get("/getArticleSection/:id", getArticleSection)

router.post("/createArticleSection", createArticleSection)

router.patch("/updateArticleSection/:id", updateArticleSection)

router.delete("/deleteArticleSection/:id", deleteArticleSection)


module.exports = router