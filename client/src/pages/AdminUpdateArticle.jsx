import { useState, useEffect, useRef } from "react";
import AdminSidePanel from "../components/AdminSidePanel";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import JoditEditor from "jodit-react";

export default function AdminUpdateArticle() {
  const [article, setArticle] = useState(null);
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [readingTime, setReadingTime] = useState("");
  const [section, setSection] = useState("");
  const [label, setLabel] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/admin/articles/getArticle/${id}`
        );
        const fetchedArticle = response.data;

        setArticle(fetchedArticle);
        setTitle(fetchedArticle.title)
        setContent(fetchedArticle.content)
        setReadingTime(fetchedArticle.readingTime)
        setLabel(fetchedArticle.label)
        setSection(fetchedArticle.section)
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, []);


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
          readingTime,
          section,
          label,
        }
      );

      setTitle("");
      setContent("");
      setReadingTime("");
      setSection("");
      setLabel("");

      navigate("/admin/articles")
    } catch (error) {
      console.error("Error updating an article: ", error.message);
    }
  };

  return (
    <div className="flex space-x-6">
      <AdminSidePanel />

      <div>
        <Link to="/admin/articles">Back</Link>
        {article && (
          <>
            <form
              className="flex flex-col space-y-4"
              onSubmit={handleUpdateArticle}
            >
              <label>
                Title:
                <input
                  type="text"
                  className="outline outline-1"
                  placeholder={article.title}
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
                  placeholder={article.readingTime}
                  value={readingTime}
                  onChange={(e) => setReadingTime(e.target.value)}
                />
              </label>

              <label>
                Section:
                <input
                  type="text"
                  className="outline outline-1"
                  placeholder={article.section}
                  value={section}
                  onChange={(e) => setSection(e.target.value)}
                />
              </label>

              <label>
                Label:
                <input
                  type="text"
                  className="outline outline-1"
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
