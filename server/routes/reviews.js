const express = require("express");
const {
  getAllReviews,
  postReview,
  updateReview,
  deleteReview
} = require("../controllers/reviewController");
const router = express.Router();

router.get("/getAllReviews", getAllReviews);
router.post("/postReview", postReview);
router.patch("/updateReview/:id", updateReview)
router.delete("/deleteReview/:id", deleteReview)

module.exports = router
