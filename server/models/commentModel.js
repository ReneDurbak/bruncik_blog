const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    userName: {
      type: Schema.Types.String,
      required: true,
      ref: "User",
    },
    articleId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "article",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("comment", commentSchema);
