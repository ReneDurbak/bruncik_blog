const Like = require("../models/likeModel");

const getLikes = async (req, res) => {
  try {
    const likes = await Like.find();
    res.status(200).json(likes);
  } catch (error) {
    res.status(400).json({ error: "Cannot get likes" });
  }
};

const postLike = async (req, res) => {
  const { videoId, userId } = req.body;

  try {
    const createdLike = await Like.create({ videoId, userId });

    res.status(200).json(createdLike);
  } catch (error) {
    res.status(400).json({ error: "Cannot like a video" });
  }
};

const deleteLike = async (req, res) => {
  const { videoId, userId } = req.body;

  try {
    const deletedLike = await Like.findOneAndDelete({ videoId, userId });
    res.status(200).json(deletedLike);
  } catch (error) {
    res.status(400).json({ error: "Cannot unlike a video" });
  }
};

module.exports = {
  getLikes,
  postLike,
  deleteLike,
};
