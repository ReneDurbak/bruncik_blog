import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import React from "react";
import ringbell from "../assets/Ringbelt.png";
import PushupsPopup from "../components/PushupsPopup";
import instagramIcon from "../assets/Instagram.png";
import GmailIcon from "../assets/Gmail.png";
import TwitterIcon from "../assets/Twitter.png";
import SwitchGalleryIcon from "../assets/Switchgalleryicon.png";
import { VscDebugStepBack } from "react-icons/vsc";
import CloseButtonv2 from "../assets/closebuttonv2.png";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { Select, MenuItem } from "@mui/material";
import { io } from "socket.io-client";
import DOMPurify from "dompurify";
import { useSelector } from "react-redux";
import VideoComponent from "../components/VideoComponent";
import { useDispatch } from "react-redux";
import { showLogin } from "../slices/uiSlice";

function Pushups() {

  const dispatch = useDispatch();

  const [PushUpsGallery, setPushUpsGallery] = useState([]);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [goal, setGoal] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchPushUpsGalleries = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/admin/videoGalleries/getAllVideoGalleries"
        );
        const fetchedVideoGalleries = response.data;
        setPushUpsGallery(fetchedVideoGalleries);
        setSelectedGallery(
          fetchedVideoGalleries && fetchedVideoGalleries[0]._id
        );
        setGoal(fetchedVideoGalleries[0].goal);
        setImage(fetchedVideoGalleries[0].image);
      } catch (error) {
        console.error(`Cannot fetch push ups galleries: ${error.message}`);
      }
    };

    fetchPushUpsGalleries();
  }, []);

  //Filter variables
  const [openSwitchGalleryGenres, setOpenSwitchGalleryGenres] = useState(false);

  //Pop-ups variables
  const [timedPopup, setTimedPopup] = useState(false);

  //Resolution variables
  const isBigLaptop = useMediaQuery({ query: "(min-width: 1280px )" });
  const isLaptop = useMediaQuery({ query: "(min-width: 1024px )" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px )" });
  const isBigMobile = useMediaQuery({ query: "(min-width: 640px )" });
  const isMobile = useMediaQuery({ query: "(min-width: 275px )" });

  //Pushups gallery variables
  const [pushupsGalleryIsVisible, setPushupsGalleryVisible] = useState(false);
  const pushupsGalleryTransition = useTransition(pushupsGalleryIsVisible, {
    config: { mass: 1, tension: 150, friction: 30, clamp: true },
    from: {
      x: isBigLaptop
        ? 50
        : isLaptop
        ? 60
        : isTablet
        ? 55
        : isBigMobile
        ? 45
        : isMobile
        ? 20
        : 700,
      opacity: 0,
    },
    enter: { x: 0, opacity: 1 },
    leave: {
      x: isBigLaptop
        ? 50
        : isLaptop
        ? 60
        : isTablet
        ? 55
        : isBigMobile
        ? 50
        : isMobile
        ? 20
        : 700,
      opacity: 0,
    },
  });

  //Notifications variables
  const [notificationIsVisible, setNotificationIsVisible] = useState(false);
  const [notificationSwitch, setNotificationSwitch] = useState(false);
  const notificationsTransition = useTransition(notificationIsVisible, {
    config: { mass: 1, tension: 150, friction: 30, clamp: true },
    from: {
      x: isBigLaptop
        ? 50
        : isLaptop
        ? 60
        : isTablet
        ? 55
        : isBigMobile
        ? 45
        : isMobile
        ? 20
        : 1000,
      opacity: 0,
    },
    enter: { x: 0, opacity: 1 },
    leave: {
      x: isBigLaptop
        ? 50
        : isLaptop
        ? 60
        : isTablet
        ? 55
        : isBigMobile
        ? 45
        : isMobile
        ? 20
        : 1000,
      opacity: 0,
    },
  });

  //Gallery switch variables
  const [switchGallery, setSwitchGallery] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 5000);
  }, []);

  useEffect(() => {
    {
      /*Pushups gallery window*/
    }
    const handleClickOutsidePushupsGallery = (event) => {
      const pushupsGalleryElement = document.getElementById("pushupsgallery");
      const triggerpushupsgallery = document.getElementById(
        "triggerpushupsgallery"
      );

      if (
        triggerpushupsgallery &&
        pushupsGalleryElement &&
        !triggerpushupsgallery.contains(event.target) &&
        !pushupsGalleryElement.contains(event.target)
      ) {
        setPushupsGalleryVisible(false);
        setSwitchGallery(false);
      }
    };

    window.addEventListener("click", handleClickOutsidePushupsGallery);

    return () => {
      window.removeEventListener("click", handleClickOutsidePushupsGallery);
    };
  }, [pushupsGalleryIsVisible]);

  useEffect(() => {
    {
      /*Notification window*/
    }

    const handleClickOutsideNotifications = (event) => {
      const notificationElement = document.getElementById("notifications");
      const triggerNotifications = document.getElementById(
        "notificationsTrigger"
      );

      if (
        notificationElement &&
        triggerNotifications &&
        !notificationElement.contains(event.target) &&
        !triggerNotifications.contains(event.target)
      ) {
        setNotificationIsVisible(false);
      }
    };

    window.addEventListener("click", handleClickOutsideNotifications);

    return () => {
      window.removeEventListener("click", handleClickOutsideNotifications);
    };
  }, []);

  useEffect(() => {
    {
      /*Switch Gallery genres window*/
    }

    const handleClickOutsideSwitchGalleryGenresElement = (event) => {
      const switchGalleryGenresElement = document.getElementById(
        "switchGalleryGenres"
      );
      const triggerGalleryGenresElement = document.getElementById(
        "switchGalleryGenresTrigger"
      );

      if (
        switchGalleryGenresElement &&
        triggerGalleryGenresElement &&
        !switchGalleryGenresElement.contains(event.target) &&
        !triggerGalleryGenresElement.contains(event.target)
      ) {
        setOpenSwitchGalleryGenres(false);
      }
    };

    window.addEventListener(
      "click",
      handleClickOutsideSwitchGalleryGenresElement
    );

    return () => {
      window.removeEventListener(
        "click",
        handleClickOutsideSwitchGalleryGenresElement
      );
    };
  }, []);

  const filterOptions = [
    {
      name: "Newest",
      id: 1,
    },
    {
      name: "Oldest",
      id: 2,
    },
    {
      name: "Popular",
      id: 3,
    },
  ];

  const [likes, setLikes] = useState([]);

  const fetchLikes = async () => {
    try {
      const response = await axios.get("http://localhost:4000/likes/likes");
      const fetchedLikes = response.data;

      setLikes(fetchedLikes);
    } catch (error) {
      console.error(`Cannot fetch likes: ${error}`);
    }
  };

  useEffect(() => {
    fetchLikes();
  }, []);

  const [selected, setSelected] = useState(1);
  const [focused, setFocused] = useState(false);
  const [prevSelected, setPrevSelected] = useState(1);
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/admin/videos/getAllVideos"
      );
      const fetchedVideos = response.data;

      const filteredGallery = PushUpsGallery.filter(
        (gallery) => gallery._id === selectedGallery
      );

      setImage(filteredGallery[0].image);
      setVideos(
        selectedGallery.length === 0
          ? fetchedVideos
          : fetchedVideos.filter(
              (video) => video.video_gallery._id === selectedGallery
            )
      );

      switch (selected) {
        case 1:
          setVideos((video) =>
            [...video].sort((a, b) => a.day_count - b.day_count)
          );
          break;

        case 2:
          setVideos((video) =>
            [...video].sort((a, b) => b.day_count - a.day_count)
          );
          break;

        case 3:
          setVideos([...videos].sort((a, b) => b.likeCount - a.likeCount));
          break;

        default:
          break;
      }

      setGoal(filteredGallery[0].goal);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, [selectedGallery, selected]);

  function formatTime(dateString) {
    const date = new Date(dateString);
    return `${date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  }

  const [socket, setSocket] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchUserNotifications = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/users/getAllUsers"
        );
        const users = response.data;
        const currentUser = users.find((user) => user.email === userInfo.email);

        setNotifications(currentUser.notifications);
        setNotificationCount(currentUser.notificationsCount);
      } catch (error) {}
    };

    fetchUserNotifications();
  }, []);

  const resetUserNotificationsCount = async () => {
    try {
      const response = await axios.patch(
        "http://localhost:4000/users/resetNotificationsCount",
        { userId: userInfo._id },
        { withCredentials: true }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const resetUserNotifications = async () => {
    try {
      const response = await axios.patch(
        "http://localhost:4000/users/resetNotifications",
        { userId: userInfo._id },
        { withCredentials: true }
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const newSocket = io("http://localhost:4000");
    setSocket(newSocket);

    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.on("receiveNotification", (data) => {
      setNotifications((prevNotifications) => [data, ...prevNotifications]);
      setNotificationCount(
        (prevNotificationsCount) => (prevNotificationsCount += 1)
      );
    });
  }, [socket]);

  const useSafeHtml = (html) => {
    return DOMPurify.sanitize(html, {
      ALLOWED_TAGS: ["iframe"],
      ALLOWED_ATTR: [
        "src",
        "allow",
        "allowfullscreen",
        "frameborder",
        "height",
        "width",
        "title",
      ],
    });
  };

  if ((videos || notifications) === null) {
    return <p className="py-20">Loading...</p>;
  }

  return (
    <>
      <Helmet>
        <title>Push ups page</title>
        <link rel="icon" type="image/svg+xml" href="/pushups.png" />
      </Helmet>

      <Navbar />
      {/*Push-ups intro*/}
      <div className="bg-[url('/src//assets/pushupsintrobg.png')] bg-cover xl:py-[450px] md:py-[350px] py-[300px]" />

      {/* {/*Popup*/}
      <PushupsPopup trigger={timedPopup} setTrigger={setTimedPopup}>
        <div className="bg-white border-black xl:border-2 border-[1px] md:rounded-[35px] rounded-3xl xl:text-2xl lg:text-xl sm:text-[16px] text-[15px] flex justify-center items-center">
          <div className="max-w-full mx-auto lg:px-6 sm:px-6  px-4 lg:py-10 sm:py-6 pb-8  pt-8 text-center ">
            <div className="font-poppins">
              <div className="xl:text-4xl lg:text-3xl sm:text-2xl text-[21px]">
                {" "}
                Do you want to be on my site?
              </div>
              <div className="mt-2">& have your own gallery of push ups?</div>
            </div>
            <div className="lg:text-[40px] md:text-xl text-lg md:mt-10 sm:mt-8 mt-6 font-caveat">
              Feel free to contact me on social media
            </div>

            <div className="flex justify-between items-center xl:mt-10 lg:mt-8 sm:mt-4 mt-4 xl:mx-0 lg:mx-18 sm:px-[100px] px-8">
              <a href="https://www.instagram.com/peterbruncik/" target="_blank">
                <img
                  src={instagramIcon}
                  className="hover:scale-110 duration-300 ease-in-out lg:w-[55px] w-[35px]"
                />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=peterbruncik700%40gmail.com&su=[Subject]&body=[Peter - Usually replies within 24 hours.]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={GmailIcon}
                  className="hover:scale-110 duration-300 ease-in-out lg:w-auto w-[40px]"
                />
              </a>
              <a href="https://twitter.com/peterbruncik" target="_blank">
                <img
                  src={TwitterIcon}
                  className="hover:scale-110 duration-300 ease-in-out lg:w-auto w-[40px]"
                />
              </a>
            </div>

            <div className="lg:text-sm  sm:text-[10px] sm:block hidden xl:mt-10 lg:mt-8 sm:mt-6 mt-6 text-left">
              Note: Send me at least 7 videos of your push ups from every single
              day and I’ll post it on my page.
              <br />
              <div className="text-center">
                <strong>I’ll update it every week.</strong>
              </div>
            </div>
          </div>
        </div>
      </PushupsPopup>

      {/*Push-ups videos*/}
      <div className="relative 2xl:max-w-[1680px] py-[100px] max-w-[1380px] mx-auto 2xl:px-20 sm:px-10 px-6 font-poppins">
        <div className="bg-[url('/src/assets/pushupsvideosbg.png')] bg-cover xl:px-12 lg:px-8  sm:px-6 px-3 md:pt-14 pt-6 pb-10 lg:rounded-[50px] rounded-[20px]">
          {/*Notification and Push ups gallery container*/}
          <div className="flex justify-between ">
            <div className="my-auto">
              <h1 className="xl:text-[42px] lg:text-[38px] md:text-[34px] text-[22px] font-medium">
                Explore
              </h1>
            </div>
            <div className="font-fjalla md:block hidden font-normal xl:text-7xl lg:text-5xl md:text-4xl rotate-[-10deg] xl:mt-4 md:mt-0 mt-2">
              {videos.length === Number(goal) ? (
                <div>👏Goal completed!👏</div>
              ) : (
                <div> Goal: {goal}</div>
              )}
            </div>
            <div className="flex xl:space-x-12 lg:space-x-10 md:space-x-6 space-x-4">
              {/*Notifications button*/}

              <div className="relative my-auto">
                <img
                  src={ringbell}
                  className="xl:w-[48px] lg:w-[40px] md:w-[36px] w-[28px] hover:scale-105 duration-300 ease-in-out cursor-pointer"
                  onClick={() => {
                    setNotificationIsVisible(true);
                    setNotificationCount(0);
                    resetUserNotificationsCount();
                  }}
                  id="notificationsTrigger"
                />

                {notificationCount !== 0 ? (
                  <div className="absolute flex justify-center items-center bg-blue-500   xl:h-[35px] lg:h-[25px] md:h-[20px] h-[18px] rounded-[30px] xl:bottom-7 md:bottom-6 bottom-4  xl:left-7 md:left-5 left-4 xl:w-[35px] lg:w-[24px] md:w-[20px] w-[18px]">
                    <div className="xl:text-base md:text-xs text-[10px] text-white">
                      {notifications && notificationCount}
                    </div>
                  </div>
                ) : null}
                {/*Notification window*/}

                {userInfo ? (
                  <>
                    {notificationsTransition((style, item) =>
                      item ? (
                        <animated.div
                          style={style}
                          className="absolute xl:top-[-15px] top-[-10px] xl:left-[-490px] lg:left-[-510px] md:left-[-400px] bottom-0 right-[-55px] lg:w-[650px] md:w-[520px] w-[315px] px-0 z-[2]"
                        >
                          <div
                            className="relative shadow-2xl bg-white flex flex-col 2xl:py-8 xl:py-6 lg:py-4 md:py-3 py-3 lg:pl-6 pl-3 md:pl-4 lg:pr-10 pr-3 justify-center items-start   lg:rounded-[30px] rounded-[20px] z-[2]"
                            id="notifications"
                          >
                            <div className=" h-full w-full">
                              <div className="absolute lg:right-8 md:right-4 right-3 2xl:top-[35px] xl:top-6 md:top-4 top-3">
                                <img
                                  src={CloseButtonv2}
                                  className="duration-300 ease-in-out hover:scale-110 cursor-pointer sm:w-auto 2xl:w-[26px] xl:w-[24px] w-[16px]"
                                  onClick={() => {
                                    setNotificationIsVisible(false);
                                  }}
                                />
                              </div>
                              <h1 className="2xl:text-2xl xl:text-xl md:text-lg text-sm tracking-wider	 font-bold">
                                Notifications
                              </h1>

                              <div className="flex justify-between space-x-3 mt-2 2xl:text-sm md:text-xs text-[10px] ">
                                <div
                                  className={`${
                                    notificationSwitch
                                      ? "no-underline text-gray-400 hover:text-[#696969]"
                                      : "underline "
                                  } underline-offset-8 duration-300 ease-in-out cursor-pointer`}
                                  onClick={() => setNotificationSwitch(false)}
                                >
                                  View all
                                </div>

                                <div
                                  className="text-red-400 font-bold rounded-xl pr-10 underline underline-offset-8 ease-in-out duration-300 hover:cursor-pointer"
                                  onClick={() => {
                                    resetUserNotifications();
                                    setNotifications([]);
                                  }}
                                >
                                  {notifications && notifications.length === 0
                                    ? null
                                    : "clear"}
                                </div>
                                {/*<div
                              className={`${
                                notificationSwitch
                                  ? "underline "
                                  : "no-underline text-gray-400 hover:text-[#696969]"
                              } underline-offset-8 duration-300 ease-in-out cursor-pointer`}
                              onClick={() => setNotificationSwitch(true)}
                            >
                              Mentions
                            </div>*/}
                              </div>

                              <div className="flex flex-col mt-4 pr-8 max-h-[150px] overflow-y-scroll">
                                {notifications &&
                                  notifications.map((notification, index) => (
                                    <div
                                      key={index}
                                      className="flex space-x-4 my-2"
                                    >
                                      <div>
                                        <img
                                          src={`http://localhost:4000/public/videoGallery/${notification.videoGalleryImage}`}
                                          className="2xl:w-[48px] 2xl:h-[40px] md:w-[40px] md:h-[40px] w-[32px] h-[32px] rounded-3xl"
                                        />
                                      </div>

                                      <div className="my-auto w-full 2xl:text-base md:text-[14px] text-[11px]">
                                        <div
                                          dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(
                                              notification.message
                                            ),
                                          }}
                                        />
                                        <div className="2xl:text-xs lg:text-[11px] text-[9px] text-[#777777] mt-[1px] flex justify-between">
                                          <div>
                                            {formatTime(notification.createdAt)}
                                          </div>
                                          <div>
                                            {formatDate(notification.createdAt)}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            </div>
                          </div>
                        </animated.div>
                      ) : (
                        ""
                      )
                    )}
                  </>
                ) : (
                  <>
                    {notificationsTransition((style, item) =>
                      item ? (
                        <animated.div
                          style={style}
                          className="absolute xl:top-[-15px] top-[-10px] xl:left-[-490px] lg:left-[-510px] md:left-[-400px] bottom-0 right-[-55px] lg:w-[650px] md:w-[520px] w-[315px] px-0 z-[2]"
                        >
                          <div
                            className="relative text-center shadow-2xl bg-white flex flex-col 2xl:py-8 xl:py-6 lg:py-4 md:py-3 py-3 lg:pl-6 pl-3 md:pl-4 lg:pr-10 pr-3    lg:rounded-[30px] rounded-[20px] z-[2]"
                            id="notifications"
                          >
                            <div className="text-center text-lg py-4">
                              If you want to see notifications you have to{" "}
                              <strong
                                className="hover:underline underline-offset-4 cursor-pointer"
                                onClick={() => {
                                  dispatch(showLogin());
                                  setNotificationIsVisible(false);
                                }}
                              >
                                login
                              </strong>{" "}
                              or{" "}
                              <Link to="/register">
                                <strong className="hover:underline underline-offset-4 cursor-pointer">
                                  register
                                </strong>
                              </Link>
                            </div>
                          </div>
                        </animated.div>
                      ) : (
                        ""
                      )
                    )}
                  </>
                )}
              </div>

              {/*Push-ups gallery button*/}
              <div className="relative my-auto">
                <img
                  src={`http://localhost:4000/public/videoGallery/${image}`}
                  className="xl:w-[55px] xl:h-[55px]  lg:w-[54px] md:w-[40px] w-[34px] rounded-[50%] hover:scale-105 duration-300 ease-in-out cursor-pointer"
                  onClick={() => setPushupsGalleryVisible(true)}
                  id="triggerpushupsgallery"
                />

                {/*Push ups gallery window*/}

                {pushupsGalleryTransition((style, item) =>
                  item ? (
                    <animated.div
                      style={style}
                      className="absolute xl:w-[400px] lg:w-[350px] sm:w-[300px] w-[250px] xl:top-[-15px] md:top-[-2px] top-[-5px] 2xl:left-[-335px] xl:left-[-320px] lg:left-[-290px] sm:left-[-245px] left-[-210px]    z-[2]"
                    >
                      <div id="pushupsgallery">
                        <div
                          className={`${
                            switchGallery
                              ? "hidden"
                              : "h-full flex flex-col justify-center items-center  divide-y-[1px] divide-black xl:text-base  text-[12px]"
                          }`}
                        >
                          {PushUpsGallery &&
                            PushUpsGallery.slice(0, 2).map((gallery) => (
                              <div
                                key={gallery._id}
                                onClick={() => {
                                  setPushupsGalleryVisible(false);
                                  setSwitchGallery(false);
                                  setSelectedGallery(gallery._id);
                                }}
                                className=" relative bg-white  hover:bg-[#696969] flex flex-row items-center xl:py-12 lg:py-9 sm:py-8 py-6 w-full first:md:rounded-t-[30px] first:rounded-t-xl duration-700 ease-in-out last:rounded-b-[30px]"
                              >
                                <div className="absolute sm:left-7 left-4">
                                  <img
                                    src={`http://localhost:4000/public/videoGallery/${gallery.image}`}
                                    className="xl:w-[64px] lg:w-[50px] sm:w-[42px] w-[25px] rounded-[45%]"
                                  />
                                </div>
                                <div className="absolute lg:left-[130px] sm:left-[90px] left-[55px] font-regular">
                                  {gallery.title}
                                </div>
                              </div>
                            ))}
                          {PushUpsGallery.length > 2 ? (
                            <div
                              className=" bg-white  hover:bg-[#696969] w-full flex justify-center items-center md:rounded-b-[30px] rounded-b-[15px] xl:py-12 lg:py-10 sm:py-9 py-6 space-x-10 duration-700 ease-in-out"
                              onClick={() => {
                                setSwitchGallery(true);
                              }}
                            >
                              <img
                                src={SwitchGalleryIcon}
                                className="absolute sm:left-9 left-5 hover:scale-110 duration-300 ease-in-out xl:w-[58px] lg:w-[44px] sm:w-[36px] w-[20px]"
                              />

                              <div className="absolute lg:left-[90px] sm:left-[50px] left-[15px]">
                                Switch to another gallery
                              </div>
                            </div>
                          ) : null}
                        </div>

                        <div
                          className={`${
                            switchGallery
                              ? "bg-white  md:rounded-[30px] rounded-xl px-5 py-3 xl:text-base lg:text-[14px] sm:text-[12px] text-[10px]"
                              : "hidden"
                          }`}
                        >
                          <div className="pr-20 flex flex-col space-y-1 overflow-y-scroll xl:max-h-[200px] sm:max-h-[175px] max-h-[90px] switchGalleryScrollbar">
                            <VscDebugStepBack
                              className="absolute sm:right-14 right-10 top-4 xl:text-xl lg:text-[16px] sm:text-base text-xs duration-300 ease-in-out hover:scale-110"
                              onClick={() => {
                                {
                                  setSwitchGallery(false);
                                }
                              }}
                            />
                            {PushUpsGallery &&
                              PushUpsGallery.slice(2).map((gallery) => (
                                <div
                                  key={gallery._id}
                                  className=" cursor-pointer"
                                >
                                  <div
                                    className="flex md:space-x-2 space-x-1"
                                    onClick={() => {
                                      setPushupsGalleryVisible(false);
                                      setSwitchGallery(false);
                                      setSelectedGallery(gallery._id);
                                    }}
                                  >
                                    <img
                                      src={`http://localhost:4000/public/videoGallery/${gallery.image}`}
                                      className="xl:min-w-[40px] xl:max-h-[40px] lg:w-[20px] lg:max-h-[20px] sm:w-[18px] sm:max-h-[18px] w-[16px] max-h-[16px]  rounded-[45%] "
                                    />
                                    <div className="my-auto">
                                      {gallery.title}
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </animated.div>
                  ) : (
                    ""
                  )
                )}
              </div>
            </div>
          </div>

          {/*Goal on mobile*/}
          <div className="md:hidden block text-base mt-2">
            {videos.length === Number(goal) ? (
              <div>Goal completed! 👏</div>
            ) : (
              <div>Goal: {goal}</div>
            )}
          </div>

          <div className="md:pt-10 pt-6 pb-2 flex justify-between relative font-poppins">
            <div className="underline underline-offset-[3px] font-spectral xl:text-[18px] lg:text-[15px] sm:text-[13px] text-[10px] font-regular 2xl:tracking-normal md:tracking-wider my-auto">
              <Link to="/articles">Learn more about 100 club challenge </Link>{" "}
            </div>

            {/*Filter*/}
            <div className="flex lg:space-x-6 md:space-x-2 space-x-3">
              <div className="2xl:text-md lg:text-sm md:text-[13px] text-[11px] my-auto text-[#545454] md:block hidden ">
                Filter
              </div>

              <Select
                MenuProps={{
                  disableScrollLock: true,
                  PaperProps: {
                    sx: {
                      marginTop: "1px",
                      borderTopLeftRadius: "0px",
                      borderTopRightRadius: "0px",
                      borderBottomLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                      backgroundColor: "white",

                      "& .MuiMenu-list": {
                        padding: 0,
                      },

                      "& .MuiMenuItem-root": {
                        "&.Mui-selected": {
                          backgroundColor: "#d3d3d3 !important",
                        },

                        "&.Mui-selected:hover": {
                          backgroundColor: "#adadad !important",
                        },
                        "&:hover": {
                          backgroundColor: "#adadad",
                        },

                        paddingTop: isLaptop
                          ? "12px"
                          : isTablet
                          ? "10px"
                          : isBigMobile
                          ? "10px"
                          : "6px",

                        paddingBottom: isLaptop
                          ? "12px"
                          : isTablet
                          ? "10px"
                          : isBigMobile
                          ? "10px"
                          : "6px",

                        minHeight: "10px",

                        fontSize: isBigLaptop ? "18px" : "14px",
                        display: "flex",
                        alignItems: "center",
                      },
                    },
                  },
                }}
                id="pushUpsSelect"
                value={selected}
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },

                  borderTopLeftRadius: "25px",
                  borderTopRightRadius: "25px",
                  borderBottomLeftRadius: focused ? "0px" : "25px",
                  borderBottomRightRadius: focused ? "0px" : "25px",
                  backgroundColor: "white",
                  fontSize: isBigLaptop ? "18px" : "14px",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",

                  "& .MuiSelect-select": {
                    paddingTop: isBigLaptop
                      ? "10px"
                      : isTablet
                      ? "8px"
                      : isBigMobile
                      ? "6px"
                      : "4px",
                    paddingBottom: isBigLaptop
                      ? "10px"
                      : isTablet
                      ? "8px"
                      : isBigMobile
                      ? "6px"
                      : "4px",
                  },
                }}
                onChange={(e) => {
                  {
                    setSelected(e.target.value);
                    setFocused(false);
                  }
                }}
                onFocus={() => setFocused(false)}
              >
                {filterOptions.map((filter) => (
                  <MenuItem
                    key={filter.id}
                    value={filter.id}
                    onFocus={() => setFocused(true)}
                  >
                    {filter.name}
                  </MenuItem>
                ))}
              </Select>
            </div>
          </div>

          <div className=" 2xl:pt-4 md:pt-10 pt-4 font-poppins">
            <div className="py-4 grid 2xl:grid-cols-4 xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 2xl:gap-y-20 2xl:gap-x-10 xl:gap-y-16 xl:gap-x-10 lg:gap-y-20 lg:gap-x-8 md:gap-y-16 md:gap-x-8 gap-y-[50px] gap-x-4 2xl:px-[120px] xl:px-20 lg:px-20 md:px-8 sm:px-4  px-0 pr-2 sm:pr-4  2xl:max-w-full lg:max-w-full mx-auto 2xl:min-h-[520px] 2xl:max-h-[800px] xl:max-h-[450px] lg:max-h-[440px] md:max-h-[375px] max-h-[450px]  overflow-y-scroll pushupsScroll">
              {videos &&
                videos.map((video) => (
                  <VideoComponent
                    key={video._id}
                    video={video}
                    likes={likes}
                    onLikesChange={fetchVideos}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pushups;
