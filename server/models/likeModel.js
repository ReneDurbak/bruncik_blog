const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const likeSchema = new mongoose.Schema(
  {
    videoId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Video",
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

likeSchema.index({ videoId: 1, userId: 1 }, { unique: true });
;

module.exports = mongoose.model("like", likeSchema);
