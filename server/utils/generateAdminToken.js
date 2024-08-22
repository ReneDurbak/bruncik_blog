const jwt = require("jsonwebtoken");

const generateAdminToken = (res, adminId) => {
  const token = jwt.sign({ adminId }, process.env.ADMIN_JWT_SECRET, {
    expiresIn: "30d",
  });

  res.cookie("adminJwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict", // CSRF attacks prevention
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};

module.exports = generateAdminToken;
