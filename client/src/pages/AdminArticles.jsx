import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import JoditEditor from "jodit-react";
import axios from "axios";
import { useState, useRef } from "react";
import AdminSidePanel from "../components/AdminSidePanel";
import { Select, MenuItem, InputLabel } from "@mui/material";
import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { BsTrash3 } from "react-icons/bs";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import DOMPurify from "dompurify";

export default function AdminArticles() {
  const [articles, setArticles] = useState([]);
  const [articleSections, setArticleSections] = useState([]);
  const [section, setSection] = useState(null);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/admin/articles/getAllArticles"
      );
      const articles = response.data;

      setArticles(articles);
    } catch (error) {
      console.error("Error fetching articles: ", error.message);
    }
  };

  const fetchArticleSections = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/admin/articleSections/getAllArticleSections"
      );
      const articleSections = response.data;
      setArticleSections(articleSections);
    } catch (error) {
      console.error("Error fetching article sections:", error.message);
    }
  };

  useEffect(() => {
    fetchArticles();
    fetchArticleSections();
  }, []);

  const handleArticleSectionChange = (event) => {
    setSection(event.target.value);
  };

  const [isDeleteArticleModal, setIsDeleteArticleModal] = useState(false);
  const [articleDeleteModalText, setArticleDeleteModalText] = useState("");
  const [deleteArticleId, setDeleteArticleId] = useState();

  const handleOpenArticleDeleteModal = (articleTitle, articleId) => {
    setIsDeleteArticleModal(true);
    setArticleDeleteModalText(
      `Do you really want to delete article <strong>${articleTitle}</strong>?`
    );

    setDeleteArticleId(articleId);
  };

  const handleCloseArticleDeleteModal = () => {
    setIsDeleteArticleModal(false);
  };

  const deleteArticle = async (id) => {
    try {
      await axios.delete(
        `http://localhost:4000/admin/articles/deleteArticle/${id}`
      );
      fetchArticles();
    } catch (error) {
      console.error("Error deleting an article:", error.message);
    }
  };

  const [title, setTitle] = useState("");
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [readingTime, setReadingTime] = useState("");
  const [label, setLabel] = useState("");
  const [createArticle, setCreateArticle] = useState(false);

  const handleCreateArticle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/admin/articles/postArticle",
        {
          title,
          content,
          //readingTime,
          section,
          label,
        }
      );

      fetchArticles();

      setTitle("");
      setContent("");
      //setReadingTime("");

      setSection(null);
      setLabel("");
      setCreateArticle(false);
    } catch (error) {
      console.error("Error posting an article: ", error.message);
    }
  };

  const [articleHoverStates, setArticleHoverStates] = useState({});

  const handleArticleMouseEnter = (articleId) => {
    setArticleHoverStates(() => ({
      [articleId]: true,
    }));
  };

  const handleArticleMouseLeave = (articleId) => {
    setArticleHoverStates(() => ({
      [articleId]: false,
    }));
  };

  const [createArticleSection, setCreateArticleSection] = useState(false);
  const [articleSectionTitle, setArticleSectionTitle] = useState("");
  const [articleSectionImage, setArticleSectionImage] = useState();
  const imageInput = useRef(null);
  const [articleSectionImageClicked, setArticleSectionImageClicked] =
    useState();
  const imageInputClicked = useRef(null);

  const [articleSectionHoverStates, setArticleSectionHoverStates] = useState(
    {}
  );
  const handleArticleSectionMouseEnter = (articleId) => {
    setArticleSectionHoverStates(() => ({
      [articleId]: true,
    }));
  };

  const handleArticleSectionMouseLeave = (articleId) => {
    setArticleSectionHoverStates(() => ({
      [articleId]: false,
    }));
  };

  const handleCreateArticleSection = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", articleSectionImage);
      formData.append("imageClicked", articleSectionImageClicked);
      formData.append("title", articleSectionTitle);

      if (
        articleSectionImage &&
        articleSectionImageClicked &&
        articleSectionTitle
      ) {
        await axios.post(
          `http://localhost:4000/admin/articleSections/createArticleSection`,
          formData
        );
      } else {
        return null;
      }

      fetchArticleSections();

      setArticleSectionTitle("");
      setArticleSectionImage();
      imageInput.current.value = "";
      setArticleSectionImageClicked();
      imageInputClicked.current.value = "";
      setCreateArticleSection(false);
    } catch (error) {
      console.error("Error posting an article section", error.message);
    }
  };

  const [isDeleteArticleSectionModal, setIsDeleteArticleSectionModal] =
    useState(false);
  const [articleSectionDeleteModalText, setArticleSectionDeleteModalText] =
    useState("");
  const [deleteArticleSectionId, setDeleteArticleSectionId] = useState();

  const handleOpenArticleSectionDeleteModal = (
    articleSectionTitle,
    articleSectionId
  ) => {
    setIsDeleteArticleSectionModal(true);
    setArticleSectionDeleteModalText(
      `Do you really want to delete article section <strong>${articleSectionTitle}</strong>?`
    );

    setDeleteArticleSectionId(articleSectionId);
  };

  const handleCloseArticleSectionDeleteModal = () => {
    setIsDeleteArticleSectionModal(false);
  };

  const deleteArticleSection = async (id) => {
    try {
      await axios.delete(
        `http://localhost:4000/admin/articleSections/deleteArticleSection/${id}`
      );
      fetchArticleSections();
    } catch (error) {
      console.error("Error deleting an article section", error.message);
    }
  };

  const modalBoxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 6,
    p: 4,
    borderRadius: "25px",
  };

  function NextArrowArticles(props) {
    const { className, style, onClick } = props;
    const totalSlides = articles.length;
    const slidesToShow = slideSettingsArticles.slidesToShow;
    const isLastSlide = currentSlideArticles >= totalSlides - slidesToShow;

    return (
      <div>
        <FaChevronRight
          className={`${
            isLastSlide ? "invisible" : ""
          } rounded-2xl text-black z-[10] cursor-pointer absolute right-[-40px] top-[40%]`}
          size={24}
          style={{ ...style }}
          onClick={onClick}
        />
      </div>
    );
  }

  function PrevArrowArticles(props) {
    const { className, style, onClick } = props;

    return (
      <div>
        <FaChevronLeft
          className={`${
            currentSlideArticles === 0 ? "invisible" : ""
          } rounded-2xl text-black z-[10] cursor-pointer absolute left-[-40px] top-[40%]`}
          size={24}
          style={{ ...style }}
          onClick={onClick}
        />
      </div>
    );
  }

  function NextArrowArticlesSection(props) {
    const { className, style, onClick } = props;
    const totalSlides = articleSections.length;
    const slidesToShow = slideSettingsArticleSections.slidesToShow;
    const isLastSlide =
      currentSlideArticleSections >= totalSlides - slidesToShow;

    return (
      <div>
        <FaChevronRight
          className={`${
            isLastSlide ? "invisible" : ""
          } rounded-2xl text-black z-[10] cursor-pointer absolute right-[-40px] top-[40%]`}
          size={24}
          style={{ ...style }}
          onClick={onClick}
        />
      </div>
    );
  }

  function PrevArrowArticlesSection(props) {
    const { className, style, onClick } = props;

    return (
      <div>
        <FaChevronLeft
          className={`${
            currentSlideArticleSections === 0 ? "invisible" : ""
          } rounded-2xl text-black z-[10] cursor-pointer absolute left-[-40px] top-[40%]`}
          size={24}
          style={{ ...style }}
          onClick={onClick}
        />
      </div>
    );
  }

  const [currentSlideArticles, setCurrentSlideArticles] = useState(0);

  var slideSettingsArticles = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    swipeToSlide: true,
    nextArrow: <NextArrowArticles />,
    prevArrow: <PrevArrowArticles />,
    afterChange: (current) => setCurrentSlideArticles(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [currentSlideArticleSections, setCurrentSlideArticleSections] =
    useState(0);

  var slideSettingsArticleSections = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    swipeToSlide: true,
    nextArrow: <NextArrowArticlesSection />,
    prevArrow: <PrevArrowArticlesSection />,
    afterChange: (current) => setCurrentSlideArticleSections(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="font-poppins flex space-x-[280px]">
        <AdminSidePanel />

        <div className="overflow-y-auto w-full text-left  mt-10 mb-20 p-8">
          <h1 className="mt-10 mb-2 text-3xl font-bold">Articles</h1>
          <div className="border-t-2 w-[16%] border-black" />
          {createArticle ? (
            <div className="my-6">
              <button
                className="p-2 bg-gray-200 hover:bg-gray-400 duration-300 ease-in-out rounded-xl cursor-pointer"
                onClick={() => {
                  setCreateArticle(false);
                  setTitle("");
                  setContent("");
                  //setReadingTime("");
                  setArticleSection("");
                  setLabel("");
                }}
              >
                Back
              </button>

              <div className="space-x-4 mt-10 flex flex-row items-end">
                <form
                  className="flex flex-col space-y-4"
                  onSubmit={handleCreateArticle}
                >
                  <label>
                    Title:
                    <input
                      type="text"
                      className="rounded-md ml-2"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </label>

                  <label>
                    Content:
                    <JoditEditor
                      ref={editor}
                      value={content}
                      tabIndex={1}
                      onBlur={(newContent) => setContent(newContent)}
                      onChange={(newContent) => {}}
                    />
                  </label>

                  {/*<label>
                    Reading Time:
                    <input
                      type="text"
                      className="rounded-md ml-2"
                      value={readingTime}
                      onChange={(e) => setReadingTime(e.target.value)}
                    />
                  </label>*/}

                  <InputLabel id="articleSectionLabel">
                    Article Section
                  </InputLabel>
                  <Select
                    labelId="articleSectionLabel"
                    id="articleSectionSelect"
                    value={section}
                    onChange={handleArticleSectionChange}
                  >
                    {articleSections.map((section) => (
                      <MenuItem key={section._id} value={section._id}>
                        {section.title}
                      </MenuItem>
                    ))}
                  </Select>

                  <label>
                    Label:
                    <input
                      type="text"
                      className="rounded-md ml-2"
                      value={label}
                      onChange={(e) => setLabel(e.target.value)}
                    />
                  </label>

                  <button
                    type="submit"
                    className="p-2 bg-green-400 hover:bg-green-500 w-min rounded-[30px]"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <button
              className="mt-6 p-2 bg-green-200 hover:bg-green-400 duration-300 ease-in-out rounded-xl cursor-pointer"
              onClick={() => setCreateArticle(true)}
            >
              Create new article +
            </button>
          )}

          <div className="mt-4 mb-[125px]">
            <h2 className="flex items-end font-bold text-lg">
              List of articles:
            </h2>

            <Slider
              {...slideSettingsArticles}
              className="w-[75%]  border-4 p-2  rounded-xl"
            >
              {articles &&
                articles.map((article, index) => (
                  <div
                    key={article._id}
                    onMouseEnter={() => handleArticleMouseEnter(article._id)}
                    onMouseLeave={() => handleArticleMouseLeave(article._id)}
                    className={`p-2 bg-gray-200 rounded-lg cursor-pointer min-h-[120px]`}
                  >
                    <span>
                      <strong
                        className={`${
                          article.section ? "text-black" : "text-red-400"
                        }`}
                      >
                        {article.title}{" "}
                      </strong>
                    </span>
                    {article.section ? null : (
                      <div className="text-red-400">
                        Missing article section!
                      </div>
                    )}
                    <br />
                    <div>{article.section && article.section.title}</div>

                    <div className="flex space-x-2 mt-4">
                      {articleHoverStates[article._id] && (
                        <Link to={`/admin/updateArticle/${article._id}`}>
                          <button className="rounded-xl bg-green-400 hover:bg-green-600 ease-in-out duration-300 cursor-pointer p-2">
                            <FaPencil size={20} />
                          </button>
                        </Link>
                      )}
                      {articleHoverStates[article._id] && (
                        <button
                          onClick={() => {
                            handleOpenArticleDeleteModal(
                              article.title,
                              article._id
                            );
                          }}
                          className="rounded-xl bg-red-400 hover:bg-red-600 ease-in-out duration-300 cursor-pointer p-2"
                        >
                          <BsTrash3 size={20} />
                        </button>
                      )}

                      <Modal
                        open={isDeleteArticleModal}
                        onClose={handleCloseArticleDeleteModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        BackdropProps={{
                          sx: {
                            backgroundColor: "rgba(70, 70, 70, 0.2)", // Light gray background with opacity
                          },
                        }}
                      >
                        <Box sx={modalBoxStyle} className="font-poppins">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(
                                articleDeleteModalText
                              ),
                            }}
                          />
                          <div className="flex justify-start items-center space-x-4">
                            <button
                              className="mt-4 p-2 cursor-pointer rounded-xl bg-gray-300 hover:bg-gray-500 duration-300 ease-in-out"
                              onClick={() => setIsDeleteArticleModal(false)}
                            >
                              Cancel
                            </button>
                            <button
                              className="mt-4 p-2 cursor-pointer rounded-xl bg-red-400 hover:bg-red-600 duration-300 ease-in-out"
                              onClick={() => {
                                setIsDeleteArticleModal(false);
                                deleteArticle(deleteArticleId);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </Box>
                      </Modal>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>

          <h1 className="mt-10 mb-2 text-3xl font-bold">Article sections</h1>
          <div className="border-t-2 w-[20%] border-black" />
          {createArticleSection ? (
            <div className="mt-10">
              <button
                className="mb-6 p-2 rounded-xl bg-gray-300 hover:bg-gray-400 duration-300 ease-in-out"
                onClick={() => {
                  setCreateArticleSection(false);
                  setArticleSectionTitle("");
                  setArticleSectionImage();
                  imageInput.current.value = "";
                  setArticleSectionImageClicked();
                  imageInputClicked.current.value = "";
                }}
              >
                Back
              </button>

              <form
                className="flex flex-col space-y-6"
                onSubmit={handleCreateArticleSection}
              >
                <div className="flex space-x-3">
                  <label className="my-auto">title:</label>
                  <input
                    className="outline outline-1 rounded-md p-2"
                    value={articleSectionTitle}
                    onChange={(e) => setArticleSectionTitle(e.target.value)}
                  />
                </div>

                <div className="flex space-x-3">
                  <label className="my-auto">Image clicked:</label>
                  <input
                    type="file"
                    accept=".jpg, .jpeg, .png, .svg"
                    className="outline outline-1"
                    ref={imageInputClicked}
                    onChange={(e) =>
                      setArticleSectionImageClicked(e.target.files[0])
                    }
                  />
                </div>

                <div className="flex space-x-3">
                  <label className="my-auto">Image: </label>
                  <input
                    type="file"
                    accept=".jpg, .jpeg, .png, .svg"
                    className="outline outline-1"
                    ref={imageInput}
                    onChange={(e) => setArticleSectionImage(e.target.files[0])}
                  />
                </div>

                <button
                  type="submit"
                  className="p-2 rounded-xl bg-green-400 hover:bg-green-600 w-min duration-300 ease-in-out"
                >
                  Submit
                </button>
              </form>
            </div>
          ) : (
            <button
              className="mt-6 p-2 bg-green-200 hover:bg-green-400 ease-in-out duration-300 rounded-xl"
              onClick={() => setCreateArticleSection(true)}
            >
              Create article section +
            </button>
          )}

          <div className="mt-6">
            <h2 className="font-bold text-lg flex items-end">
              List of article sections:
            </h2>
            <Slider
              {...slideSettingsArticleSections}
              className="w-[75%]  border-4 p-2  rounded-xl"
            >
              {articleSections.map((articleSection) => (
                <div
                  key={articleSection._id}
                  className="relative p-2 bg-gray-200 rounded-xl h-[145px]"
                  onMouseEnter={() =>
                    handleArticleSectionMouseEnter(articleSection._id)
                  }
                  onMouseLeave={() =>
                    handleArticleSectionMouseLeave(articleSection._id)
                  }
                >
                  <h1 className="text-center font-bold">
                    {articleSection.title}
                  </h1>
                  <div className="flex justify-center items-center space-x-3">
                    <div className="flex items-center">
                      <p>Image (black icon):</p>
                      {
                        <img
                          className="w-[50px]"
                          src={`http://localhost:4000/public/${articleSection.image}`}
                        />
                      }
                    </div>

                    <div className="flex items-center">
                      <p>Image clicked (white icon):</p>
                      {
                        <img
                          className="w-[50px]"
                          src={`http://localhost:4000/public/${articleSection.imageClicked}`}
                        />
                      }
                    </div>
                  </div>

                  <div className=" flex space-x-2 mt-4">
                    {articleSectionHoverStates[articleSection._id] && (
                      <Link
                        to={`/admin/updateArticleSection/${articleSection._id}`}
                      >
                        <div className="p-2 rounded-xl bg-green-400 hover:bg-green-600 duration-300 ease-in-out">
                          <FaPencil size={20} />
                        </div>
                      </Link>
                    )}
                    {articleSectionHoverStates[articleSection._id] && (
                      <div
                        onClick={() => {
                          handleOpenArticleSectionDeleteModal(
                            articleSection.title,
                            articleSection._id
                          );
                        }}
                        className="p-2 cursor-pointer rounded-xl bg-red-400 hover:bg-red-600 duration-300 ease-in-out"
                      >
                        <BsTrash3 size={20} />
                      </div>
                    )}

                    <Modal
                      open={isDeleteArticleSectionModal}
                      onClose={handleCloseArticleSectionDeleteModal}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                      BackdropProps={{
                        sx: {
                          backgroundColor: "rgba(70, 70, 70, 0.2)", // Light gray background with opacity
                        },
                      }}
                    >
                      <Box sx={modalBoxStyle} className="font-poppins ">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                              articleSectionDeleteModalText
                            ),
                          }}
                        />

                        <div className="flex justify-start items-center space-x-4">
                          <button
                            className="mt-4 p-2 cursor-pointer rounded-xl bg-gray-300 hover:bg-gray-500 duration-300 ease-in-out"
                            onClick={() =>
                              setIsDeleteArticleSectionModal(false)
                            }
                          >
                            Cancel
                          </button>
                          <button
                            className="mt-4 p-2 cursor-pointer rounded-xl bg-red-400 hover:bg-red-600 duration-300 ease-in-out"
                            onClick={() => {
                              setIsDeleteArticleSectionModal(false);
                              deleteArticleSection(deleteArticleSectionId);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </Box>
                    </Modal>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
