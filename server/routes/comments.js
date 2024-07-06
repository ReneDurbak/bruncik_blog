const {
  getAllComments,
  postComment,
  deleteComment,
  patchComment,
} = require("../controllers/commentsController");

const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware.js");

router.get("/getAllComments", getAllComments);
router.route("/postComment").post(protect, postComment);
router.route("/deleteComment/:id").delete(protect, deleteComment);
router.route("/patchComment/:id").patch(protect, patchComment);

module.exports = router;
