import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AdminSidePanel from "../components/AdminSidePanel";
import { useNavigate, Link } from "react-router-dom";

export default function AdminUpdateArticleSection() {
  const { id } = useParams();
  const [articleSectionTitle, setArticleSectionTitle] = useState("");
  const [articleSectionImage, setArticleSectionImage] = useState();
  const [articleSectionImageClicked, setArticleSectionImageClicked] = useState();
  const [articleSection, setArticleSection] = useState([]);



  const fetchArticleSection = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/admin/articleSections/getArticleSection/${id}`
      );
      const singleArticleSection = response.data;
      setArticleSection(singleArticleSection);
      setArticleSectionTitle(singleArticleSection.title)



    } catch (error) {
      console.error("Error fetching article section", error.message);
    }
  };

  useEffect(() => {
    fetchArticleSection();
  }, [id]);

  const navigate = useNavigate();

  const handleSubmitArticleSection = async (e) => {
    e.preventDefault();

    try {
  
      const formData = new FormData()
      formData.append('image', articleSectionImage)
      formData.append('imageClicked', articleSectionImageClicked)
      formData.append('title', articleSectionTitle);

      
      await axios.patch(`http://localhost:4000/admin/articleSections/updateArticleSection/${id}`, formData);

      setArticleSectionTitle("");
      setArticleSectionImage();
      setArticleSectionImageClicked();

      navigate("/admin/articles");
    } catch (error) {
      console.error("Error posting an article section", error.message);
    }
  };

  return (
    <div className="flex space-x-6">
      <AdminSidePanel />
      <div className="w-full">
        <Link to="/admin/articles">
          <button className="p-2 rounded-xl bg-gray-200 hover:bg-gray-400 ease-in-out duration-300 mt-8 cursor-pointer">
            Back
          </button>
        </Link>

        <form
          className="flex flex-col space-y-6 mt-10"
          onSubmit={handleSubmitArticleSection}
        >
          <div className="flex space-x-3">
            <label>title:</label>
            <input
              className="outline outline-1"
              placeholder={articleSection.title}
              value={articleSectionTitle}
              onChange={(e) => setArticleSectionTitle(e.target.value)}
            />
          </div>

          <div className="flex space-x-3">
            <label>Image clicked (white icon):</label>
            <input
              type="file"
              accept=".jpg, .jpeg, .png, .svg"
              className="outline outline-1"
              placeholder={articleSection.imageUrlClicked}
              onChange={(e) => setArticleSectionImageClicked(e.target.files[0])}
            />
          </div>

          <div className="flex space-x-3">
            <label>Image (black icon): </label>
            <input
              type="file"
              accept=".jpg, .jpeg, .png, .svg"
              className="outline outline-1"
              placeholder={articleSection.imageUrl}
              onChange={(e) => setArticleSectionImage(e.target.files[0])}
            />
          </div>

          
   
              <div key={articleSection._id}
                   className="p-2 bg-gray-200 rounded-xl w-[20%]"
              >

                    <div className="flex justify-center items-center space-x-3">
                      <div className="flex items-center">
                        <p>Image:</p>
                        {<img src={articleSection.image && `http://localhost:4000/public/${articleSection.image}`}/>}
                      </div>
                      
                      <div className="flex items-center">
                        <p>Image clicked:</p>
                        {<img src={articleSection.imageClicked && `http://localhost:4000/public/${articleSection.imageClicked}`}/>}
                      </div>
                    </div>

              </div>
            
      

          <button
            type="submit"
            className="p-2 rounded-xl bg-green-400 hover:bg-green-600 w-min duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
