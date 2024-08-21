const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    readingTime: {
      type: Number,
    },
    section: {
      type: Schema.Types.ObjectId,
      ref: "articleSection",
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

articleSchema.pre("save", function (next) {
  if (this.content) {
    const text = this.content.replace(/<[^>]*>/g, "");
    const words = text.split(/\s+/).filter((word) => word.length > 0).length;

    this.readingTime = Math.floor(words / 238);
  }
  next();
});

articleSchema.pre(["findOneAndUpdate", "updateOne"], function (next) {
  const update = this.getUpdate();

  if (update.content) {
    const text = update.content.replace(/<[^>]*>/g, "");
    const words = text.split(/\s+/).filter((word) => word.length > 0).length;

    update.readingTime = Math.floor(words / 238);
  }
  next();
});

module.exports = mongoose.model("article", articleSchema);
