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
const AdminCredentialsModel = require("./models/adminCredentialsModel");
const userRoutes = require("./routes/userRoutes.js");
const videoRoutes = require("./routes/videos");
const commentsRoutes = require("./routes/comments");
const reviewRoutes = require("./routes/reviews.js");
const videoGalleryRoutes = require("./routes/videoGallery.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
const cookieParser = require("cookie-parser");
const http = require("http");
const { Server } = require("socket.io");
const Notification = require("./models/notificationsModel.js");
const User = require("./models/userModel");
const jwt = require("jsonwebtoken");
const generateToken = require("./utils/generateToken");
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
  socket.on("videoCreated", (data) => {
    socket.broadcast.emit("receiveNotification", data);
    Notification.create({ message: data.message });
  });
});

app.get("/notifications/getAllNotifications", async (req, res) => {
  try {
    const getAllNotifications = await Notification.find({}).sort({
      createdAt: -1,
    });
    res.status(200).json(getAllNotifications);
  } catch (error) {
    res
      .status(400)
      .json({ error: `Cannot fetch all notifications ${error.message}` });
  }
});

app.use("/users", userRoutes);
app.use("/admin/articles", articleRoutes);
app.use("/admin/articleSections", articleSectionRoutes);
app.use("/admin/videos", videoRoutes);
app.use("/admin/videoGalleries", videoGalleryRoutes);
app.use("/comments", commentsRoutes);
app.use("/reviews", reviewRoutes);

app.get("/getAdminCredentials", async (req, res) => {
  try {
    const adminCredentials = await AdminCredentialsModel.find({});
    res.status(200).json(adminCredentials);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/postAdminCredentials", async (req, res) => {
  const { password, username } = req.body;

  try {
    const adminCredentials = await AdminCredentialsModel.create({
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
