const Review = require("../models/reviewModel");

const getAllReviews = async (req, res) => {
  try {
    const Reviews = await Review.find({}).sort({ createdAt: -1 });
    res.status(200).json(Reviews);
  } catch (error) {
    res.status(400).json({message: `Cannot get all reviews:  ${error.message}`});
  }
};

const postReview = async(req, res) => {
    const {rating, labels, comment, articleId} = req.body
    try {
        const postReview = await Review.create({
            rating,
            labels,
            comment,
            articleId
        })

        res.status(200).json(postReview)
    } catch (error) {
        res.status(400).json({message: `Cannot post review:  ${error.message}`});
    }
}


module.exports = {
    getAllReviews,
    postReview
}
