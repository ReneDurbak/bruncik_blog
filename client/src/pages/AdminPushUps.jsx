import { useState, useEffect, useRef } from "react";
import AdminSidePanel from "../components/AdminSidePanel";
import axios from "axios";
import { Form, Link } from "react-router-dom";
import { io } from "socket.io-client";
import { Select, InputLabel, MenuItem, sliderClasses } from "@mui/material";
import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { BsTrash3 } from "react-icons/bs";

export default function AdminPushUps() {
  const [videos, setVideos] = useState([]);
  const [urlLink, setUrlLink] = useState("");
  const [galleryName, setGalleryName] = useState("");
  const [goal, setGoal] = useState("");
  const [isCreateVideo, setIsCreateVideo] = useState(false);
  const [isCreateVideoGallery, setIsCreateVideoGallery] = useState(false);
  const imageInput = useRef(null);
  const [image, setImage] = useState();

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

  const [allVideos, setAllVideos] = useState([]);
  const [isGalleryEmpty, setIsGalleryEmpty] = useState(false);

  console.log(isGalleryEmpty);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/admin/videos/getAllVideos"
      );
      const fetchedVideos = response.data;

      setAllVideos(fetchedVideos);
      setVideos(
        fetchedVideos.filter(
          (video) => video.video_gallery._id === videoGallerySelect
        )
      );

      const filteredVideos = fetchedVideos.filter(
        (video) => video.video_gallery._id === videoGallerySelect
      );

      if (filteredVideos.length === 0) {
        setIsGalleryEmpty(true);
      } else {
        setIsGalleryEmpty(false);
      }
    } catch (error) {
      console.error("Cannot fetch videos:", error);
    }
  };

  const [videoGallerySelectFilter, setVideoGallerySelectFilter] =
    useState(null);

  const handleGallerySelectFilterChange = (event) => {
    setVideoGallerySelectFilter(event.target.value);
  };

  const [videoGallerySelect, setVideoGallerySelect] = useState(null);

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
      setVideoGallerySelect(
        fetchedVideoGalleries[0] === undefined
          ? null
          : fetchedVideoGalleries[0]._id
      );
    } catch (error) {
      console.error("Cannot fetch videos:", error);
    }
  };

  useEffect(() => {
    fetchVideoGalleries();
  }, []);

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

  const sendToSocketVideo = () => {
    if (socket) {
      const selectedVideoGallery = videoGallery.find(
        (videoGallery) => videoGallery._id === videoGallerySelectFilter
      );
      const videos = allVideos.filter(
        (video) => video.video_gallery._id === selectedVideoGallery._id
      );
      const message =
        videos.length > 0
          ? `New video posted from <strong>${
              selectedVideoGallery.title
            }</strong>! On day count: <strong>${
              videos.slice(-1)[0].day_count + 1
            }</strong>!`
          : `New video posted from <strong>${selectedVideoGallery.title}</strong>! On day count: <strong>1</strong>!`;

      const videoGalleryImage = selectedVideoGallery.image;
      socket.emit("videoCreated", {
        message,
        videoGalleryImage,
        createdAt: new Date(),
      });
    }
  };

  const sendToSocketVideoGallery = (videoGalleryImage) => {
    if (socket) {
      const message = `New video gallery created: ${galleryName}!`;
      socket.emit("videoCreated", {
        message,
        videoGalleryImage,
        createdAt: new Date(),
      });
    }
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
      setVideoGallerySelectFilter(null);
      setIsCreateVideo(false);

      sendToSocketVideo();
    } catch (error) {
      console.error("Cannot create a video:", error);
    }
  };

  const handleCreateVideoGallery = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", galleryName);
      formData.append("image", image);
      formData.append("goal", goal);

      if (galleryName && goal && image) {
        const response = await axios.post(
          "http://localhost:4000/admin/videoGalleries/createVideoGallery",
          formData
        );

        const data = response.data;
        const videoGalleryImageFileName = data.image;
        sendToSocketVideoGallery(videoGalleryImageFileName);
      }

      fetchVideoGalleries();
      setGalleryName("");
      setGoal("");
      setImage();
      document.getElementById("videoGalleryPhoto").value = "";
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

  const deleteVideoGallery = async (id) => {
    const numberOfAssociatedVideos = allVideos.some(
      (video) => video.video_gallery._id === id
    );

    if (numberOfAssociatedVideos === false) {
      try {
        const response = await axios.delete(
          `http://localhost:4000/admin/videoGalleries/deleteVideoGallery/${id}`
        );
        fetchVideoGalleries();
      } catch (error) {
        console.error(`error deleting video gallery: ${error.message}`);
      }
    }
  };

  function NextArrowVideoGalleries(props) {
    const { className, style, onClick } = props;
    const totalSlides = videoGallery.length;
    const slidesToShow = slideSettingsVideoGalleries.slidesToShow;
    const isLastSlide =
      currentSlideVideoGalleries >= totalSlides - slidesToShow;

    return (
      <div>
        <FaChevronRight
          className={`${
            isLastSlide ? "invisible" : ""
          } rounded-2xl text-black z-[10] cursor-pointer absolute right-[-40px] top-[40%]  `}
          size={24}
          style={{ ...style }}
          onClick={onClick}
        />
      </div>
    );
  }

  function PrevArrowVideoGalleries(props) {
    const { className, style, onClick } = props;
    return (
      <div>
        <FaChevronLeft
          className={`${
            currentSlideVideoGalleries === 0 ? "invisible" : ""
          } rounded-2xl text-black z-[10] cursor-pointer absolute left-[-40px] top-[40%]`}
          size={24}
          style={{ ...style }}
          onClick={onClick}
        />
      </div>
    );
  }

  function NextArrowVideos(props) {
    const { className, style, onClick } = props;
    const totalSlides = videos.length;
    const slidesToShow = slideSettingsVideos.slidesToShow;
    const isLastSlide = currentSlideVideos >= totalSlides - slidesToShow;

    return (
      <div>
        <FaChevronRight
          className={`${
            isLastSlide ? "invisible" : ""
          } rounded-2xl text-black z-[10] cursor-pointer absolute right-[-40px] top-[40%]  `}
          size={24}
          style={{ ...style }}
          onClick={onClick}
        />
      </div>
    );
  }

  function PrevArrowVideos(props) {
    const { className, style, onClick } = props;
    return (
      <div>
        <FaChevronLeft
          className={`${
            currentSlideVideos === 0 ? "invisible" : ""
          } rounded-2xl text-black z-[10] cursor-pointer absolute left-[-40px] top-[40%]`}
          size={24}
          style={{ ...style }}
          onClick={onClick}
        />
      </div>
    );
  }

  const [currentSlideVideoGalleries, setCurrentSlideVideoGalleries] =
    useState(0);
  const sliderVideoGalleryRef = useRef(null);

  var slideSettingsVideoGalleries = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    nextArrow: <NextArrowVideoGalleries />,
    prevArrow: <PrevArrowVideoGalleries />,
    afterChange: (current) => setCurrentSlideVideoGalleries(current),
    responsive: [
      {
        breakpoint: 1024,
        slideSettingsVideoGalleries: {
          slidesToShow: 2,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        slideSettingsVideoGalleries: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        slideSettingsVideoGalleries: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [currentSlideVideos, setCurrentSlideVideos] = useState(0);
  const sliderVideosRef = useRef(0);
  const [hasSetPosition, setHasSetPosition] = useState(false);

  // console.log(currentSlideVideos)

  // useEffect(() => {
  //   if (sliderVideosRef.current && !hasSetPosition) {

  //     sliderVideosRef.current?.slickGoTo(0);
  //     setHasSetPosition(true);

  //   }
  // }, [hasSetPosition, sliderVideosRef]);

  const handleGallerySelectChange = (event) => {
    setVideoGallerySelect(event.target.value);
    if (currentSlideVideos !== 0) {
      if (sliderVideosRef.current) {
        sliderVideosRef.current.slickGoTo(0);
      }
    }
  };

  const slideSettingsVideos = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    swipeToSlide: false,
    nextArrow: <NextArrowVideos />,
    prevArrow: <PrevArrowVideos />,
    afterChange: (current) => setCurrentSlideVideos(current),
  };

  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //       dots: true,
  //     },
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       initialSlide: 2,
  //     },
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],

  return (
    <div className="flex space-x-[300px]">
      <AdminSidePanel />

      <div className="w-full mt-10 mb-20">
        <div className="mt-10">
          <h1 className="mt-10 mb-2 text-3xl font-bold">Video galleries</h1>
          <div className="border-t-2 w-[20%] border-black" />

          <Slider
            {...slideSettingsVideoGalleries}
            className="w-[65%]  border-4 p-2  rounded-xl mt-6"
            ref={sliderVideoGalleryRef}
          >
            {videoGallery &&
              videoGallery.map((videoGallery) => (
                <div
                  className="bg-gray-200 rounded-md p-2  h-[170px]"
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
                    <img
                      className="w-[50px] max-h-[50px] h-460px] rounded-[45%]"
                      src={`http://localhost:4000/public/videoGallery/${videoGallery.image}`}
                    />
                  </div>

                  <div className="flex space-x-2">
                    {videoGalleryHoverStates[videoGallery._id] && (
                      <Link
                        to={`/admin/updateVideoGallery/${videoGallery._id}`}
                      >
                        <button className="p-2 bg-green-400 hover:bg-green-600 ease-in-out duration-300 rounded-xl mt-4">
                          <FaPencil size={20} />
                        </button>
                      </Link>
                    )}

                    {videoGalleryHoverStates[videoGallery._id] && (
                      <div>
                        <button
                          onClick={() => {
                            deleteVideoGallery(videoGallery._id);
                          }}
                          className="p-2 bg-red-400 hover:bg-red-600 ease-in-out duration-300 rounded-xl mt-4"
                        >
                          <BsTrash3 size={20} />
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
                value={galleryName}
                onChange={(e) => setGalleryName(e.target.value)}
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
                id="videoGalleryPhoto"
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
                onClick={() => {
                  setIsCreateVideoGallery(false);
                  setGalleryName("");
                  setGoal("");
                  setImage();
                  document.getElementById("videoGalleryPhoto").value = "";
                }}
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
              MenuProps={{
                disableScrollLock: true,
              }}
              id="videoGallerySelect"
              value={videoGallerySelect}
              onChange={handleGallerySelectChange}
            >
              {videoGallery &&
                videoGallery.map((videoGallery) => (
                  <MenuItem key={videoGallery._id} value={videoGallery._id}>
                    {videoGallery.title}
                  </MenuItem>
                ))}
            </Select>
          </div>

          {!isGalleryEmpty ? (
            <Slider
              {...slideSettingsVideos}
              className="w-[50%] border-4 p-2  rounded-xl mt-6"
              ref={sliderVideosRef}
            >
              {videos &&
                videos.map((video) => (
                  <div
                    className="relative rounded-lg bg-gray-200 p-2 h-[145px]"
                    key={video._id}
                    onMouseEnter={() => handleVideoMouseEnter(video._id)}
                    onMouseLeave={() => handleVideoMouseLeave(video._id)}
                  >
                    <p>
                      <strong>Day count:</strong> {video.day_count}
                    </p>
                    <div
                      className={`${
                        video.video_gallery ? "text-black" : "text-red-400"
                      }`}
                    >
                      <strong>Video Gallery: </strong>
                      {video.video_gallery &&
                        videoGallery &&
                        videoGallery.find(
                          (gallery) => gallery._id === video.video_gallery._id
                        )?.title}

                      {video.video_gallery ? null : (
                        <div className="text-red-400">
                          Missing video gallery!
                        </div>
                      )}
                    </div>

                    <div className="flex space-x-2 mt-4">
                      {videoHoverStates[video._id] && (
                        <Link to={`/admin/updateVideo/${video._id}`}>
                          <button className="p-2 cursor-pointer rounded-xl bg-green-400  hover:bg-green-600 duration-300 ease-in-out ">
                            <FaPencil size={20} />
                          </button>
                        </Link>
                      )}

                      {videos.slice(-1)[0]._id === video._id &&
                        videoHoverStates[video._id] && (
                          <div
                            onClick={() => deleteVideo(video._id)}
                            className="p-2 cursor-pointer rounded-xl bg-red-400 hover:bg-red-600 duration-300 ease-in-out "
                          >
                            <BsTrash3 size={20} />
                          </div>
                        )}
                    </div>
                  </div>
                ))}
            </Slider>
          ) : null}

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
                    MenuProps={{
                      disableScrollLock: true,
                    }}
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
