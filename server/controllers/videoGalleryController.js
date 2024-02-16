const VideoGallery = require('../models/videoGallery')


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
    const {title, image} = req.body

    try {
        const postedVideoGallery = await VideoGallery.create({
            title,
            image
        })

        res.status(200).json(postedVideoGallery)

    } catch (error) {
        res.status(400).json({message: `Cannot create video gallery ${error.message}`})
    }
}


const updateVideoGallery = async(req, res) => {
    const {id} = req.params

    try {
        const updatedVideoGallery = await VideoGallery.findOneAndUpdate({_id: id}, {
            ...req.body
        })

        res.status(200).json(updatedVideoGallery)

    } catch (error) {
        res.status(400).json({message: 'Cannot update video gallery'})
    }
}



const deleteVideoGallery = async(req, res) => {
    const {id} = req.params

    try {
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