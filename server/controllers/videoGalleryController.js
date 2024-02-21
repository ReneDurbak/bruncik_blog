const VideoGallery = require('../models/videoGallery')
const fs = require('fs');
const path = require('path');


const getAllVideoGalleries = async(req, res) => {
    
    try {
        const videoGalleries = await VideoGallery.find({})
        res.status(200).json(videoGalleries)

    } catch (error) {
        res.status(400).json({message: `Cannot get video galleries: ${error.message}`})
    }
}


const getVideoGallery = async(req, res) => {
    const {id} = req.params

    try {
        const videoGallery = await VideoGallery.findById(id)
        res.status(200).json(videoGallery)
        
    } catch (error) {
        res.status(400).json({message: `Cannot get video gallery: ${error.message}`})
    }
}


const createVideoGallery = async(req, res) => {
    const {title, goal} = req.body
    const {filename} = req.file
    const imageFilename = filename


    try {


        const postedVideoGallery = await VideoGallery.create({
            title,
            image: imageFilename,
            goal
        })

        res.status(200).json(postedVideoGallery)

    } catch (error) {
        res.status(400).json({message: `Cannot create video gallery ${error.message}`})
    }
}


const updateVideoGallery = async(req, res) => {
    const {id} = req.params
    const {title, goal} = req.body
    let imageFilename 

    const updateData = {}

    
    if (title) {
        updateData.title = title;
    }
    if (goal) {
        updateData.goal = goal;
    }

    try {

        const currentVideoGallery = await VideoGallery.findById(id)

        if(!currentVideoGallery){
            res.status(404).json({error: `Video  gallery not found`})
        }

        if(req.file){
            imageFilename = req.file.filename
            updateData.image = imageFilename
            
        if(imageFilename){
            updateData.image = imageFilename

            if(currentVideoGallery.image){
                const imagePath = path.join('public/videoGallery', currentVideoGallery.image)
                fs.unlinkSync(imagePath)
            }
        }

    }

        const updatedVideoGallery = await VideoGallery.findOneAndUpdate(
            {_id: id}, 
            updateData,
            {new: true}
            )

        res.status(200).json(updatedVideoGallery)

    } catch (error) {
        res.status(400).json({message: 'Cannot update video gallery'})
    }
}



const deleteVideoGallery = async(req, res) => {
    const {id} = req.params

    try {

        const currentVideoGallery = await VideoGallery.findById(id)

        if(!currentVideoGallery){
            res.status(404).json({error: `Video  gallery not found`})
        }



            if(currentVideoGallery.image){
                const imagePath = path.join('public/videoGallery', currentVideoGallery.image)
                fs.unlinkSync(imagePath)
            }

        

        const deletedVideoGallery = await VideoGallery.findOneAndDelete({_id: id})
        res.status(200).json(deletedVideoGallery)

    } catch (error) {
        res.status(400).json({message: 'Cannot update video gallery'})
    }
}




module.exports = {
    getAllVideoGalleries,
    getVideoGallery,
    createVideoGallery,
    updateVideoGallery,
    deleteVideoGallery

}