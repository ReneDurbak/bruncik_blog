import { useState, useEffect, useRef } from "react";
import Heart from "@react-sandbox/heart";
import axios from "axios";
import { useSelector } from "react-redux";

export default function VideoComponent({ video, likes, onLikesChange }) {
  const [likedVideos, setLikedVideos] = useState([]);
  const { userInfo } = useSelector((state) => state.auth);
  const [videoCount, setVideoCount] = useState(0);
  const [likeLoginPopup, setLikeLoginPopup] = useState(false)

  const loginLikePopupRef = useRef(null)

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
      const response = await axios.post("http://localhost:4000/likes/like", {
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
      const response = await axios.delete(`http://localhost:4000/likes/like`, {
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

    if (match && match[1]) {
      return match[1];
    } else {
      return null;
    }
  }

  const toggleLike = (videoId) => {
    setLikedVideos((prev) => ({
      ...prev,
      [videoId]: !prev[videoId],
    }));

    if (likedVideos[videoId] === true) {
      deleteLike(videoId);
    } else {
      postLike(videoId);
    }
  };

  return (
    <>
      {" "}
      <div
        className="relative aspect-[4/7] w-full rounded-t-[30px]"
        key={video._id}
      >
        <div ref={loginLikePopupRef} className={`w-full px-2 bg-[#242424] text-white h-full absolute left-0 top-0 rounded-t-[30px] flex text-center justify-center items-center ${likeLoginPopup ? 'block' : 'hidden'}`}>
          <p> <strong className="hover:underline underlne-offset-4">Login</strong> or <strong className="hover:underline underlne-offset-4">Register</strong> to like videos </p>
        </div>

        <iframe
          className="aspect-[4/7] w-full rounded-t-[30px]"
          src={extractVideoSrcFromIframe(video.url_link)}
          allowFullScreen
        />

        <div className="absolute w-full flex justify-between lg:px-6 md:px-3 px-2 py-1 mt-[-1px] bg-[#242424] rounded-b-[30px]">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg sm:text-base text-sm font-bold pl-3 ">
            DAY {video.day_count}
          </div>

          {userInfo ? (
            <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto md:space-x-0 space-x-1">
              <Heart
                inactiveColor="white"
                width={32}
                height={32}
                active={likedVideos[video._id] || false}
                onClick={() => toggleLike(video._id)}
                className="xl:h-auto lg:mr-0 mr-1 my-auto"
              />
              <div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm sm:text-sm text-xs w-[20px]">
                {videoCount}
              </div>
            </div>
          ) : (
            <>
              <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto md:space-x-0 space-x-1">
                <Heart
                  inactiveColor="white"
                  width={32}
                  height={32}
                  active={likedVideos[video._id] || false}
                  onClick={() => setLikeLoginPopup(true)}
                  className="xl:h-auto lg:mr-0 mr-1 my-auto"
                />
                <div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm sm:text-sm text-xs w-[20px]">
                  {videoCount}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
