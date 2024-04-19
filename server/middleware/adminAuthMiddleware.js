const jwt = require("jsonwebtoken");
require("dotenv").config();
const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.adminJwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.ADMIN_JWT_SECRET);
      req.admin = await Admin.findById(decoded.adminId).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, invalid token");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = {
  protect,
};
