import React, { useEffect, useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import AdminSidePanel from "../components/AdminSidePanel";
import { Select, MenuItem } from "@mui/material";
import axios from "axios";

export default function AdminUpdateVideoGallery() {
  const { id } = useParams();
  const [videoGallery, setVideoGallery] = useState({});
  const [galleryTitle, setGalleryTitle] = useState("");
  const navigate = useNavigate();
  const imageInput = useRef(null);
  const [image, setImage] = useState();
  const [goal, setGoal] = useState("");

  const fetchVideoGallery = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/admin/videoGalleries/getVideoGallery/${id}`
      );
      const fetchedVideoGallery = response.data;
      setVideoGallery(fetchedVideoGallery);
      setGalleryTitle(fetchedVideoGallery.title);
      setGoal(parseInt(fetchedVideoGallery.goal));


    } catch (error) {
      console.error(`Error fetching video gallery: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchVideoGallery();
  }, [id]);

  const handleUpdateVideoGallery = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", galleryTitle);
      formData.append("image", image);
      formData.append("goal", goal);

      if (galleryTitle && image && goal) {
        const response = await axios.patch(
          `http://localhost:4000/admin/videoGalleries/updateVideoGallery/${id}`,
          formData
        );
        navigate("/admin/push-ups");
      } else {
        return null;
      }
    } catch (error) {
      console.error(`Error updating video gallery: ${error.message}`);
    }
  };

  return (
    <div className="flex space-x-[300px]">
      <AdminSidePanel />

      <div className="mt-8">
        <Link to="/admin/push-ups">
          <button className="p-2 rounded-lg bg-gray-200 hover:bg-gray-400 duration-300 ease-in-out">
            back
          </button>
        </Link>

        <form
          onSubmit={handleUpdateVideoGallery}
          className="flex flex-col items-start space-y-4 mt-8"
        >
          <div className="flex space-x-4">
            <div className="my-auto font-bold">Gallery name:</div>
            <input
              placeholder={videoGallery.title}
              value={galleryTitle}
              onChange={(e) => setGalleryTitle(e.target.value)}
              className="outline outline-1 rounded-md p-2"
 
            />
          </div>

          <div className="flex space-x-4">
            <label className="my-auto">goal(number of days):</label>
            <input
              placeholder={videoGallery.goal}
              type="number"
              className="outline outline-2 p-1 rounded-md"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
          </div>

          <div className="flex space-x-4">
            <label className="my-auto">image:</label>
            <input
              className="outline outline-2 p-1 rounded-md"
              type="file"
              accept=".jpg, .jpeg, .png, .svg"
              ref={imageInput}
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <button
            type="submit"
            className="p-2 rounded-lg bg-green-400 hover:bg-green-600 duration-300 ease-in-out"
          >
            update
          </button>
        </form>
      </div>
    </div>
  );
}
