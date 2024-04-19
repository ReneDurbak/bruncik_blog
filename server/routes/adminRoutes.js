const express = require("express");
const router = express.Router();
const {
  logoutAdmin,
  authAdmin,
  getAdminProfile,
} = require("../controllers/adminController");
const { protect } = require("../middleware/adminAuthMiddleware");

router.post("/auth", authAdmin);
router.post("/logout", logoutAdmin);
router.route("/profile").get(protect, getAdminProfile);

module.exports = router;
