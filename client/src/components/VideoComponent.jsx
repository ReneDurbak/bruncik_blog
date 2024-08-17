import { useState, useEffect } from "react";
import Heart from "@react-sandbox/heart";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setActivePopupVideoId } from "../slices/popupSlice";
import { showLogin } from "../slices/uiSlice";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function VideoComponent({ video, likes, onLikesChange }) {
  const [likedVideos, setLikedVideos] = useState({});
  const { userInfo } = useSelector((state) => state.auth);
  const [videoCount, setVideoCount] = useState(0);
  const activePopupVideoId = useSelector(
    (state) => state.popup.activePopupVideoId
  );
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    dispatch(showLogin());
  };

  useEffect(() => {
    const userLikedVideos = likes
      .filter((like) => like.userId === userInfo._id)
      .reduce((acc, like) => {
        acc[like.videoId] = true;
        return acc;
      }, {});
    setLikedVideos(userLikedVideos);
  }, [likes, userInfo && userInfo._id]);

  useEffect(() => {
    const count = likes.filter((like) => like.videoId === video._id).length;
    setVideoCount(count);
  }, [likes, video._id]);

  const postLike = async (videoId) => {
    try {
      await axios.post("http://localhost:4000/likes/like", {
        videoId,
        userId: userInfo._id,
      });

      setVideoCount((prevCount) => prevCount + 1);
      onLikesChange();
    } catch (error) {
      console.error(`Cannot post like: ${error}`);
    }
  };

  const deleteLike = async (videoId) => {
    try {
      await axios.delete(`http://localhost:4000/likes/like`, {
        data: {
          videoId,
          userId: userInfo._id,
        },
      });

      setVideoCount((prevCount) => prevCount - 1);
      onLikesChange();
    } catch (error) {
      console.error(error);
    }
  };

  function extractVideoSrcFromIframe(iframeTag) {
    if (!iframeTag) return null;

    const srcRegex = /src="([^"]*)"/;
    const match = iframeTag.match(srcRegex);

    return match ? match[1] : null;
  }

  const toggleLike = (videoId) => {
    setLikedVideos((prev) => ({
      ...prev,
      [videoId]: !prev[videoId],
    }));

    if (likedVideos[videoId]) {
      deleteLike(videoId);
    } else {
      postLike(videoId);
    }
  };

  const handleLikeClick = () => {
    if (!userInfo) {
      dispatch(setActivePopupVideoId(video._id));
    } else {
      toggleLike(video._id);
    }
  };

  const isTablet = useMediaQuery({ query: "(min-width: 768px )" });
  const isBigMobile = useMediaQuery({ query: "(min-width: 640px )" });
  const isLaptop = useMediaQuery({ query: "(min-width: 1024px )" });


  return (
    <div
      className="relative aspect-[4/7] w-full rounded-t-[30px]"
      key={video._id}
    >
      <div
        className={`w-full px-2 bg-[#242424] text-white h-full absolute left-0 top-0 rounded-t-[30px] flex text-center justify-center items-center ${
          activePopupVideoId === video._id ? "block" : "hidden"
        }`}
      >
        <p className="xl:text-base text-sm">
          <strong
            onClick={() => handleLoginClick()}
            className="hover:underline underline-offset-4 cursor-pointer"
          >
            Login
          </strong>{" "}
          or{" "}
          <Link to="/register">
            <strong className="hover:underline underline-offset-4 cursor-pointer">
              Register
            </strong>{" "}
          </Link>
          to like videos
        </p>
      </div>

      <iframe
        className="aspect-[4/7] w-full rounded-t-[30px]"
        src={extractVideoSrcFromIframe(video.url_link)}
        allowFullScreen
      />

      <div className="absolute w-full flex justify-between items-center lg:px-6 md:px-3 px-2 py-1 mt-[-1px] bg-[#242424] rounded-b-[30px]">
        <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg sm:text-base text-sm font-bold pl-3">
          DAY {video.day_count}
        </div>

        <div className="text-white 2xl:right-0 2xl:mr-0 md:mr-2 flex 2xl:w-auto md:space-x-0 space-x-1">
          <Heart
            inactiveColor="white"
            width={isLaptop ? 32 : isTablet ? 24 : 22}
            height={isLaptop ? 32 : isTablet ? 24 : 22}
            active={likedVideos[video._id] || false}
            onClick={handleLikeClick}
            className="xl:h-auto mr-0 my-auto"
          />
          <div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm sm:text-sm text-xs w-[20px]">
            {videoCount}
          </div>
        </div>
      </div>
    </div>
  );
}
