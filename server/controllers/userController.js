require("dotenv").config();
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const User = require("../models/userModel");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_CONFIRM,
    pass: process.env.EMAIL_PASS,
  },
  secure: false,
  tls: {
    rejectUnauthorized: false,
  },
});

const generateVerificationToken = (userId) => {
  return jwt.sign({ userId }, process.env.EMAIL_SECRET, { expiresIn: "1h" });
};

const sendVerificationEmail = (email, token) => {
  const verificationLink = `http://localhost:5173/verify?token=${token}`;

  transporter.sendMail(
    {
      from: process.env.EMAIL_CONFIRM,
      to: email,
      subject: "Email Verification",
      html: `
          <p>Thank you for registering!</p>
          <p> Click <a href="${verificationLink}">here</a> to verify your email.</p>
        `,
    },
    (error, info) => {
      if (error) {
        console.error("Error sending verification email:", error);
      } else {
        console.log("Verification email sent:", info.response);
      }
    }
  );
};

const sendResetPasswordEmail = (user, token) => {
  const emailLink = `http://localhost:5173/resetPassword?token=${token}&email=${user.email}`;

  transporter.sendMail(
    {
      from: process.env.EMAIL_CONFIRM,
      to: user.email,
      subject: "Reset Password",
      html: `
          <p>Hello!</p>
          <p> Click <a href="${emailLink}">here</a> to reset your password.</p>
        `,
    },
    (error, info) => {
      if (error) {
        console.error("Error sending reset password email:", error);
      } else {
        console.log("Reset password email sent:", info.response);
      }
    }
  );
};

//route     POST users/auth
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(401); //401 code status - Unauthorized
    throw new Error("User does not exist");
  }

  if (!user.confirmation) {
    res.status(401); //401 code status - Unauthorized
    throw new Error("Please confirm your email to login");
  } else {
    if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id);
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        confirmed: true,
      });
    } else {
      res.status(401); //401 code status - Unauthorized
      throw new Error("Invalid email or password");
    }
  }
});

//route     POST users
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    const token = generateVerificationToken(user._id);
    sendVerificationEmail(email, token);
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//route     POST users/logout
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "User logged out" });
});

//route     GET users/profile
const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    notifications: req.user.notifications,
    notificationsCount: req.user.notificationsCount,
  };

  res.status(200).json(user);
});

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const resetUserNotificationsCount = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  const user = await User.findOneAndUpdate(
    { _id: userId },
    { $set: { notificationsCount: 0 } },
    { new: true }
  );

  res.status(200).json({ message: "Notifications reset successful", user });
});

const resetUserNotifications = asyncHandler(async (req, res) => {
  const { userId } = req.body;

  const user = await User.findOneAndUpdate(
    { _id: userId },
    { $set: { notifications: [] } },
    { new: true }
  );

  res
    .status(200)
    .json({ message: "Notifications count reset successfully", user });
});

//route     PUT users/profile
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const sendResetPasswordLink = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const token = generateVerificationToken(user._id);

  sendResetPasswordEmail(user, token);
  return res.status(200).json({ message: "Password email sent successfully." });
});

const resetPassword = asyncHandler(async (req, res) => {
  const { token } = req.query;
  const { password } = req.body;

  if (!token) {
    return res.status(400).json("Token is required");
  }

  const decoded = jwt.verify(token, process.env.EMAIL_SECRET);

  const userId = decoded.userId;
  const user = await User.findById(userId);

  if (!user) {
    res.status(404);
    return res.status(400).json("User not found");
  }

  const isSamePassword = await bcrypt.compare(password, user.password);

  if (isSamePassword) {
    return res.status(400).json("Cannot reset the same password");
  }

  if (password) {
    user.password = password;
    await user.save();
  } else {
    return res.status(400).json("Password is required");
  }

  res.status(200).json({ message: "Password reset successful" });
});

module.exports = {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  resetUserNotificationsCount,
  resetUserNotifications,
  sendResetPasswordLink,
  resetPassword,
};
