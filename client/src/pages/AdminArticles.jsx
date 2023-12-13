import React from 'react'
import JoditEditor from 'jodit-react';
import axios from "axios"
import { useState, useRef } from 'react';
import AdminSidePanel from '../components/AdminSidePanel';



export default function AdminArticles({articles}) {
    


const [title, setTitle] = useState('');
const editor = useRef(null);
const [content, setContent] = useState('');
const [readingTime, setReadingTime] = useState('');
const [section, setSection] = useState('');
const [label, setLabel] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();

  try {

    const response = await axios.post("http://localhost:4000/admin/articles/postArticle", {
      title,
      content,
      readingTime,
      section,
      label,
    });

    //console.log(response.data);

    setTitle('');
    setContent('');
    setReadingTime('');
    setSection('');
    setLabel('');
  } catch (error) {
    console.error("Error posting an article: ", error.message);
  }
};




  return (
    <>
    <div className='flex space-x-6'>
      <AdminSidePanel/>

      
    <div className="w-full text-left  mt-10">
          <div className="space-x-4 mt-10 flex flex-row items-end">
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" className="outline outline-1" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>

      <label>
        Content:
        <JoditEditor
			ref={editor}
			value={content}
			tabIndex={1}
			onBlur={newContent => setContent(newContent)} 
			onChange={newContent => {}}
		/>
      </label>

      <label>
        Reading Time:
        <input type="text" className="outline outline-1" value={readingTime} onChange={(e) => setReadingTime(e.target.value)} />
      </label>

      <label>
        Section:
        <input type="text" className="outline outline-1" value={section} onChange={(e) => setSection(e.target.value)} />
      </label>

      <label>
        Label:
        <input type="text" className="outline outline-1" value={label} onChange={(e) => setLabel(e.target.value)} />
      </label>

      <button type="submit" className="p-2 bg-blue-400 hover:bg-blue-500 w-min rounded-[30px]">Submit</button>
    </form>
          </div>

          <div>
            {
              articles && articles.map((article)=> (
                <div key={article._id}>{article.title}</div>
              ))
            }
          </div>
        </div>
    </div>

      
    </>
  )
}
