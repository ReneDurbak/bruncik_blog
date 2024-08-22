import selfie from "../assets/selfiePhoto.png";
import bottomWave from "../assets/aboutMeIntroTablet.png";
import timeline from "../assets/timeline.png";
import timelineMobile from "../assets/timelineMobile.png";
import timelineBg from "../assets/timelineBg.png";
import health from "../assets/valuesHealth.png";
import movement from "../assets/valuesMovement.png";
import improvement from "../assets/valuesImprovement.png";
import arrowDown from "../assets/arrowDown.png";
import arrowDownBlack from "../assets/arrowDownBlack.png";
import healthImage from "../assets/healthImages.png";
import movementImage from "../assets/movement.png";
import shoeIcon from "../assets/shoeIcon.png";
import improvementImage from "../assets/improvement.png";
import improvementIcon from "../assets/improvementIcon.png";
import contactImage from "../assets/contactImage.png";
import movimpbg from "../assets/movimpbg.png";
import healthvaluesbg from "../assets/healthvaluesbg.png";
import healthvaluesbgLaptop from "../assets/healthvaluesbgLaptop.png";
import healthvaluesbgLaptopXL from "../assets/healthvaluesbgLaptopXL.png";
import healthUnderline from "../assets/healthUnderline.png";
import hearthIcon from "../assets/hearthIcon.png";
import bottomShadow from "../assets/bottomShadow.png";
import paperPlane from "../assets/PaperPlane.png";
import paperPlaneBlack from "../assets/PaperPlaneBlack.png";
import { Helmet } from "react-helmet";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { BiArrowToTop } from "react-icons/bi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1538px)" });
  const isLaptopXL = useMediaQuery({ query: "(min-width: 1280px )" });
  const isLaptop = useMediaQuery({ query: "(min-width: 1024px )" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 640px)" });

  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [subject, setSubject] = useState("");
  const [subjectError, setSubjectError] = useState(false);
  const [hoverOnSendButton, setHoverOnSendButton] = useState(false);
  const [clickOnSendButton, setClickOnSendButton] = useState(false);

  function sendMessage(e) {
    e.preventDefault();

    const isMessageValid = message.trim() !== "";
    const isSubjectValid = subject.trim() !== "";

    setMessageError(!isMessageValid);
    setSubjectError(!isSubjectValid);

    if (!isMessageValid) {
      document.getElementById("message").value = "Please insert your message!";
    }

    if (!isSubjectValid) {
      document.getElementById("subject").value =
        "Please insert your subject of the message!";
    }

    if (isMessageValid && isSubjectValid) {
      setMessageError(false);
      setSubjectError(false);
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=peterbruncik700%40gmail.com&su=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(message)}`
      );
    }
  }

  const [showMoreMyStory, setShowMoreMyStory] = useState(false);
  const [
    showMoreMyStoryTabletFirstBubble,
    setShowMoreMyStoryTabletFirstBubble,
  ] = useState(false);
  const [
    showMoreMyStoryTabletSecondBubble,
    setShowMoreMyStoryTabletSecondBubble,
  ] = useState(false);

  const showMoreStyles = {
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };

  return (
    <>
      <Helmet>
        <title>About me</title>
        <link rel="icon" type="image/svg+xml" href="/aboutme.png" />
      </Helmet>

      <Navbar />
      <div className="xl:mb-0 mb-[300x]">
        {/*Hello intro*/}
        <div
          className="relative bg-no-repeat bg-cover  2xl:h-[1000px] lg:h-[900px] md:h-[860px] md:mb-0 mb-16  w-full"
          style={{
            backgroundImage: isDesktop
              ? `url('/src/assets/aboutMeIntro.png')`
              : isLaptopXL
              ? `url('/src/assets/aboutMeIntroLaptopXL.png')`
              : isLaptop
              ? `url('/src/assets/aboutMeIntroLaptop.png')`
              : ``,
          }}
        >
          <img
            src={bottomWave}
            className="absolute z-[-1] lg:hidden md:block hidden w-full bottom-0 left-[-4px]"
          />
          <div className="2xl:max-w-[1680px] max-w-[1380px] mx-auto mt-10 2xl:px-20 xl:px-10 lg:px-10 sm:px-10 px-6 font-bold not-italic">
            {isLaptop ? (
              <div className="mt-0 flex">
                <div className="2xl:mr-[150px] xl:mr-[120px] lg:mr-16 2xl:mt-[220px] xl:mt-[200px] lg:mt-[180px] ">
                  <div className=" 2xl:text-[170px] text-8xl font-abhaya">
                    Hi!
                  </div>
                  <div className="2xl:text-[90px] xl:text-[50px] lg:text-5xl  font-light  2xl:mt-4 mt-2">
                    I'm Peter Brunčík
                  </div>
                  <div className="2xl:text-[19px] xl:text-base lg:text-base font-normal font-spectral text-justify 2xl:mt-18 mt-10">
                    Oh, hello. So, you're genuinely curious about who I am. That
                    truly warms my heart. So, without further ado, allow me to
                    introduce myself. I'm Peter Brunčík, an 18-year-old with no
                    major achievements, no prestigious competition wins, and
                    absolutely no fame in the media spotlight. Surprising, isn't
                    it? I'm just an ordinary individual who wholeheartedly
                    embraces self-discovery and personal growth. I'm on a life
                    journey striving to become the best version of myself. Will
                    you join me?
                  </div>
                  <Link to="mystory" smooth={true}>
                    <button className="p-2 text-white mt-8 bg-[#2A6CA5] custom-shadow lg:text-base rounded-[30px] font-poppins duration-300 ease-in-out underline-offset-[3px] hover:underline active:text-black">
                      Learn more
                    </button>
                  </Link>
                </div>
                <img
                  src={selfie}
                  className="2xl:h-[750px] xl:h-[700px] lg:h-[600px] md:h-[350px] h-[200px] aspect-auto 2xl:p-10 2xl:mr-[-75px] xl:mr-[-32px] lg:mr-[-28px] float-right mt-[120px]"
                />
              </div>
            ) : (
              <div className="sm:mt-[120px] md:mt-0">
                <div className="flex md:flex-row flex-col justify-between 2xl:mr-[150px] xl:mr-[120px] lg:mr-16 2xl:mt-[280px] xl:mt-[200px] lg:mt-[180px] font-spectral">
                  {/*Intro image for mobile*/}
                  <img
                    src={selfie}
                    className="h-full aspect-auto mx-auto mt-4 md:hidden block"
                  />
                  <div className="flex justify-end flex-col mb-[23px]">
                    <div className="md:text-[140px] text-8xl font-abhaya">
                      Hi!
                    </div>
                    <div className="md:text-[42px] sm:text-5xl text-3xl  font-thin tracking-wider md:mr-[-100px]">
                      I'm Peter Brunčík
                    </div>
                  </div>
                  {/*Intro image for mobile*/}
                  <img
                    src={selfie}
                    className="md:h-[450px] h-full aspect-auto md:mr-[-22px] mx-auto md:mt-[70px] mt-4 md:block hidden"
                  />
                </div>
                <div className="text-[17px] font-thin font-spectral tracking-wide text-justify mt-4">
                  Oh, hello. So, you're genuinely curious about who I am. That
                  truly warms my heart. So, without further ado, allow me to
                  introduce myself. I'm Peter Brunčík, an 18-year-old with no
                  major achievements, no prestigious competition wins, and
                  absolutely no fame in the media spotlight. Surprising, isn't
                  it? I'm just an ordinary individual who wholeheartedly
                  embraces self-discovery and personal growth. I'm on a life
                  journey striving to become the best version of myself. Will
                  you join me?
                </div>
                <Link to="mystory" smooth={true}>
                  <button className="p-2 text-white mt-8 bg-[#2A6CA5] custom-shadow text-sm rounded-[30px] font-poppins duration-300 ease-in-out underline-offset-[3px] hover:underline active:text-black">
                    Learn more
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/*My story*/}

        <div
          id="mystory"
          className="relative 2xl:h-[1100px] xl:h-[870px] lg:h-[900px] md:h-[800px] sm:h-[780px] h-[900px] bg-no-repeat bg-cover"
          style={{
            backgroundImage: `${
              isDesktop
                ? "url('/src/assets/aboutMeMyStory.png')"
                : isLaptopXL
                ? "url('/src/assets/aboutMeMyStoryLaptopXL.png')"
                : isLaptop
                ? "url('/src/assets/aboutMeMyStoryLaptop.png')"
                : isTablet
                ? "url('/src/assets/aboutMeMyStoryTablet.png')"
                : isMobile
                ? "url('/src/assets/aboutMeMyStoryBigMobile.png')"
                : "url('/src/assets/aboutMeMyStoryMobile.png')"
            }`,
          }}
        >
          <div className=" w-full mx-auto pt-0">
            <h1 className="text-black text-3xl text-center lg:pt-20 pt-12 font-spectral uppercase tracking-[10px] font-bold">
              My story
            </h1>

            {isLaptopXL ? (
              <div className="xl:grid flex xl:grid-flow-col flex-col justify-center items-center xl:grid-cols-2 grid-cols-1 2xl:gap-x-[250px] xl:gap-y-0 gap-y-[280px]">
                {/*Text bubbles*/}
                <div className="relative flex flex-start xl:justify-center font-spectral">
                  <div className="relative">
                    <div className=" bg-white md:p-4 p-1 2xl:w-[800px] xl:w-[550px] lg:w-[550px] md:w-[640px] w-[175px] 2xl:h-[250px] xl:h-[170px] lg:h-[185px] md:h-[160px] h-[250px] xl:float-left xl:ml-0 lg:mr-6 md:ml-6 xl:mt-8 lg:mt-8 md:mt-4 2xl:blur-xl lg:blur-md blur-md rounded-[30px]"></div>
                    <p className="absolute blur-none 2xl:w-[700px] xl:w-[500px] lg:w-[500px] md:w-[600px] w-[150px] 2xl:top-[80px] xl:top-[50px] lg:top-[60px] md:top-[50px] top-[70px] 2xl:left-[50px] xl:left-[25px] lg:left-12 md:left-12 left-7 md:text-justify text-center 2xl:text-base md:text-[13px] text-xs">
                      In my young, specifically in elementary school, I began my
                      journey by not simply wanting to conform to the normal
                      group around me. On the contrary, I decided to actively
                      differentiate myself and seek my own identity. I remember
                      a time when I was the quiet boy in the dugout while the
                      rest of my classmates were busy with soccer, girls, and
                      games. That's when I understood that I didn't want to
                      follow the same pattern as everyone else. I decided to be
                      authentic, to go my own way, and to be influenced only by
                      what was truly important to me.
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-end xl:justify-center">
                  <div className="relative 2xl:top-[600px] xl:top-[475px] md:top-[0px] top-[500px]">
                    <div className=" bg-white md:p-4 2xl:w-[750px] xl:w-[550px] lg:w-[550px] md:w-[650px] w-[175px] 2xl:h-[300px] xl:h-[200px] lg:h-[200px] md:h-[175px] h-[310px] float-right xl:ml-16 lg:mr-6 md:ml-6 mr-4 2xl:blur-xl  blur-md rounded-[30px]"></div>
                    <p className="absolute blur-none 2xl:w-[650px] xl:w-[500px] lg:w-[500px] md:w-[600px] w-[150px]  2xl:top-14 xl:top-[1s0px] lg:top-[30px] md:top-[25px] top-16 2xl:left-[110px] xl:left-[90px] lg:left-12 md:left-12 left-7 right-8 md:text-justify text-center 2xl:text-base md:text-[13px] text-xs">
                      The influence of the values I learned in my family,
                      especially from my father, shaped my decision to pursue a
                      healthy lifestyle and self-development. His advice to
                      avoid unhealthy habits inspired me to build a solid
                      foundation for physical and mental well-being. As a
                      result, exercise and healthy habits became an integral
                      part of my identity. This process, however, had one
                      driving force - love. The desire to be a better version of
                      myself for the love of my life and for everyone around me
                      motivated me to constantly improve and work on myself,
                      making my life goal a clear commitment to be a good person
                      for my loved one and for everyone around me.
                    </p>
                  </div>
                </div>
              </div>
            ) : isLaptop ? (
              <div className="grid grid-flow-col grid-cols-2">
                {/*Text bubbles with less/more for small laptops*/}
                <div className="relative flex flex-start">
                  <div className="absolute top-20 left-10">
                    <div
                      className={` bg-white  lg:w-[550px]  ${
                        showMoreMyStoryTabletFirstBubble
                          ? " lg:h-[220px] md:h-[175px]"
                          : "lg:h-[140px] md:h-[125px]"
                      }     mt-10  lg:blur-md blur-md rounded-[30px]`}
                    ></div>
                    <p
                      style={
                        showMoreMyStoryTabletFirstBubble ? null : showMoreStyles
                      }
                      className="absolute blur-none w-[500px] top-[60px] left-6  md:text-justify text-center 2xl:text-base md:text-[13px] text-xs"
                    >
                      In my young, specifically in elementary school, I began my
                      journey by not simply wanting to conform to the normal
                      group around me. On the contrary, I decided to actively
                      differentiate myself and seek my own identity. I remember
                      a time when I was the quiet boy in the dugout while the
                      rest of my classmates were busy with soccer, girls, and
                      games. That's when I understood that I didn't want to
                      follow the same pattern as everyone else. I decided to be
                      authentic, to go my own way, and to be influenced only by
                      what was truly important to me.
                    </p>
                    <p
                      className="absolute left-6 bottom-6 px-0 text-[14px] underline underline-offset-4"
                      onClick={() =>
                        setShowMoreMyStoryTabletFirstBubble(
                          !showMoreMyStoryTabletFirstBubble
                        )
                      }
                    >
                      {showMoreMyStoryTabletFirstBubble ? (
                        <BiArrowToTop size={22} />
                      ) : (
                        "More..."
                      )}
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-end">
                  <div className="absolute top-[500px]   right-10">
                    <div
                      className={` bg-white 2xl:w-[750px] xl:w-[550px] lg:w-[550px] md:w-[650px] w-[175px] ${
                        showMoreMyStoryTabletSecondBubble
                          ? "lg:h-[230px] md:h-[210px]"
                          : "lg:h-[140px] md:h-[130px]"
                      } mt-8   blur-md rounded-[30px]`}
                    ></div>
                    <p
                      style={
                        showMoreMyStoryTabletSecondBubble
                          ? null
                          : showMoreStyles
                      }
                      className="absolute blur-none w-[500px] top-[55px] left-6  md:text-justify text-center 2xl:text-base md:text-[13px] text-xs"
                    >
                      The influence of the values I learned in my family,
                      especially from my father, shaped my decision to pursue a
                      healthy lifestyle and self-development. His advice to
                      avoid unhealthy habits inspired me to build a solid
                      foundation for physical and mental well-being. As a
                      result, exercise and healthy habits became an integral
                      part of my identity. This process, however, had one
                      driving force - love. The desire to be a better version of
                      myself for the love of my life and for everyone around me
                      motivated me to constantly improve and work on myself,
                      making my life goal a clear commitment to be a good person
                      for my loved one and for everyone around me.
                    </p>
                    <p
                      className="absolute left-6 bottom-6  px-0 text-[14px] underline underline-offset-4"
                      onClick={() =>
                        setShowMoreMyStoryTabletSecondBubble(
                          !showMoreMyStoryTabletSecondBubble
                        )
                      }
                    >
                      {showMoreMyStoryTabletSecondBubble ? (
                        <BiArrowToTop size={22} />
                      ) : (
                        "More..."
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ) : isTablet ? (
              <div className="2xl:grid flex 2xl:grid-flow-col flex-col  items-center 2xl:grid-cols-2 2xl:gap-x-[250px] 2xl:gap-y-0 gap-y-[280px]">
                {/*Text bubbles with less/more for tablets*/}
                <div className="relative flex flex-start xl:justify-center">
                  <div className="relative">
                    <div
                      className={`bg-white md:p-4 p-1 lg:w-[550px] md:w-[645px]  ${
                        showMoreMyStoryTabletFirstBubble
                          ? " lg:h-[220px] md:h-[175px]"
                          : "lg:h-[140px] md:h-[125px]"
                      }  lg:mr-6 md:ml-6  lg:mt-8 md:mt-4  lg:blur-md blur-md rounded-[30px]`}
                    ></div>
                    <p
                      style={
                        showMoreMyStoryTabletFirstBubble ? null : showMoreStyles
                      }
                      className="absolute blur-none 2xl:w-[700px] xl:w-[500px] lg:w-[500px] md:w-[600px] w-[150px] 2xl:top-[80px] xl:top-[50px] lg:top-[60px] md:top-[35px] top-[70px] 2xl:left-[50px] xl:left-[25px] lg:left-12 md:left-12 left-7 md:text-justify text-center 2xl:text-base md:text-[13px] text-xs"
                    >
                      In my young, specifically in elementary school, I began my
                      journey by not simply wanting to conform to the normal
                      group around me. On the contrary, I decided to actively
                      differentiate myself and seek my own identity. I remember
                      a time when I was the quiet boy in the dugout while the
                      rest of my classmates were busy with soccer, girls, and
                      games. That's when I understood that I didn't want to
                      follow the same pattern as everyone else. I decided to be
                      authentic, to go my own way, and to be influenced only by
                      what was truly important to me.
                    </p>
                    <p
                      className="absolute left-2 bottom-6 sm:px-10 px-8 text-[14px] underline underline-offset-4"
                      onClick={() =>
                        setShowMoreMyStoryTabletFirstBubble(
                          !showMoreMyStoryTabletFirstBubble
                        )
                      }
                    >
                      {showMoreMyStoryTabletFirstBubble ? (
                        <BiArrowToTop size={22} />
                      ) : (
                        "More..."
                      )}
                    </p>
                  </div>
                </div>

                <div className="2xl:relative absolute lg:top-[600px] md:top-[500px] flex flex-end 2xl:justify-center">
                  <div className="relative 2xl:top-[600px] xl:top-[0px] md:top-[0px] top-[500px]">
                    <div
                      className={` bg-white md:p-4 2xl:w-[750px] xl:w-[550px] lg:w-[550px] md:w-[650px] w-[175px] ${
                        showMoreMyStoryTabletSecondBubble
                          ? "lg:h-[230px] md:h-[210px]"
                          : "lg:h-[140px] md:h-[130px]"
                      } float-right xl:ml-16 lg:mr-6 md:ml-6 mr-4 2xl:blur-xl  blur-md rounded-[30px]`}
                    ></div>
                    <p
                      style={
                        showMoreMyStoryTabletSecondBubble
                          ? null
                          : showMoreStyles
                      }
                      className="absolute blur-none lg:w-[500px] md:w-[600px] lg:top-[30px] md:top-[25px] top-16 xl:left-[50px] lg:left-12 md:left-12 left-7 right-8 md:text-justify text-center 2xl:text-base md:text-[13px] text-xs"
                    >
                      The influence of the values I learned in my family,
                      especially from my father, shaped my decision to pursue a
                      healthy lifestyle and self-development. His advice to
                      avoid unhealthy habits inspired me to build a solid
                      foundation for physical and mental well-being. As a
                      result, exercise and healthy habits became an integral
                      part of my identity. This process, however, had one
                      driving force - love. The desire to be a better version of
                      myself for the love of my life and for everyone around me
                      motivated me to constantly improve and work on myself,
                      making my life goal a clear commitment to be a good person
                      for my loved one and for everyone around me.
                    </p>
                    <p
                      className="absolute left-2 bottom-6 sm:px-10 px-8 text-[14px] underline underline-offset-4"
                      onClick={() =>
                        setShowMoreMyStoryTabletSecondBubble(
                          !showMoreMyStoryTabletSecondBubble
                        )
                      }
                    >
                      {showMoreMyStoryTabletSecondBubble ? (
                        <BiArrowToTop size={22} />
                      ) : (
                        "More..."
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={`mt-8 sm:mx-10 mx-2 max-w-full ${
                  showMoreMyStory ? "sm:h-[460px] h-[750px]" : "h-[150px]"
                } relative`}
              >
                {/*text bubble less/more for mobile*/}
                <div
                  className={`absolute bg-white w-full p-4 blur-md ${
                    showMoreMyStory ? "sm:h-[460px] h-[750px]" : "h-[150px]"
                  } `}
                ></div>
                <p
                  style={showMoreMyStory ? null : showMoreStyles}
                  className="absolute text-justify sm:text-base text-[14px]  sm:px-10 px-8 mt-8"
                >
                  In my young, specifically in elementary school, I began my
                  journey by not simply wanting to conform to the normal group
                  around me. On the contrary, I decided to actively
                  differentiate myself and seek my own identity. I remember a
                  time when I was the quiet boy in the dugout while the rest of
                  my classmates were busy with soccer, girls, and games. That's
                  when I understood that I didn't want to follow the same
                  pattern as everyone else. I decided to be authentic, to go my
                  own way, and to be influenced only by what was truly important
                  to me. The influence of the values I learned in my family,
                  especially from my father, shaped my decision to pursue a
                  healthy lifestyle and self-development. His advice to avoid
                  unhealthy habits inspired me to build a solid foundation for
                  physical and mental well-being. As a result, exercise and
                  healthy habits became an integral part of my identity. This
                  process, however, had one driving force - love. The desire to
                  be a better version of myself for the love of my life and for
                  everyone around me motivated me to constantly improve and work
                  on myself, making my life goal a clear commitment to be a good
                  person for my loved one and for everyone around me.
                </p>
                <p
                  className="absolute left-0 bottom-6 sm:px-10 px-8 text-[15px] underline underline-offset-4"
                  onClick={() => setShowMoreMyStory(!showMoreMyStory)}
                >
                  {showMoreMyStory ? <BiArrowToTop size={22} /> : "More..."}
                </p>
              </div>
            )}
          </div>
        </div>

        {/*Timeline*/}
        <div className="xl:h-[1250px] lg:h-[1000px] md:h-[600px] h-[650px]  relative">
          <img src={timelineBg} className="absolute w-full" />

          <div className="2xl:pt-[300px] xl:pt-[250px] sm:pt-[150px] pt-[125px] text-center">
            <h1 className="xl:text-4xl lg:text-3xl text-2xl text-center font-spectral tracking-[15px] 2xl:tracking-[50px] uppercase font-bold">
              Timeline
            </h1>
          </div>

          {isMobile ? (
            <img
              src={timeline}
              className=" mx-auto z-[-1] 2xl:mt-[140px] lg:mt-[100px] mt-20 2xl:w-[1550px] xl:w-[1100px] lg:w-[850px] md:w-[650px] w-[600px]"
            />
          ) : (
            <img
              src={timelineMobile}
              className=" z-[-1] mt-12 mx-auto w-[300px]"
            />
          )}
        </div>

        {/*My values*/}

        <div className="relative max-w-full 2xl:h-[1200px]">
          <img
            src={healthvaluesbg}
            className="absolute z-[-1] w-full 2xl:block hidden top-[100px]"
          />
          <img
            src={healthvaluesbgLaptop}
            className="absolute z-[-1] top-[110px] w-full xl:hidden lg:block hidden"
          />
          <img
            src={healthvaluesbgLaptopXL}
            className="absolute z-[-1] top-20 w-full 2xl:hidden xl:block hidden"
          />

          <div className="2xl:max-w-[1680px] max-w-[1380px] mx-auto 2xl:px-20 lg:px-20 sm:px-10 px-2 2xl:mt-0 lg:mt-[-350px]  2xl:pt-[300px] lg:pt-[200px] md:pt-20 pt-0">
            <h1 className="font-mplus flex justify-center lg:text-6xl md:text-5xl text-4xl uppercase font-bold tracking-widest">
              My values
            </h1>

            <div className="font-mplus grid grid-flow-col auto-cols-fr xl:mt-20 lg:mt-14 md:mt-14 mt-8 gap-x-2 sm:gap-x-8 md:gap-x-6 md:px-10 lg:gap-x-10 2xl:gap-x-20 2xl:px-[100px]">
              {/*Health*/}
              <div className="relative xl:py-5 lg:py-4 md:py-6 py-4 px-2 md:px-4 xl:px-8 2xl:h-[350px] bg-[#ACDC6F] rounded-[30px]  lg:rounded-[45px] xl:rounded-[60px] 2xl:rounded-[70px] custom-shadow-card3">
                <img
                  src={bottomShadow}
                  className="absolute lg:bottom-[-38px] xl:bottom-[-55px] md:bottom-[-30px] bottom-[-20px] mx-auto left-0 z-[-1]"
                />
                <div className="absolute w-[80%] 2xl:top-[220px] xl:top-[220px] lg:top-[145px] md:top-[110px] top-[85px] border border-black"></div>
                <img
                  src={health}
                  className="float-right 2xl:w-[125px] xl:w-[110px] lg:w-[80px] md:w-[60px] sm:w-[50px] w-[40px] 2xl:mr-4 lg:mr-3 xl:mt-4"
                />
                <div className="lg:pr-[100px] xl:pt-[155px] lg:pt-[100px] md:pt-[60px] pt-12 2xl:pb-10 xl:pb-8 lg:pb-4">
                  <h1 className="2xl:text-[38px] xl:text-4xl lg:text-2xl md:text-xl text-sm font-extrabold">
                    Health
                  </h1>
                  <a href="#healthSection">
                    <p className="underline underline-offset-4 xl:mt-12 lg:mt-5 md:mt-2 mt-4  2xl:text-[23px] xl:text-[20px] lg:text-[17px] text-xs font-spectral">
                      Learn more
                    </p>
                  </a>
                </div>
              </div>

              {/*Movement*/}
              <div className="relative xl:py-5 lg:py-4 md:py-6 py-4 px-2 md:px-4 xl:px-8 2xl:h-[350px] md:h-auto h-[140px] bg-[#DC836F] rounded-[30px]  lg:rounded-[45px] xl:rounded-[60px] 2xl:rounded-[70px] custom-shadow-card">
                <img
                  src={bottomShadow}
                  className="absolute lg:bottom-[-38px] xl:bottom-[-55px] md:bottom-[-30px] bottom-[-20px] mx-auto left-0 z-[-1]"
                />
                <div className="absolute w-[80%] 2xl:top-[220px] xl:top-[220px] lg:top-[145px] md:top-[110px] top-[85px] border border-black"></div>
                <img
                  src={movement}
                  className="float-right 2xl:w-[125px] xl:w-[110px] lg:w-[80px] md:w-[60px] sm:w-[50px] w-[40px] 2xl:mr-4 lg:mr-3 xl:mt-4"
                />
                <div className="lg:pr-[100px] xl:pt-[155px] lg:pt-[100px] md:pt-[60px] pt-12 2xl:pb-10 xl:pb-8 lg:pb-4">
                  <h1 className="2xl:text-[38px] xl:text-4xl lg:text-2xl md:text-xl text-sm font-extrabold">
                    Movement
                  </h1>
                  <a href="#movementSection">
                    <p className="underline underline-offset-4 xl:mt-12 lg:mt-5 md:mt-2 mt-4 2xl:text-[23px] xl:text-[20px] lg:text-[17px] text-xs font-spectral">
                      Learn more
                    </p>
                  </a>
                </div>
              </div>

              {/*Improvement*/}
              <div className="relative xl:py-5 lg:py-4 md:py-6 py-4 px-2 md:px-4 xl:px-8 2xl:h-[350px]  bg-[#6FD5DC] rounded-[30px] lg:rounded-[45px] xl:rounded-[60px] 2xl:rounded-[70px] custom-shadow-card2">
                <img
                  src={bottomShadow}
                  className="absolute lg:bottom-[-38px] xl:bottom-[-55px] md:bottom-[-30px] bottom-[-20px] mx-auto left-0 z-[-1]"
                />
                <div className="absolute w-[80%] 2xl:top-[220px] xl:top-[220px] lg:top-[145px] md:top-[110px] top-[85px] border border-black"></div>
                <img
                  src={improvement}
                  className="float-right 2xl:w-[125px] xl:w-[110px] lg:w-[80px] md:w-[60px] sm:w-[48px] w-[40px] 2xl:mr-4 lg:mr-3 xl:mt-4"
                />
                <div className="lg:pr-[100px] xl:pt-[155px] lg:pt-[100px] md:pt-[60px] pt-12 2xl:pb-10 xl:pb-8 lg:pb-4">
                  <h1 className="2xl:text-[38px] xl:text-4xl lg:text-2xl md:text-xl text-sm font-extrabold">
                    Improvement
                  </h1>
                  <a href="#improvementSection">
                    <p className="underline underline-offset-4 xl:mt-12 lg:mt-5 md:mt-2 mt-4 2xl:text-[23px] xl:text-[20px] lg:text-[17px] text-xs font-spectral">
                      Learn more
                    </p>
                  </a>
                </div>
              </div>
            </div>

            {/*Scroll down arrow*/}
            <div className="flex flex-col items-center mt-[180px] uppercase text-2xl">
              <Link to="healthSection" smooth={true} offset={-50}>
                <img
                  className=" 2xl:mt-[-20px] md:mt-[-130px] mt-[-150px] xl:w-[60px] md:w-[40px] w-[20px] duration-300 ease-in-out hover:scale-110"
                  src={isLaptop ? arrowDown : null}
                />
              </Link>
            </div>
          </div>
        </div>

        {/*Movement and improvement background picture*/}
        <img
          src={movimpbg}
          className="absolute 2xl:top-[6660px] xl:top-[5110px] lg:top-[4500px]   lg:block hidden w-full aspect-auto z-[-1]"
        />

        {/*Main Container*/}
        <div className="2xl:max-w-full max-w-[1380px] mx-auto  2xl:px-20 lg:px-10 sm:px-10 px-6">
          {/*Health*/}
          <div
            id="healthSection"
            className="relative max-w-full 2xl:h-[1200px] xl:h-[850px] lg:h-[780px] 2xl:mt-[-25px] xl:mt-0 lg:mt-[-100px]  mt-10"
          >
            <div className="2xl:px-20  2xl:pt-10  2xl:mt-[160px] xl:mt-8 lg:mt-20 md:mt-[450px]  xl:pt-[150px] lg:pt-[150px]  md:pt-[100px] ">
              <div className="relative 2xl:pt-[250px]">
                {/*Health Image on laptops/desktops*/}
                <img
                  className="lg:float-left md:block hidden mx-auto lg:mr-10 2xl:w-[700px] xl:w-[400px] lg:w-[380px] md:w-[350px] 2xl:mt-[-250px] lg:static absolute top-[-470px] right-0 "
                  src={healthImage}
                />
                <img
                  src={hearthIcon}
                  className=" block absolute 2xl:w-[1300px] xl:w-[500px] lg:w-[400px] md:w-[600px] w-[320px] 2xl:top-[-520px] xl:top-[-310px] lg:top-[-225px] md:top-[-480px] 2xl:left-[225px] xl:left-[260px] lg:left-[250px] md:left-[-150px] left-[-110px] lg:rotate-[0deg]  rotate-[16deg] z-[-1]"
                />

                <div className="md:flex md:items-start relative">
                  <h1 className="font-mplus 2xl:text-9xl xl:text-[100px] lg:text-7xl md:text-7xl  text-5xl uppercase md:rotate-[-10deg] rotate-0 decoration-4 text-center font-bold lg:text-left">
                    Health
                  </h1>
                  <img
                    src={healthUnderline}
                    className="absolute md:block hidden lg:bottom-[-40px] md:bottom-[-40px] bottom-[-20px] lg:right-auto right-0 left-0 md:mx-0 mx-auto 2xl:w-auto  xl:w-[450px] lg:w-[385px] md:w-[768px] w-[220px]"
                  />
                </div>

                {/*Health Image on mobiles/tablets*/}
                <img
                  className="lg:float-left md:hidden block mx-auto mt-20 w-[400px]"
                  src={healthImage}
                />

                <div className="font-medium 2xl:text-[22px] xl:text-lg lg:text-base 2xl:px-0 xl:px-[120px] lg:px-[150px] text-base  lg:tracking-wide 2xl:ml-[730px] xl:mt-16 lg:mt-16 md:mt-20  mt-6 2xl:max-w-[750px] mx-auto text-left 2xltext-justify 2xk:text-right">
                  Each of us has only one health, and we often wish for it on
                  occasions such as birthdays and other celebrations.
                  Unfortunately, many people neglect, risk, underestimate or
                  completely ignore their health, especially young people. In my
                  life, I have abstained from alcohol, never tried cigarettes,
                  and resisted the lure of addictive substances or drugs. This
                  may sound unbelievable, but it is true. Still, I felt that
                  wasn't enough, so I decided to take a more active role in my
                  health. I adopted a vegan lifestyle, cutting out meat, dairy,
                  and other animal products. Health isn't just about avoiding
                  substances; it also includes quality sleep, proper nutrition,
                  and mental well-being. On this site you can learn about these
                  and other topics.{" "}
                </div>
              </div>
            </div>
          </div>

          {/*Movement*/}
          <div
            id="movementSection"
            className="relative max-w-full 2xl:h-[1200px] xl:h-[900px] lg:h-[780px] 2xl:pt-[100px]  xl:pt-[100px] lg:pt-[100px] md:pt-[100px] lg:mt-[0px] md:mt-[50px] mt-[50px] pt-[50px]"
          >
            <img
              src={shoeIcon}
              className="absolute left-3 md:top-[190px] top-[115px] rotate-[-15deg] lg:hidden block md:w-[100px] w-[60px]"
            />
            <h1 className="font-mplus 2xl:text-9xl lg:text-7xl md:text-6xl text-[40px] text-center lg:text-left font-bold 2xl:pl-[150px] lg:pl-10 uppercase">
              Movement
            </h1>
            <img
              className="lg:float-left 2xl:mt-6 xl:mt-10 mt-12 2xl:pl-[110px] 2xl:mr-16 lg:mr-10 2xl:w-auto xl:w-[650px] lg:w-[450px] md:w-[700px] mx-auto"
              src={movementImage}
            />
            <div className="2xl:pr-[0px] 2xl:text-[22px] xl:text-lg lg:text-base text-base 2xl:leading-8 2xl:mt-8 xl:mt-10 lg:mt-10 mt-6 text-justify lg:text-left">
              Movement is definitely one of my values. But why movement? And
              what do we mean by it? Some might ask: 'Why movement? We move all
              the time, isn't that a normal part of our lives? So why should it
              be something special? Personally, I think yes, you're right,
              movement should be a natural part of our lives. However, I know
              from personal experience that we move much less these days than
              our ancestors did. Although our fast-paced and hectic lives bring
              us many conveniences that make our lives easier, we often don't
              even have to get out of our seats. However, in this section I want
              to focus on developing your physical health. To focus more on how
              we can live a more active and fulfilling life and how we can work
              on ourselves. This section is going to be full of movement,
              excitement, tips and tricks on how to improve your physical
              fitness, put on muscle or ultimately feel much better in your
              body.{" "}
            </div>
          </div>

          {/*Improvement*/}
          <div
            id="improvementSection"
            className="relative max-w-full 2xl:h-[1000px] 2xl:pt-[100px] xl:pt-[100px] lg:pt-[100px] md:pt-[100px] lg:mt-0 md:mt-[50px] mt-[100px] pt-[10px] "
          >
            <h1 className="font-mplus 2xl:text-[100px] lg:text-6xl md:text-5xl text-[28px] font-bold text-center lg:text-left 2xl:text-justify 2xl:pl-[310px] uppercase mb-2">
              Constant improvement
            </h1>
            <img
              src={improvementIcon}
              className="absolute right-3 md:top-[200px] top-[100px] rotate-[10deg] lg:hidden block md:w-[100px] w-[60px]"
            />
            <img
              className="lg:float-left mx-auto 2xl:pl-[110px] 2xl:mr-16 lg:mr-8 2xl:w-[800px] xl:w-[650px] lg:w-[500px] md:w-[700px] w-full 2xl:mt-20 lg:mt-[50px]  md:mt-10 mt-8"
              src={improvementImage}
            />

            <div className="font-normal 2xl:pr-[300px] 2xl:text-[22px] xl:text-lg lg:text-base md:text-base text-base 2xl:leading-8 2xl:mt-[330px] xl:mt-[310px] lg:mt-[250px] mt-6 text-justify lg:text-left">
              Last but not least, I would like to emphasize another of my values
              - continuous improvement. Strange as it may sound, I consider this
              to be one of the most important and crucial values that influences
              other values in my life. This desire to constantly improve and
              move forward helps us achieve amazing results. I find the adoption
              of this value very beneficial and useful in the context of
              personal development. As the old saying goes: "You learn all your
              life." I don't think we will ever achieve perfection and be
              flawless. But one thing is for sure - every day we have the
              opportunity to strive to be better, one choice at a time. Every
              second, every minute, every day, we can work to become better
              people. But that process begins in our minds.{" "}
            </div>
          </div>
        </div>

        {/*Contact*/}

        <div className="2xl:h-[1000px]  2xl:mt-[400px] xl:mt-[400px] lg:mt-[200px] md:mt-[125px] mt-[125px] 2xl:max-w-[1680px] max-w-[1380px] mx-auto 2xl:px-20 lg:px-10 md:px-[125px] sm:px-10 px-10 2xl:mb-0 xl:mb-[200px] lg:mb-[160px] md:mb-[140px] mb-20">
          <div className="lg:flex lg:items-center lg:justify-between xl:space-x-[200px] lg:space-x-10">
            <img
              src={contactImage}
              className="2xl:h-[800px] lg:h-[500px] xl:mr-[-100px]"
            />

            {/*Contact form*/}
            <div
              className="xl:w-[900px] mx-auto w-full font-cabin lg:mt-0 md:mt-12 mt-8"
              id="Email"
            >
              <form className="bg-white border-black  shadow-[14px_14px_5px_0px_rgba(152,131,131,0.6)] rounded-[50px] xl:px-10 px-4 py-10 mb-4  sm:text-base text-sm outline outline-[1px]">
                <h1 className="xl:text-3xl lg:text-2xl md:text-3xl text-xl font-bold">
                  Love to hear from you,
                  <br />
                  <div className="mt-2">Get in touch👋</div>
                </h1>

                <div className="mb-6 mt-8">
                  <label className="block text-gray-700 text-[15px] mb-3">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="user_Email"
                    onChange={(e) => setSubject(e.target.value)}
                    onClick={() => {
                      setSubjectError(false);
                      if (subjectError) {
                        document.getElementById("subject").value = "";
                      }
                    }}
                    className={`shadow border rounded-[20px] bg-[#ECECEC] duration-200 ease-in-out w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-lg outline-none ${
                      subjectError
                        ? "animate-shake border-red-600 text-red-600"
                        : ""
                    }`}
                  />
                </div>

                <div className="mb-2">
                  <label className="block text-gray-700 text-[15px] mb-3">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    id="message"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    onClick={() => {
                      setMessageError(false);
                      if (messageError) {
                        document.getElementById("message").value = "";
                      }
                    }}
                    className={`w-full bg-[#ECECEC] max-h-[175px] duration-200 border ease-in-out px-3 py-2 rounded-[20px] shadow focus:shadow-md outline-none switchGalleryScrollbar ${
                      messageError
                        ? "animate-shake border-red-600 text-red-600"
                        : ""
                    }`}
                  />
                  <a
                    onMouseEnter={() =>
                      isLaptop
                        ? setHoverOnSendButton(true)
                        : setHoverOnSendButton(false)
                    }
                    onMouseLeave={() => setHoverOnSendButton(false)}
                    onClick={(e) => {
                      setClickOnSendButton(true),
                        setTimeout(function () {
                          setClickOnSendButton(false);
                        }, 200);
                      sendMessage(e);
                    }}
                    className="flex justify-center space-x-2 w-full bg-black duration-700 ease-in-out py-2 px-3 mt-3 text-md  rounded-[20px] text-white lg:hover:bg-white lg:hover:text-black outline outline-[1px] outline-black active:bg-white active:text-black active:shadow-xl"
                  >
                    <p>Send</p>
                    <img
                      src={
                        hoverOnSendButton || clickOnSendButton
                          ? paperPlaneBlack
                          : paperPlane
                      }
                      className="my-auto"
                    />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
