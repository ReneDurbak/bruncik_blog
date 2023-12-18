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

  
  const fetchArticles = async() => {
    try {
      const response = await axios.get("http://localhost:4000/admin/articles/getAllArticles")
      const articles = response.data

      setArticles(articles)

    } catch (error) {
      console.error("Error fetching articles: ",error.message)
    } 
    
  }


  const fetchArticleSections = async() =>{
    try {
      const response = await axios.get("http://localhost:4000/admin/articleSections/getAllArticleSections")
      const articleSections = response.data
      setArticleSections(articleSections)

    } catch (error) {
      console.error("Error fetching article sections:", error.message)
    }
  }
  
  useEffect(()=>{
    fetchArticles()
    fetchArticleSections()
  },[])


  const handleArticleSectionChange = (event) => {
    setArticleSection(event.target.value);
    setSection(event.target.value)
  };
  
  



  

  const [title, setTitle] = useState("");
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [readingTime, setReadingTime] = useState("");
  const [label, setLabel] = useState("");
  const [isCreateArticle, setIsCreateArticle] = useState(false)

  const handleSubmit = async (e) => {
    console.log(articleSection)
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

  const handleMouseEnter = (articleId) => {
    setArticleHoverStates((prevStates) => ({
      ...prevStates,
      [articleId]: true,
    }));
  };
  
  const handleMouseLeave = (articleId) => {
    setArticleHoverStates((prevStates) => ({
      ...prevStates,
      [articleId]: false,
    }));
  };





  const deleteArticle = async(id) => {
    try {
      await axios.delete(`http://localhost:4000/admin/articles/deleteArticle/${id}`)
      fetchArticles()

    } catch (error) {
      console.error("Error deleting an article:",error.message)
      
    }
  }




  const [isUpdateArticle, setIsUpdateArticle] = useState(false)



  return (
    <>
      <div className="flex space-x-6">
        <AdminSidePanel />

        <div className="w-full text-left  mt-10">
          {
            isCreateArticle ?
            <>
            <button className="p-2 bg-gray-200 hover:bg-gray-400 duration-300 ease-in-out rounded-xl cursor-pointer" onClick={()=>setIsCreateArticle(false)}>Back</button>
  
            <div className="space-x-4 mt-10 flex flex-row items-end">
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
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
                  onChange={(newContent) => {}}
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
          </>
        : <button className="p-2 bg-green-200 hover:bg-green-400 duration-300 ease-in-out rounded-xl cursor-pointer" onClick={()=>setIsCreateArticle(true)}>Create new article +</button>
        
        }

          <div className="flex space-x-4 mt-4">
            {articles &&
              articles.map((article) => (
                <div
                  key={article._id}
                  onMouseEnter={() => handleMouseEnter(article._id)}
                  onMouseLeave={() => handleMouseLeave(article._id)}
                  className="p-2 bg-gray-200 rounded-lg cursor-pointer"
                >
                  {article.title}
                  <div className="flex space-x-4">
                    {articleHoverStates[article._id] && <Link  to={`/admin/updateArticle/${article._id}`}><button onClick={()=>setIsUpdateArticle(true)} className="rounded-xl bg-green-400 hover:bg-green-600 ease-in-out duration-300 cursor-pointer p-2">update</button></Link>}
                    {articleHoverStates[article._id] && <button onClick={()=>{deleteArticle(article._id)}} className="rounded-xl bg-red-400 hover:bg-red-600 ease-in-out duration-300 cursor-pointer p-2">delete</button>}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
