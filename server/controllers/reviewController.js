const Review = require("../models/reviewModel");

const getAllReviews = async (req, res) => {
  try {
    const Reviews = await Review.find({}).sort({ createdAt: -1 });
    res.status(200).json(Reviews);
  } catch (error) {
    res
      .status(400)
      .json({ message: `Cannot get all reviews:  ${error.message}` });
  }
};

const postReview = async (req, res) => {
  const { rating, labels, comment, articleId, userId, userName } = req.body;
  try {
    const postReview = await Review.create({
      rating,
      labels,
      comment,
      articleId,
      userId,
      userName
    });

    res.status(200).json(postReview);
  } catch (error) {
    res.status(400).json({ message: `Cannot post review:  ${error.message}` });
  }
};

const updateReview = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedReview = await Review.findByIdAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );

    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(400).json({ message: `Cannot update review ${error.message}` });
  }
};

const deleteReview = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedReview = await Review.findByIdAndDelete({ _id: id });

    res.status(200).json(deletedReview);
  } catch (error) {
    res.status(400).json({ message: `Cannot delete review ${error.message}` });
  }
};

module.exports = {
  getAllReviews,
  postReview,
  updateReview,
  deleteReview,
};
