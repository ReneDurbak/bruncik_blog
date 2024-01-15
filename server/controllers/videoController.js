const Video = require('../models/videosModel.js');


const getAllVideos = async(req, res) => {
    try {
        const videos = await Video.find({}).sort({createdAt: -1})
        res.status(200).json(videos)
    } catch (error) {
        res.status(400).json({erro:`Cannot fetch videos: ${error.message}`})
    }
}

const createVideo = async(req, res) => {
    const {url_link} = req.body
    try {
        const video = await Video.create({url_link})
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
    updateVideo
}