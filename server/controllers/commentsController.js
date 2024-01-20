const Comment = require("../models/commentModel");

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({}).sort({ createdAt: -1 });
    res.status(200).json(comments);
  } catch (error) {
    res
      .status(400)
      .json({ message: `Cannot get all Comments ${error.message}` });
  }
};

const postComment = async (req, res) => {
  const { comment, userId, articleId, userName } = req.body;

  try {
    const postComment = await Comment.create({
      comment,
      userId,
      articleId,
      userName,
    });
    res.status(200).json(postComment);
  } catch (error) {
    res.status(400).json({ message: `Cannot post message ${error.message}` });
  }
};

const deleteComment = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedComment = await Comment.findByIdAndDelete({ _id: id });
    res.status(200).json(deletedComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const patchComment = async(req, res) => {
  const {id} = req.params

  try {
    const updatedComment = await Comment.findByIdAndUpdate({_id: id}, {
      ...req.body
    })
    res.status(200).json({updatedComment})

  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

module.exports = {
  getAllComments,
  postComment,
  deleteComment,
  patchComment
};
