import { useState, useEffect, useRef } from "react";
import AdminSidePanel from "../components/AdminSidePanel";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import JoditEditor from "jodit-react";
import { Select, MenuItem, InputLabel } from "@mui/material";


export default function AdminUpdateArticle() {
  const [article, setArticle] = useState(null);
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [readingTime, setReadingTime] = useState("");
  const [label, setLabel] = useState("");
  const [title, setTitle] = useState("");
  const [articleSections, setArticleSections] = useState([]);
  const [articleSection, setArticleSection] = useState({})
  const [selectedArticleSection, setSelectedArticleSection] = useState({})
  const [section, setSection] = useState("")



    const fetchArticle = async() => {
      try {
        const response = await axios.get(
          `http://localhost:4000/admin/articles/getArticle/${id}`
        );
        const fetchedArticle = response.data;

        setArticle(fetchedArticle);
        setTitle(fetchedArticle.title)
        setContent(fetchedArticle.content)
        //setReadingTime(fetchedArticle.readingTime)
        setLabel(fetchedArticle.label)
        setSection(fetchedArticle.section._id)

      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };


  

    console.log(section)
  
  const fetchArticleSections = async() =>{
    try {
      const response = await axios.get("http://localhost:4000/admin/articleSections/getAllArticleSections")
      const fetchedArticleSections = response.data
      const filteredArticleSections = fetchedArticleSections.filter((section) => section._id !== articleSection._id)
      setArticleSections(fetchedArticleSections)

    } catch (error) {
      console.error("Error fetching article sections:", error.message)
    }
  }


  
  useEffect(() => {
    fetchArticle();
    fetchArticleSections();
  }, [id, articleSection?._id]);
  
  


  const handleArticleSectionChange = (sectionId) => {
    setSection(sectionId)
  };

  const handleSetArticleSection= (sectionId) => {
  setSelectedArticleSection(
  articleSections.filter((articleSection) => {
    if(articleSection._id === sectionId){
      return articleSection
    }
  })
  )
}


  const editor = useRef(null);
  const navigate = useNavigate();

  const handleUpdateArticle = async (e) => {
    e.preventDefault();
  
    try {

      await axios.patch(
        `http://localhost:4000/admin/articles/patchArticle/${id}`,
        {
          title,
          content,
          //readingTime,
          section: selectedArticleSection[0],
          label,
        }
      );
  
      setTitle("");
      setContent("");
      //setReadingTime("");
      setArticleSection("");
      setLabel("");
  
      navigate("/admin/articles");
    } catch (error) {
      console.error("Error updating an article: ", error.message);
    }
  };

  return (
    <div className="font-poppins flex space-x-[300px]">
      <AdminSidePanel />

      <div className="my-8 w-full ">
        <Link to="/admin/articles"><button className="p-2 rounded-xl bg-gray-200 hover:bg-gray-400 ease-in-out duration-300 my-2 cursor-pointer">Back</button></Link>
        {article && (
          <>
            <form
              className="flex flex-col space-y-4 mt-8"
              onSubmit={handleUpdateArticle}
            >
              <label>
                Title:
                <input
                  type="text"
                  className="rounded-md ml-2 w-[25%]"
                  placeholder={article.title}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>

              <label>
                Content:
                <div className="w-[1000px]">
                <JoditEditor
                  ref={editor}
                  value={content}
                  tabIndex={1}
                  onBlur={(newContent) => setContent(newContent)}
                  onChange={(newContent) => {}}
                  
                />
                </div>
              </label>

             {/* <label>
                Reading Time:
                <input
                  type="text"
                  className="outline outline-1"
                  placeholder={article.readingTime}
                  value={readingTime}
                  onChange={(e) => setReadingTime(e.target.value)}
                />
              </label>*/}

              <InputLabel id="articleSectionLabel">Article Section</InputLabel>
      <Select
        labelId="articleSectionLabel"
        id="articleSectionSelect"
        value={section}
        displayEmpty
        onChange={(e) => {handleArticleSectionChange(e.target.value); handleSetArticleSection(e.target.value)}}
        className='w-[25%]'
      >
        {articleSections && articleSections.map((section) => (
          <MenuItem key={section._id} value={section._id}>
            {section && section.title}
          </MenuItem>
        ))}
        
      </Select>

              <label>
                Label:
                <input
                  type="text"
                  className="ml-2 rounded-md mb-8"
                  placeholder={article.label}
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
          </>
        )}
      </div>
    </div>
  );
}
