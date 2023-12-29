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
    
    const {image, imageClicked} = req.files
    const { title } = req.body;
    const imageFilename = image[0].filename
    const imageClickedFilename = imageClicked[0].filename
    try {
        const articleSection = await ArticleSection.create({title, image: imageFilename, imageClicked: imageClickedFilename})
        res.status(200).json(articleSection)
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}



const updateArticleSection = async(req,res) => {
    const {id} = req.params
    const { title } = req.body;
    

    try {
        const currentArticleSection = await ArticleSection.findById(id)

        const { image, imageClicked } = req.files;
        const imageFilename = image[0].filename
        const imageClickedFilename = imageClicked[0].filename

        if (!currentArticleSection) {
            return res.status(404).json({ error: "Article section not found" });
        }

        const currentArticleSectionImageClicked = currentArticleSection.imageClicked
        const currentArticleSectionImage = currentArticleSection.image


        if (image && currentArticleSectionImage) {
            const imagePath = path.join('public', currentArticleSectionImage);
            fs.unlinkSync(imagePath);
            
        }

        if (imageClicked && currentArticleSectionImageClicked) {
            const imageClickedPath = path.join('public', currentArticleSectionImageClicked);
            fs.unlinkSync(imageClickedPath);
         
        }

        const articleSection = await ArticleSection.findOneAndUpdate({_id: id},{
            title, image: imageFilename, imageClicked: imageClickedFilename
        },
        { new: true }
        )

        res.status(200).json(articleSection)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}



const deleteArticleSection = async(req,res) => {
    const {id} = req.params
   
    try {
        const currentArticleSection = await ArticleSection.findById(id)
        if (!currentArticleSection) {
            return res.status(404).json({ error: "Article section not found" });
        }

        const currentArticleSectionImageClicked = currentArticleSection.imageClicked
        const currentArticleSectionImage = currentArticleSection.image
        const articleSection = await ArticleSection.findOneAndDelete({_id: id})


        if (currentArticleSectionImage) {
            const imagePath = path.join('public', currentArticleSectionImage);
                fs.unlinkSync(imagePath);
            
        }

        if (currentArticleSectionImageClicked) {
            const imageClickedPath = path.join('public', currentArticleSectionImageClicked);
                fs.unlinkSync(imageClickedPath);
         
        }


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