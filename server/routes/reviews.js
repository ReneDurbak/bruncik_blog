const express = require("express");
const {
  getAllReviews,
  postReview
} = require("../controllers/reviewController");
const router = express.Router();

router.get("/getAllReviews", getAllReviews);
router.post("/postReview", postReview);


module.exports = router
