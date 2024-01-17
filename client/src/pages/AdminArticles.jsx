import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import JoditEditor from "jodit-react";
import axios from "axios";
import { useState, useRef } from "react";
import AdminSidePanel from "../components/AdminSidePanel";
import { Select, MenuItem, InputLabel } from "@mui/material";

export default function AdminArticles() {

  const [articles, setArticles] = useState([]);
  const [articleSections, setArticleSections] = useState([]);
  const [articleSection, setArticleSection] = useState('');
  const [section, setSection] = useState(null)


  const fetchArticles = async () => {
    try {
      const response = await axios.get("http://localhost:4000/admin/articles/getAllArticles")
      const articles = response.data

      setArticles(articles)

    } catch (error) {
      console.error("Error fetching articles: ", error.message)
    }

  }


  const fetchArticleSections = async () => {
    try {
      const response = await axios.get("http://localhost:4000/admin/articleSections/getAllArticleSections")
      const articleSections = response.data
      setArticleSections(articleSections)

    } catch (error) {
      console.error("Error fetching article sections:", error.message)
    }
  }

  useEffect(() => {
    fetchArticles()
    fetchArticleSections()
  }, [])


  const handleArticleSectionChange = (event) => {
    setArticleSection(event.target.value);
    setSection(event.target.value)
  };


  const deleteArticle = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/admin/articles/deleteArticle/${id}`)
      fetchArticles()

    } catch (error) {
      console.error("Error deleting an article:", error.message)

    }
  }





  const [title, setTitle] = useState("");
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [readingTime, setReadingTime] = useState("");
  const [label, setLabel] = useState("");
  const [createArticle, setCreateArticle] = useState(false)


  const handleSubmitArticle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/admin/articles/postArticle",
        {
          title,
          content,
          readingTime,
          section,
          label,
        }
      );

      fetchArticles()


      setTitle("");
      setContent("");
      setReadingTime("");
      setArticleSection("");
      setLabel("");
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



  const [createArticleSection, setCreateArticleSection] = useState(false)
  const [articleSectionTitle, setArticleSectionTitle] = useState('')
  const [articleSectionImage, setArticleSectionImage] = useState()
  const imageInput = useRef(null)
  const [articleSectionImageClicked, setArticleSectionImageClicked] = useState()
  const imageInputClicked = useRef(null)


  const [articleSectionHoverStates, setArticleSectionHoverStates] = useState({});
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



  const handleSubmitArticleSection = async (e) => {
    e.preventDefault()


    try {
      const formData = new FormData()
      formData.append('image', articleSectionImage)
      formData.append('imageClicked', articleSectionImageClicked)
      formData.append('title', articleSectionTitle);


      if ((articleSectionImage && articleSectionImageClicked && articleSectionTitle)) {
        await axios.post(`http://localhost:4000/admin/articleSections/createArticleSection`, formData);
      } else {
        return null
      }


      fetchArticleSections();


      setArticleSectionTitle('')
      setArticleSectionImage()
      imageInput.current.value = ""
      setArticleSectionImageClicked()
      imageInputClicked.current.value = ""

    } catch (error) {
      console.error("Error posting an article section", error.message)
    }
  }


  const deleteArticleSection = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/admin/articleSections/deleteArticleSection/${id}`)
      fetchArticleSections()
    } catch (error) {
      console.error("Error deleting an article section", error.message)
    }
  }







  return (
    <>
      <div className="flex space-x-6">
        <AdminSidePanel />

        <div className="w-full text-left  mt-10">
          <h1 className="mt-10 mb-2 text-3xl font-bold">Articles</h1>
          <div className="border-t-2 w-[16%] border-black" />
          {
            createArticle ?
              <div className="mt-6">
                <button className="p-2 bg-gray-200 hover:bg-gray-400 duration-300 ease-in-out rounded-xl cursor-pointer" onClick={() => {
                  setCreateArticle(false)
                  setTitle("");
                  setContent("");
                  setReadingTime("");
                  setArticleSection("");
                  setLabel("");
                }
                }>Back</button>

                <div className="space-x-4 mt-10 flex flex-row items-end">
                  <form className="flex flex-col space-y-4" onSubmit={handleSubmitArticle}>
                    <label>
                      Title:
                      <input
                        type="text"
                        className="outline outline-1"
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
                        onChange={(newContent) => { }}
                      />
                    </label>

                    <label>
                      Reading Time:
                      <input
                        type="text"
                        className="outline outline-1"
                        value={readingTime}
                        onChange={(e) => setReadingTime(e.target.value)}
                      />
                    </label>

                    <InputLabel id="articleSectionLabel">Article Section</InputLabel>
                    <Select
                      labelId="articleSectionLabel"
                      id="articleSectionSelect"
                      value={articleSection}
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
                        className="outline outline-1"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                      />
                    </label>

                    <button
                      type="submit"
                      className="p-2 bg-blue-400 hover:bg-blue-500 w-min rounded-[30px]"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              : <button className="mt-6 p-2 bg-green-200 hover:bg-green-400 duration-300 ease-in-out rounded-xl cursor-pointer" onClick={() => setCreateArticle(true)}>Create new article +</button>

          }

          <div className="mt-4 mb-[125px]">
            <h2 className="flex items-end font-bold text-lg">List of articles:</h2>
            <div className="flex space-x-4 w-[1000px] overflow-x-scroll border-4 p-2 rounded-xl">
            {articles &&
              articles.map((article) => (
                <div
                  key={article._id}
                  onMouseEnter={() => handleArticleMouseEnter(article._id)}
                  onMouseLeave={() => handleArticleMouseLeave(article._id)}
                  className="p-2 bg-gray-200 rounded-lg cursor-pointer min-w-[250px] min-h-[90px]"
                >
                  <strong>{article.title} </strong><br/>
                  <i>{article.section.title}</i>
                  <div className="flex space-x-4 mt-2">
                    {articleHoverStates[article._id] && <Link to={`/admin/updateArticle/${article._id}`}><button className="rounded-xl bg-green-400 hover:bg-green-600 ease-in-out duration-300 cursor-pointer p-2">update</button></Link>}
                    {articleHoverStates[article._id] && <button onClick={() => { deleteArticle(article._id) }} className="rounded-xl bg-red-400 hover:bg-red-600 ease-in-out duration-300 cursor-pointer p-2">delete</button>}
                  </div>
                </div>
              ))}
              </div>
          </div>

          <h1 className="mt-10 mb-2 text-3xl font-bold">Article sections</h1>
          <div className="border-t-2 w-[20%] border-black" />
          {
            createArticleSection
              ?
              <div className="mt-10">
                <button className="mb-6 p-2 rounded-xl bg-gray-300 hover:bg-gray-400 duration-300 ease-in-out" onClick={() => {
                  setCreateArticleSection(false)
                  setArticleSectionTitle('')
                  setArticleSectionImage()
                  imageInput.current.value = ""
                  setArticleSectionImageClicked()
                  imageInputClicked.current.value = ""
                }
                }>Back</button>

                <form className="flex flex-col space-y-6" onSubmit={handleSubmitArticleSection}>

                  <div className="flex space-x-3">
                    <label>title:</label>
                    <input className="outline outline-1" value={articleSectionTitle} onChange={(e) => setArticleSectionTitle(e.target.value)} />
                  </div>


                  <div className="flex space-x-3">
                    <label>Image clicked:</label>
                    <input
                      type="file"
                      accept=".jpg, .jpeg, .png, .svg"
                      className="outline outline-1"
                      ref={imageInputClicked}
                      onChange={(e) => setArticleSectionImageClicked(e.target.files[0])} />
                  </div>



                  <div className="flex space-x-3">
                    <label>Image: </label>
                    <input
                      type="file"
                      accept=".jpg, .jpeg, .png, .svg"
                      className="outline outline-1"
                      ref={imageInput}
                      onChange={(e) => setArticleSectionImage(e.target.files[0])} />
                  </div>

                  <button type="submit" className="p-2 rounded-xl bg-green-400 hover:bg-green-600 w-min duration-300 ease-in-out">Submit</button>

                </form>

              </div>
              :
              <button className="mt-6 p-2 bg-green-200 hover:bg-green-400 ease-in-out duration-300 rounded-xl" onClick={() => setCreateArticleSection(true)}>Create article section +</button>
          }


          <div className="mt-6">
            <h2 className="font-bold text-lg flex items-end">List of article sections:</h2>
            <div className="flex space-x-6 w-[1000px] overflow-x-scroll border-4 p-2 rounded-xl">
            {
              articleSections.map((articleSection) => (
                <div key={articleSection._id}
                  className="p-2 bg-gray-200 rounded-xl min-w-[400px] min-h-[150px]"
                  onMouseEnter={() => handleArticleSectionMouseEnter(articleSection._id)}
                  onMouseLeave={() => handleArticleSectionMouseLeave(articleSection._id)}

                >
                  <h1 className="text-center font-bold">{articleSection.title}</h1>
                  <div className="flex justify-center items-center space-x-3">
                    <div className="flex items-center">
                      <p>Image (black icon):</p>
                      {<img src={`http://localhost:4000/public/${articleSection.image}`} />}
                    </div>

                    <div className="flex items-center">
                      <p>Image clicked (white icon):</p>
                      {<img src={`http://localhost:4000/public/${articleSection.imageClicked}`} />}
                    </div>
                  </div>

                  <div className="flex space-x-2 mt-4">
                    {articleSectionHoverStates[articleSection._id] && <Link to={`/admin/updateArticleSection/${articleSection._id}`}><div className="p-2 rounded-xl bg-green-400 hover:bg-green-600 duration-300 ease-in-out">Update</div></Link>}
                    {articleSectionHoverStates[articleSection._id] && <div onClick={() => deleteArticleSection(articleSection._id)} className="p-2 cursor-pointer rounded-xl bg-red-400 hover:bg-red-600 duration-300 ease-in-out">Delete</div>}
                  </div>
                </div>
              ))
            }
            </div>
          </div>


        </div>
      </div>


    </>
  );
}
