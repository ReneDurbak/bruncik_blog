const fs = require('fs');
const path = require('path');
const ArticleSection = require("../models/articleSectionModel")


const getAllArticleSections = async(req,res) => {
    try {
        const articleSections = await ArticleSection.find({}).sort({createdAt: -1})
        res.status(200).json(articleSections)        
        
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}



const getArticleSection = async(req,res) => {
    const {id} = req.params
    try {
        const articleSection = await ArticleSection.findById(id)
        res.status(200).json(articleSection)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}


const createArticleSection = async(req,res) => {
    const {title, image, imageClicked} = req.body
    try {
        const articleSection = await ArticleSection.create({title, image, imageClicked})
        res.status(200).json(articleSection)
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}



const updateArticleSection = async(req,res) => {
    const {id} = req.params
    try {
        const articleSection = await ArticleSection.findOneAndUpdate({_id: id},{
            ...req.body
        })
        res.status(200).json(articleSection)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}



const deleteArticleSection = async(req,res) => {
    const {id} = req.params
    try {
        const articleSection = await ArticleSection.findOneAndDelete({_id: id})
        res.status(200).json(articleSection)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}


module.exports = {
    getAllArticleSections,
    getArticleSection,
    createArticleSection,
    updateArticleSection,
    deleteArticleSection

}