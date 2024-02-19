const mongoose = require('mongoose');

const Schema = mongoose.Schema


const videosSchema = mongoose.Schema({
    url_link: {
        type: String,
        required: true
    },
    day_count: {
        type: Number,
        default: 1 
    },
    video_gallery: {
        type: Schema.Types.ObjectId,
        ref: 'videoGallery',
        required: true
    }

},{timestamps: true});

videosSchema.pre('save', async function (next) {
    const highestDayCount = await this.constructor.findOne({}).sort('-day_count').exec();

    if (highestDayCount) {
        this.day_count = highestDayCount.day_count + 1;
    }

    next();
});

const Video = mongoose.model('Video', videosSchema);

module.exports = Video;
