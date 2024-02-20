const Video = require('../models/videosModel.js');


const getAllVideos = async(req, res) => {
    try {
        const videos = await Video.find({}).sort({}).populate('video_gallery')
        res.status(200).json(videos)
    } catch (error) {
        res.status(400).json({erro:`Cannot fetch videos: ${error.message}`})
    }
}

const getVideo = async(req, res) => {
    const {id} = req.params

    try {
        const videos = await Video.findById(id).populate('video_gallery')
        res.status(200).json(videos)
    } catch (error) {
        res.status(400).json({error:`Cannot fetch video: ${error.message}`})
    }
}

const createVideo = async(req, res) => {
    const {url_link, video_gallery} = req.body
    try {
        const video = await Video.create({url_link, video_gallery})
        res.status(200).json(video)
    } catch (error) {
        res.status(400).json({error: `Cannot post video: ${error.message}`})
    }
}

const deleteVideo = async(req, res) => {
    const {id} = req.params
    try {
        const video = await Video.findOneAndDelete({_id: id})
        res.status(200).json(video)
    } catch (error) {
        res.status(400).json({error: `Cannot delete video: ${error.message}`})
    }
}

const updateVideo = async(req, res) => {
    const {id} = req.params
    try {
        const video = await Video.findOneAndUpdate({_id: id}, {
            ...req.body
        })
        res.status(200).json(video)
    } catch (error) {
        res.status(400).json({error: `Cannot update video: ${error.message}`})
    }
}


module.exports = {
    getAllVideos,
    createVideo,
    deleteVideo,
    updateVideo,
    getVideo
}