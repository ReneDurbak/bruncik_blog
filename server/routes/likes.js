const express = require("express");
const {
  getLikes,
  postLike,
  deleteLike,
} = require("../controllers/likeController.js");

const router = express.Router();

router.get("/likes", getLikes);
router.post("/like", postLike);
router.delete("/like/:id", deleteLike);

module.exports = router;
