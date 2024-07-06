const express = require("express");
const {
  getAllReviews,
  postReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware.js");

router.get("/getAllReviews", getAllReviews);
router.route("/postReview").post(protect, postReview);
router.route("/updateReview/:id").patch(protect, updateReview);
router.route("/deleteReview/:id").delete(protect, deleteReview);

module.exports = router;
