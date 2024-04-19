const Admin = require("../models/adminModel");
const asyncHandler = require("express-async-handler");
const generateAdminToken = require("../utils/generateAdminToken");

const authAdmin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  const admin = await Admin.findOne({ username });

  if (!admin) {
    res.status(401);
    throw new Error("Admin does not exist");
  }

  if (admin && (await admin.comparePassword(password))) {
    generateAdminToken(res, admin._id);
    res.status(201).json({
      _id: admin._id,
      username: admin.username,
    });
  }else{

  res.status(401);
  throw new Error('Invalid username or password')
  }

});

const logoutAdmin = asyncHandler(async (req, res) => {
  res.cookie("adminJwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Admin logged out" });
});

const getAdminProfile = asyncHandler(async (req, res) => {
  const admin = {
    _id: req.admin._id,
    username: req.admin.username,
  };

  res.status(200).json(admin);
});

module.exports = {
  authAdmin,
  logoutAdmin,
  getAdminProfile,
};
