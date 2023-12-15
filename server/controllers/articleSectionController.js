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
    const {title, imageUrl, imageUrlClicked} = req.body
    try {
         // Assuming imageUrl and imageUrlClicked are base64 encoded strings
         const imageBuffer = Buffer.from(imageUrl, 'base64');
         const clickedImageBuffer = Buffer.from(imageUrlClicked, 'base64');
 
         // Generate unique filenames or use some unique identifier
         const filename = `${Date.now()}_image.png`;
         const clickedFilename = `${Date.now()}_clicked_image.png`;
 
         // Save images to the assets folder
         const imagePath = path.join(__dirname, '../client/src/assets/', filename);
         const clickedImagePath = path.join(__dirname, '../client/src/assets/', clickedFilename);
 
         fs.writeFileSync(imagePath, imageBuffer);
         fs.writeFileSync(clickedImagePath, clickedImageBuffer);
         
        const articleSection = await ArticleSection.create({title, imageUrl, imageUrlClicked})
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