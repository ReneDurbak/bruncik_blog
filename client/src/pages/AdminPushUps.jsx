import { useState, useEffect, useRef } from "react";
import AdminSidePanel from "../components/AdminSidePanel";
import axios from "axios";
import { Form, Link } from "react-router-dom";
import { io } from "socket.io-client";
import { Select, InputLabel, MenuItem } from "@mui/material";
import Slider from "react-slick";
import "../slick.css"
import "../slick-theme.css"
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

export default function AdminPushUps() {
  const [videos, setVideos] = useState([]);
  const [urlLink, setUrlLink] = useState("");
  const [galleryUrlLink, setGalleryUrlLink] = useState("");
  const [goal, setGoal] = useState("");
  const [isCreateVideo, setIsCreateVideo] = useState(false);
  const [isCreateVideoGallery, setIsCreateVideoGallery] = useState(false);
  const imageInput = useRef(null)
  const [image, setImage] = useState()

  const [videoHoverStates, setVideoHoverStates] = useState({});

  const handleVideoMouseEnter = (videoId) => {
    setVideoHoverStates(() => ({
      [videoId]: true,
    }));
  };

  const handleVideoMouseLeave = (videoId) => {
    setVideoHoverStates(() => ({
      [videoId]: false,
    }));
  };

  const [allVideos, setAllVideos] = useState([])

  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/admin/videos/getAllVideos"
      );
      const fetchedVideos = response.data;

      setAllVideos(fetchedVideos)
      setVideos(fetchedVideos.filter((video) => video.video_gallery._id === videoGallerySelect) );
      


    } catch (error) {
      console.error("Cannot fetch videos:", error);
    }
  };

  

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:4000");
    setSocket(newSocket);

    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, []);

  const sendToSocket = () => {
    if (socket) {
      const message =
        videos.length > 0
          ? `New video posted! On day count: ${
              videos.slice(-1)[0].day_count + 1
            }!`
          : "New video posted! On day count: 1!";
      socket.emit("videoCreated", { message, createdAt: new Date() });
    }
  };




  const [videoGallerySelectFilter, setVideoGallerySelectFilter] = useState(null);

  const handleGallerySelectFilterChange = (event) => {
    setVideoGallerySelectFilter(event.target.value);
  };


  const [videoGallerySelect, setVideoGallerySelect] = useState(null);

  const handleGallerySelectChange = (event) => {
    setVideoGallerySelect(event.target.value);
  };






  const handleCreateVideo = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/admin/videos/postVideo",
        {
          url_link: urlLink,
          video_gallery: videoGallerySelectFilter,
        }
      );

      fetchVideos();

      setUrlLink("");
      setVideoGallerySelectFilter(null)
      setIsCreateVideo(false);

      sendToSocket();
    } catch (error) {
      console.error("Cannot create a video:", error);
    }
  };

  const deleteVideo = async (id) => {
    try {
      const deletedVideo = await axios.delete(
        `http://localhost:4000/admin/videos/deleteVideo/${id}`
      );
      fetchVideos();
    } catch (error) {
      console.error("Cannot delete video:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [videoGallerySelect]);




  const [videoGallery, setVideoGallery] = useState([]);

  const fetchVideoGalleries = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/admin/videoGalleries/getAllVideoGalleries"
      );
      const fetchedVideoGalleries = response.data;


      setVideoGallery(fetchedVideoGalleries);
      setVideoGallerySelect(fetchedVideoGalleries[0] === undefined ? null : fetchedVideoGalleries[0]._id)

    } catch (error) {
      console.error("Cannot fetch videos:", error);
    }
  };






  useEffect(() => {
    fetchVideoGalleries();
  }, []);

  const handleCreateVideoGallery = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData()

      formData.append("title", galleryUrlLink)
      formData.append("image", image)
      formData.append("goal", goal)


      if(galleryUrlLink && goal && image){
      await axios.post(
        "http://localhost:4000/admin/videoGalleries/createVideoGallery",
        formData,
      );
      }else{
        return null
      }


      fetchVideoGalleries();
      setGalleryUrlLink("");
      setGoal("")
      setImage()
  
    } catch (error) {
      console.error("Cannot create video gallery:", error);
    }
  };

  const [videoGalleryHoverStates, setVideoGalleryHoverStates] = useState({});

  const handleVideoGalleryMouseEnter = (id) => {
    setVideoGalleryHoverStates(() => ({
      [id]: true,
    }));
  };

  const handleVideoGalleryMouseLeave = (id) => {
    setVideoGalleryHoverStates(() => ({
      [id]: false,
    }));
  };


  const deleteVideoGallery = async(id) => {
    
    const numberOfAssociatedVideos = allVideos.some((video) => (video.video_gallery._id === id))
    
    if(numberOfAssociatedVideos === false){
    try {
      const response = await axios.delete(`http://localhost:4000/admin/videoGalleries/deleteVideoGallery/${id}`)
      fetchVideoGalleries()

    } catch (error) {
      console.error(`error deleting video gallery: ${error.message}`)
    }
  }
  }




  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div>
      <FaChevronRight className=" rounded-2xl text-black z-[10] cursor-pointer absolute right-[-40px] top-[40%]" size={24} style={{ ...style }}   onClick={onClick}/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div>
        <FaChevronLeft className=" rounded-2xl text-black z-[10] cursor-pointer absolute left-[-40px] top-[40%]" size={24} style={{ ...style }}   onClick={onClick}/>
        </div>
    );
  }

  
  
  
  
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide:0,
      swipeToSlide: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };



    var settings_V2 = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide:0,
      swipeToSlide: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };




  return (
    <div className="flex space-x-[300px]">
      <AdminSidePanel />

      <div className="w-full mt-10 mb-20">
        <div className="mt-10">
          <h1 className="mt-10 mb-2 text-3xl font-bold">Video galleries</h1>
          <div className="border-t-2 w-[20%] border-black" />

          <Slider 
              {...settings}
              className="w-[75%]  border-4 p-2  rounded-xl mt-6"
          >
            {videoGallery &&
              videoGallery.map((videoGallery) => (
                <div
                  className="bg-gray-200 rounded-md p-2  min-h-[65px]"
                  key={videoGallery._id}
                  onMouseEnter={() =>
                    handleVideoGalleryMouseEnter(videoGallery._id)
                  }
                  onMouseLeave={() =>
                    handleVideoGalleryMouseLeave(videoGallery._id)
                  }
                >
                  <span className="whitespace-nowrap flex space-x-2">
                    <div>
                      <strong>Gallery name:</strong>
                    </div>{" "}
                    <div>{videoGallery.title}</div>
                  </span>

                  <span className="whitespace-nowrap flex space-x-2">
                    <div>
                      <strong>Goal:</strong>
                    </div>{" "}
                    <div>{videoGallery.goal}</div>
                  </span>

                  <div className="">
                    <img className="w-[50px] h-460px] rounded-[45%]" src={`http://localhost:4000/public/videoGallery/${videoGallery.image}`}/>
                  </div>

                  
                  <div className="flex space-x-4">
                  {videoGalleryHoverStates[videoGallery._id] && (
                    <Link to={`/admin/updateVideoGallery/${videoGallery._id}`}>
                      <button className="p-2 bg-green-400 hover:bg-green-600 ease-in-out duration-300 rounded-xl mt-2">
                        update
                      </button>
                    </Link>
                  )}

                  {videoGalleryHoverStates[videoGallery._id] && (
                    <div>
                      <button onClick={() => {deleteVideoGallery(videoGallery._id)} } className="p-2 bg-red-400 hover:bg-red-600 ease-in-out duration-300 rounded-xl mt-2">
                        delete
                      </button>
                    </div>
                  )}
                  </div>


                </div>
              ))}
              </Slider>


          <button
            className={`${
              isCreateVideoGallery ? "hidden" : "block"
            } p-2 bg-green-400 hover:bg-green-600 ease-in-out duration-300 rounded-xl mt-4`}
            onClick={() => setIsCreateVideoGallery(true)}
          >
            Add video gallery
          </button>

          <form
            onSubmit={handleCreateVideoGallery}
            className={`${
              isCreateVideoGallery ? "block" : "hidden"
            } flex flex-col mt-8 space-y-4`}
          >
            <div className="flex space-x-4">
              <label className="my-auto">video gallery name:</label>
              <input
                className="outline outline-2 p-1 rounded-md"
                value={galleryUrlLink}
                onChange={(e) => setGalleryUrlLink(e.target.value)}
              />
            </div>

            <div className="flex space-x-4">
              <label className="my-auto">goal(number of days):</label>
              <input
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




            <div className="flex space-x-2">
              <div
                className="p-2 rounded-xl bg-gray-300 hover:bg-gray-400 ease-in-out duration-300"
                onClick={() => {setIsCreateVideoGallery(false); setGalleryUrlLink('')}}
              >
                cancel
              </div>


              <button
                type="submit"
                className="p-2 rounded-xl bg-green-400 hover:bg-green-500 ease-in-out duration-300"
                onClick={() => setIsCreateVideoGallery(false)}
              >
                send
              </button>
            </div>
          </form>
        </div>

        <div className="mt-20">
          <h1 className="mt-10 mb-2 text-3xl font-bold">Videos</h1>
          <div className="border-t-2 mb-10 w-[20%] border-black" />

          <div className="flex space-x-4">
            <p className="my-auto">Choose gallery:</p>
          <Select
                    id="videoGallerySelect"
                    value={videoGallerySelect}
                    onChange={handleGallerySelectChange}
                  >
                    {videoGallery &&
                      videoGallery.map((videoGallery) => (
                        <MenuItem
                          key={videoGallery._id}
                          value={videoGallery._id}
                        >
                          {videoGallery.title}
                        </MenuItem>
                      ))}
                  </Select>
                

          </div>

          <Slider 
              {...settings_V2}
              className="w-[50%]  border-4 p-2  rounded-xl mt-6"
          >
            {videos &&
              videos.map((video) => (
                <div
                  className="relative rounded-lg bg-gray-200 p-4  max-w-[700px]"
                  key={video._id}
                  onMouseEnter={() => handleVideoMouseEnter(video._id)}
                  onMouseLeave={() => handleVideoMouseLeave(video._id)}
                >
                 
                  <p>
                    <strong>day count:</strong> {video.day_count}
                  </p>
                  <div className={`${video.video_gallery ? 'text-black' : 'text-red-400'}`}>
                    <strong>Video Gallery: </strong>
                    {
                      video.video_gallery && videoGallery && videoGallery.find(
                        (gallery) => gallery._id === video.video_gallery._id
                      )?.title 
                    }

                    
                      {video.video_gallery ? null : <div className="text-red-400">Missing video gallery!</div>}
                    
                  </div>

                  <div className="flex space-x-4 mt-2">
                    {videoHoverStates[video._id] && (
                      <Link to={`/admin/updateVideo/${video._id}`}>
                        <button className="p-2 cursor-pointer rounded-xl bg-green-400  hover:bg-green-600 duration-300 ease-in-out ">
                          Update
                        </button>
                      </Link>
                    )}

                    {videos.slice(-1)[0]._id === video._id &&
                      videoHoverStates[video._id] && (
                        <div
                          onClick={() => deleteVideo(video._id)}
                          className="p-2 cursor-pointer rounded-xl bg-red-400 hover:bg-red-600 duration-300 ease-in-out "
                        >
                          Delete
                        </div>
                      )}
                  </div>
                </div>
              ))}
          </Slider>

          <button
            className={`${
              isCreateVideo ? "hidden" : "block"
            } p-2 bg-green-400 hover:bg-green-600 ease-in-out duration-300 rounded-xl mt-4`}
            onClick={() => setIsCreateVideo(true)}
          >
            Add video
          </button>

          {isCreateVideo ? (
            <>
              <form
                onSubmit={handleCreateVideo}
                className="mt-8 space-y-4 w-[250px]"
              >
                <div className="flex flex-col space-y-2">
                  <div className="my-auto">Url link:</div>
                  <input
                    className="rounded-md"
                    name="video_url"
                    type="text"
                    value={urlLink}
                    onChange={(e) => setUrlLink(e.target.value)}
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="">Video gallery:</label>
                  <Select
                    id="videoGallerySelect"
                    value={videoGallerySelectFilter}
                    onChange={handleGallerySelectFilterChange}
                    displayEmpty
                  >
                    {videoGallery &&
                      videoGallery.map((videoGallery) => (
                        <MenuItem
                          key={videoGallery._id}
                          value={videoGallery._id}
                        >
                          {videoGallery.title}
                        </MenuItem>
                      ))}
                  </Select>
                </div>

                <div className="flex space-x-2 mt-8">
                  <button
                    onClick={() => {
                      setIsCreateVideo(false);
                      setUrlLink("");
                    }}
                    className="p-2 rounded-xl bg-gray-200"
                  >
                    cancel
                  </button>
                  <button type="submit" className="p-2 rounded-xl bg-green-200">
                    send
                  </button>
                </div>
              </form>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
