const Article = require("../models/articleModel");

const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find({})
      .sort({ createdAt: -1 })
      .populate("section");
    res.status(200).json(articles);
  } catch (err) {
    res.status(400).json({ error: `Cannot get articles: ${err.message}` });
  }
};

const getArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await Article.findById(id).populate("section");
    res.status(200).json(article);
  } catch (err) {
    res.status(404).json({ error: `Cannot get such article: ${err.message}` });
  }
};

const createArticle = async (req, res) => {
  const { title, content, readingTime, section, label } = req.body;

  try {
    const article = await Article.create({
      title,
      content,
      readingTime,
      section,
      label,
    });
    res.status(200).json(article);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteArticle = async (req, res) => {
  const { id } = req.params;

  try {
    const article = await Article.findOneAndDelete({ _id: id });
    res.status(200).json(article);
  } catch (err) {
    res.status(404).json({ error: "Cannot delete such article" });
  }
};

const updateArticle = async (req, res) => {
  const { id } = req.params;

  try {
    const article = await Article.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );
    res.status(200).json(article);
  } catch (err) {
    res.status(404).json({ error: "Cannot update such article" });
  }
};

module.exports = {
  createArticle,
  getAllArticles,
  getArticle,
  deleteArticle,
  updateArticle,
};
