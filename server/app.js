require("dotenv").config();
const cors = require("cors");
const express = require("express");
const router = express.Router();
const path = require("path");
const PORT = process.env.PORT;
const DATABASE = process.env.DATABASE;
const app = express();
const mongoose = require("mongoose");
const articleRoutes = require("./routes/articles");
const articleSectionRoutes = require("./routes/articleSections.js");
const Admin = require("./models/adminModel");
const userRoutes = require("./routes/userRoutes.js");
const adminRoutes = require("./routes/adminRoutes.js");
const videoRoutes = require("./routes/videos");
const videoGalleryRoutes = require("./routes/videoGallery.js");
const commentsRoutes = require("./routes/comments");
const reviewRoutes = require("./routes/reviews.js");
const likeRoutes = require("./routes/likes.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
const cookieParser = require("cookie-parser");
const http = require("http");
const { Server } = require("socket.io");
const User = require("./models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/public/videoGallery", express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.use(cookieParser());

/*app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})*/

//Socket setup
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  socket.on("videoCreated", async (data) => {
    const { message, videoGalleryImage } = data;

    socket.broadcast.emit("receiveNotification", data);

    try {
      const users = await User.find();

      users.forEach(async (user) => {
        user.notifications.push({
          message,
          videoGalleryImage,
          createdAt: new Date(),
        });

        user.notificationsCount += 1;

        await user.save();
      });
    } catch (error) {
      console.error("Error updating notifications:", error);
    }
  });
});

app.use("/admins", adminRoutes);
app.use("/users", userRoutes);
app.use("/admin/articles", articleRoutes);
app.use("/admin/articleSections", articleSectionRoutes);
app.use("/admin/videos", videoRoutes);
app.use("/admin/videoGalleries", videoGalleryRoutes);
app.use("/comments", commentsRoutes);
app.use("/reviews", reviewRoutes);
app.use("/likes", likeRoutes);

app.get("/getAdminCredentials", async (req, res) => {
  try {
    const adminCredentials = await Admin.find({});
    res.status(200).json(adminCredentials);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/postAdminCredentials", async (req, res) => {
  const { password, username } = req.body;

  try {
    const adminCredentials = await Admin.create({
      password,
      username,
    });

    res.status(200).json(adminCredentials);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get(
  "/verify",
  asyncHandler(async (req, res) => {
    const { token } = req.query;

    if (!token) {
      return res.status(400).send("Token is required");
    }

    const decoded = jwt.verify(token, process.env.EMAIL_SECRET);

    const userId = decoded.userId;
    const user = await User.findById(userId);

    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }

    if (user) {
      user.confirmation = true;
      await user.save();
    }

    res.status(200).send("Verification successful");
  })
);

app.use(notFound);
app.use(errorHandler);

mongoose
  .connect(DATABASE)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Connected to database, listening on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
