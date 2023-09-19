import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
import { useMediaQuery } from 'react-responsive'
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import ringbell from "../assets/Ringbelt.png"
import profilepicture from "../assets/profilepicture.png"
import profilepicture2 from "../assets/profilepicture2.png"
import hearticon from "../assets/hearticon.png"
import {MdKeyboardDoubleArrowDown} from "react-icons/md"
import PushupsPopup from "../components/PushupsPopup";
import instagramIcon from "../assets/Instagram.png"
import GmailIcon from "../assets/Gmail.png"
import TwitterIcon from "../assets/Twitter.png"
import SwitchGalleryIcon from "../assets/Switchgalleryicon.png"
import {VscDebugStepBack} from "react-icons/vsc"
import CloseButtonv2 from "../assets/closebuttonv2.png"
import notificationBubble from "../assets/notificationBubble.png"



function Pushups(){


  const PushupsGallery = [
    {
      name:"Peter's Push Ups Gallery",
      id: 1,
      photo: profilepicture,
    },
    {
      name:"Teodor's Push Ups Gallery",
      id: 2,
      photo: profilepicture2,
    },
  ]

  const filterOptions = [
    {
      name: "Newest",
      id: 1
    },
    {
      name: "Oldest",
      id: 2
    },
    {
      name: "Recent",
      id: 3
    },
    {
      name: "Popular",
      id: 4
    },
  ]

  //Filter variables
  const [selected, setSelected] = useState("")
  const [openSwitchGalleryGenres,setOpenSwitchGalleryGenres] = useState(false)

  //Pop-ups variables
  const [timedPopup, setTimedPopup] = useState(false)

  //Resolution variables
  const isBigLaptop = useMediaQuery({query: '(min-width: 1280px )'})
  const isLaptop = useMediaQuery({query: '(min-width: 1024px )'})
  const isTablet = useMediaQuery({query: '(min-width: 768px )'})
  const isBigMobile = useMediaQuery({query: '(min-width: 640px )'})
  const isMobile = useMediaQuery({query: '(min-width: 275px )'})

  //Pushups gallery variables
  const [pushupsGalleryIsVisible, setPushupsGalleryVisible] = useState(false)
  const pushupsGalleryTransition = useTransition(pushupsGalleryIsVisible, {
      config:{mass:1, tension:150, friction:30, clamp: true},
      from:{ x: isBigLaptop ? 50 : isLaptop ? 60 : isTablet ? 55 : isBigMobile ? 45 : isMobile ? 20 : 700, opacity:0},
      enter:{x:0, opacity:1},
      leave:{x: isBigLaptop ? 50 : isLaptop ? 60 : isTablet ? 55 : isBigMobile ? 50 : isMobile ? 20 : 700, opacity:0},
  })

  //Notifications variables
  const [notificationIsVisible, setNotificationIsVisible] = useState(false)
  const [notificationSwitch, setNotificationSwitch] = useState(false)
  const notificationsTransition = useTransition(notificationIsVisible,{
    config:{mass:1, tension:150, friction:30, clamp: true},
    from: {x:isBigLaptop ? 200 : isLaptop ? 100 : isTablet ? 100 : isBigMobile ? 50 : isMobile ? 20 : 1000, opacity:0},
    enter:{x:0, opacity:1},
    leave:{x:isBigLaptop ? 200 : isLaptop ? 100 : isTablet ? 100 : isBigMobile ? 50 : isMobile ? 20 : 1000, opacity:0},
  })

  //Gallery switch variables
  const [switchGallery, setSwitchGallery] = useState(false)
 




  useEffect(()=>{

    setTimeout(() => {
      setTimedPopup(true)
    }, 1500);

  },[])



  useEffect(() => {

    {/*Pushups gallery window*/}
    const handleClickOutsidePushupsGallery = (event) => {

      const pushupsGalleryElement = document.getElementById("pushupsgallery");;
      const triggerpushupsgallery = document.getElementById("triggerpushupsgallery");


        if(triggerpushupsgallery && pushupsGalleryElement  && !triggerpushupsgallery.contains(event.target) && !pushupsGalleryElement.contains(event.target) ) {
          setPushupsGalleryVisible(false);
          setSwitchGallery(false)
        }
      
    };


    if(pushupsGalleryIsVisible === true ){
      window.addEventListener('click', handleClickOutsidePushupsGallery);
    }
      

    return () => {
      window.removeEventListener('click', handleClickOutsidePushupsGallery);
    };

  }, [pushupsGalleryIsVisible]);






  useEffect(() => {

       {/*Notification window*/}

       const handleClickOutsideNotifications = (event) => {

        const notificationElement = document.getElementById("notifications")
        const triggerNotifications = document.getElementById("notificationsTrigger")
  
        if(notificationElement && triggerNotifications && !notificationElement.contains(event.target) && !triggerNotifications.contains(event.target)){
          setNotificationIsVisible(false)
        }
      }
  
        if(notificationIsVisible === true){
          window.addEventListener('click', handleClickOutsideNotifications)
        }
  
        return()=>{
          window.removeEventListener('click', handleClickOutsideNotifications)
        }     

  },[notificationIsVisible])
  


  useEffect(()=>{

    {/*Switch Gallery genres window*/}

    const handleClickOutsideSwitchGalleryGenresElement = (event) =>{

    const switchGalleryGenresElement = document.getElementById("switchGalleryGenres")
    const triggerGalleryGenresElement = document.getElementById("switchGalleryGenresTrigger")

    if(switchGalleryGenresElement && triggerGalleryGenresElement && !switchGalleryGenresElement.contains(event.target) && !triggerGalleryGenresElement.contains(event.target)){
      setOpenSwitchGalleryGenres(false)
    }
  }


    if(openSwitchGalleryGenres === true){
      window.addEventListener('click', handleClickOutsideSwitchGalleryGenresElement)
  }

    return()=> {
      window.removeEventListener('click', handleClickOutsideSwitchGalleryGenresElement)
    }
     


  },[openSwitchGalleryGenres])



    return(
        <>
        <Navbar/>
        
      {/*Push-ups intro*/}
      <div className="bg-[url('/src//assets/pushupsintrobg.png')] bg-cover xl:py-[450px] md:py-[350px] py-[300px]"/>



      {/*Popup*/}
      <PushupsPopup trigger={timedPopup} setTrigger={setTimedPopup} >
      <div className='bg-white border-black xl:border-2 border-[1px] rounded-[35px] xl:text-2xl lg:text-xl sm:text-[16px] text-[15px] flex justify-center items-center'>
       <div className="max-w-full mx-auto lg:px-6 sm:px-6  px-4 lg:py-10 sm:py-6 pb-3  pt-8 text-center ">
       <div className="xl:text-4xl lg:text-3xl sm:text-2xl text-[21px]"> Do you want to be on my site?</div><div className="mt-2">& have your own gallery of push ups?</div>

       <div className="md:mt-10 sm:mt-8 mt-6 font-indieflower">Feel free to contact me on social media</div>

       <div className="flex justify-between items-center xl:mt-10 lg:mt-8 sm:mt-4 mt-4 xl:mx-0 lg:mx-18 sm:px-[100px] px-8">
          <a href="https://www.instagram.com/peterbruncik/" target="_blank"><img src={instagramIcon} className="hover:scale-110 duration-300 ease-in-out lg:w-[55px] w-[45px]"/></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=peterbruncik700%40gmail.com&su=[Subject]&body=[Peter - Usually replies within 24 hours.]" target="_blank" rel="noopener noreferrer"><img src={GmailIcon} className="hover:scale-110 duration-300 ease-in-out lg:w-auto w-[50px]"/></a>
          <a href="https://twitter.com/peterbruncik" target="_blank"><img src={TwitterIcon} className="hover:scale-110 duration-300 ease-in-out lg:w-auto w-[50px]"/></a>
       </div>


       <div className="lg:text-sm sm:text-xs text-[9px] xl:mt-10 lg:mt-8 sm:mt-6 mt-6 ">Note: Send me at least 7 videos of your push ups from every single day and I’ll post it on my page.<br/><strong>I’ll update it every week.</strong></div>
       </div>
      </div>
      </PushupsPopup>



      {/*Push-ups videos*/}
    <div className=" 2xl:max-w-[1680px] py-[100px] max-w-[1380px] mx-auto 2xl:px-20 sm:px-10 px-6 font-poppins">
       
       
    <div className="bg-[url('/src/assets/pushupsvideosbg.png')] bg-cover xl:px-12 lg:px-8  sm:px-6 px-3 md:pt-14 pt-6 pb-10 lg:rounded-[50px] rounded-[30px]">
            {/*Notification and Push ups gallery container*/}
            <div className="flex justify-between ">
                <div className="my-auto">
                <h1 className="xl:text-[42px] lg:text-[38px] md:text-[34px] text-[26px] font-semibold tracking-wider" >Explore</h1>
                </div>
                <div className="flex xl:space-x-12 lg:space-x-10 md:space-x-8 space-x-4">
                    
                    {/*Notifications button*/}
                    <div className="relative my-auto">
                    <img src={ringbell} className="xl:w-[48px] lg:w-[40px] md:w-[36px] w-[28px] hover:scale-105 duration-300 ease-in-out cursor-pointer" onClick={()=>{setNotificationIsVisible(true)}} id="notificationsTrigger"/>
                    <img src={notificationBubble} className="absolute xl:bottom-7 md:bottom-6 bottom-4  xl:left-7 md:left-5 left-4 xl:w-[30px] lg:w-[24px] md:w-[20px] w-[18px]" />
                      {/*Notification window*/}
                      {notificationsTransition((style,item)=>
                        item ?

                        <animated.div style={style} className="absolute top-[-10px] xl:left-[-490px] lg:left-[-510px] md:left-[-400px] bottom-0 right-[-55px] lg:w-[650px] md:w-[520px] w-[315px] px-0 z-[2]">
                        <div className="relative shadow-2xl bg-white flex flex-col 2xl:py-8 xl:py-6 lg:py-4 md:py-3 py-3 lg:pl-6 pl-3 md:pl-4 lg:pr-10 pr-3 justify-center items-start   lg:rounded-[30px] rounded-[20px] z-[2]" id="notifications">
                          <div className=" h-full w-full">
                            <div className="absolute lg:right-8 md:right-4 right-3 2xl:top-[35px] xl:top-6 md:top-4 top-3"><img src={CloseButtonv2} className="duration-300 ease-in-out hover:scale-110 cursor-pointer sm:w-auto 2xl:w-[26px] xl:w-[24px] w-[16px]" onClick={()=>{setNotificationIsVisible(false)}}/></div>
                            <h1 className="2xl:text-2xl xl:text-xl md:text-lg text-sm tracking-wider	 font-bold">Notifications</h1>
                          
                            <div className="flex space-x-3 mt-2 2xl:text-sm md:text-xs text-[10px] ">
                              <div className={`${notificationSwitch ? "no-underline text-gray-400" : "underline " } underline-offset-8 duration-300 ease-in-out cursor-pointer`} onClick={()=>setNotificationSwitch(false)}>View all</div>
                              <div className={`${notificationSwitch ? "underline " : "no-underline text-gray-400 hover:text-red-400"} underline-offset-8 duration-300 ease-in-out cursor-pointer`} onClick={()=>setNotificationSwitch(true)}>Mentions</div>
                            </div>

                            {notificationSwitch ?
                            
        
                            <div className="flex-col mt-6">

                              <div className="flex space-x-4 my-2">
                                <div>
                                  <img src={profilepicture2} className="2xl:w-[48px] md:w-[40px] w-[32px]"/>
                                </div>
                                <div className="my-auto w-full 2xl:text-base md:text-[14px] text-[11px]">
                                  <div>
                                    @Peter Bruncik on DAY 41 ! Keep working!💪
                                  </div>
                                </div>
                              </div>
                              
                            </div>
                          
                          :
                          
                          

                          <div className="flex flex-col mt-4">

                              <div className="flex space-x-4 my-2">
                                <div>
                                <img src={profilepicture2} className="2xl:w-[48px] md:w-[40px] w-[32px] "/>
                                </div>

                                <div className="my-auto w-full 2xl:text-base md:text-[14px] text-[11px]">
                                  <div>
                                    Peter Bruncik added new member YAKSHA
                                  </div>
                                  <div className="2xl:text-xs lg:text-[11px] text-[9px] text-[#777777] mt-[1px] flex justify-between">
                                    <div>
                                      Friday 2:20 pm
                                    </div>
                                    
                                    <div>
                                      Dec 24, 2023
                                    </div>
                                  </div>
                                </div>
                              </div>

                          </div>
                          }

                           

                            


                        </div>
                        </div>
                      </animated.div>



                      : ""
                      )
                      }


                </div>
                    

                    {/*Push-ups gallery button*/}
            
                    <div className="relative my-auto">
                    <img src={profilepicture} className="xl:w-[64px] lg:w-[54px] md:w-[50px] w-[36px] hover:scale-105 duration-300 ease-in-out cursor-pointer"  onClick={()=>setPushupsGalleryVisible(true)} id="triggerpushupsgallery"/>
                    
                    {/*Push ups gallery window*/}
            
                    {pushupsGalleryTransition((style,item) => 
                      item ?
                      <animated.div style={style} className="absolute xl:w-[400px] lg:w-[350px] sm:w-[300px] w-[190px]  shadow-2xl rounded-[30px] 2xl:top-0 md:top-[-2px] top-[-5px] 2xl:left-[-335px] xl:left-[-320px] lg:left-[-290px] sm:left-[-245px] left-[-150px]    z-[2]">
           
                         
                          
                          <div id="pushupsgallery">
                          <div className={`${switchGallery ? "hidden" : "h-full flex flex-col justify-center items-center  divide-y-[1px] divide-black xl:text-base sm:text-[12px] text-[9px]"}`}>
                          {PushupsGallery.map(PushupsGallery =>
                          <div key={PushupsGallery.id} onClick={()=>{ setPushupsGalleryVisible(false); setSwitchGallery(false)}} className=" relative bg-white  hover:bg-[#696969] flex flex-row items-center xl:py-12 lg:py-9 sm:py-8 py-6 w-full first:rounded-t-[30px] duration-300 ease-in-out" >
                          <div className="absolute sm:left-7 left-4"><img src={PushupsGallery.photo} className="xl:w-[64px] lg:w-[50px] sm:w-[42px] w-[25px]"/></div>
                          <div className="absolute lg:left-[130px] sm:left-[90px] left-[55px] font-regular">{PushupsGallery.name}</div>
                        </div>
                          )}
                        <div className=" bg-white  hover:bg-[#696969] w-full flex justify-center items-center rounded-b-[30px] xl:py-12 lg:py-10 sm:py-9 py-6 space-x-10 duration-300 ease-in-out" onClick={()=>{setSwitchGallery(true)}} > 
                          <img src={SwitchGalleryIcon} className="absolute sm:left-9 left-5 hover:scale-110 duration-300 ease-in-out xl:w-[58px] lg:w-[44px] sm:w-[36px] w-[20px]"/>
                          <div className="absolute lg:left-[90px] sm:left-[50px] left-[15px]">Switch to another gallery</div> 
                        </div>

                        </div>



                        
                        <div className={`${switchGallery ? "bg-white  rounded-[30px] px-5 py-3 xl:text-base lg:text-[14px] sm:text-[12px] text-[10px]" : "hidden"}`}>
                            <div className="pr-20 flex flex-col space-y-1 overflow-y-scroll xl:max-h-[200px] sm:max-h-[175px] max-h-[90px] switchGalleryScrollbar">
                              <VscDebugStepBack className="absolute sm:right-14 right-10 top-4 xl:text-xl lg:text-[16px] sm:text-base text-xs duration-300 ease-in-out hover:scale-110" onClick={()=>{{setSwitchGallery(false)}}}/>
                              <div className=" cursor-pointer">
                                <div className="flex md:space-x-2 space-x-1" onClick={()=>{ setPushupsGalleryVisible(false); setSwitchGallery(false)}}>
                                  <div className="accent-gray-400 xl:w-[25px] lg:w-[20px] sm:w-[18px] w-[16px]  rounded-[30px] bg-[#696969]"/><div>Milan</div>
                                </div>
                              </div>

                              <div>
                                <div className="flex md:space-x-2 space-x-1" onClick={()=>{ setPushupsGalleryVisible(false); setSwitchGallery(false)}}>
                                  <div className="accent-gray-400 xl:w-[25px] lg:w-[20px] sm:w-[18px] w-[16px]  rounded-[30px] bg-[#696969] cursor-pointer"/><div>Milan</div>
                                </div>
                              </div>

                              <div>
                                <div className="flex md:space-x-2 space-x-1" onClick={()=>{ setPushupsGalleryVisible(false); setSwitchGallery(false)}}>
                                  <div className="accent-gray-400 xl:w-[25px] lg:w-[20px] sm:w-[18px] w-[16px]  rounded-[30px] bg-[#696969] cursor-pointer"/><div>Milan</div>
                                </div>
                              </div>

                              <div>
                                <div className="flex md:space-x-2 space-x-1" onClick={()=>{ setPushupsGalleryVisible(false); setSwitchGallery(false)}}>
                                  <div className="accent-gray-400 xl:w-[25px] lg:w-[20px] sm:w-[18px] w-[16px]  rounded-[30px] bg-[#696969] cursor-pointer"/><div>Milan</div>
                                </div>
                              </div>
                              
                              <div>
                                <div className="flex md:space-x-2 space-x-1" onClick={()=>{ setPushupsGalleryVisible(false); setSwitchGallery(false)}}>
                                  <div className="accent-gray-400 xl:w-[25px] lg:w-[20px] sm:w-[18px] w-[16px]  rounded-[30px] bg-[#696969] cursor-pointer"/><div>Milan</div>
                                </div>
                              </div>

                              <div>
                                <div className="flex md:space-x-2 space-x-1" onClick={()=>{ setPushupsGalleryVisible(false); setSwitchGallery(false)}}>
                                  <div className="accent-gray-400 xl:w-[25px] lg:w-[20px] sm:w-[18px] w-[16px]  rounded-[30px] bg-[#696969] cursor-pointer"/><div>Milan</div>
                                </div>
                              </div>

                              <div>
                                <div className="flex md:space-x-2 space-x-1" onClick={()=>{ setPushupsGalleryVisible(false); setSwitchGallery(false)}}>
                                  <div className="accent-gray-400 xl:w-[25px] lg:w-[20px] sm:w-[18px] w-[16px]  rounded-[30px] bg-[#696969] cursor-pointer"/><div>Milan</div>
                                </div>
                              </div>

                              <div>
                                <div className="flex md:space-x-2 space-x-1" onClick={()=>{ setPushupsGalleryVisible(false); setSwitchGallery(false)}}>
                                  <div className="accent-gray-400 xl:w-[25px] lg:w-[20px] sm:w-[18px] w-[16px]  rounded-[30px] bg-[#696969] cursor-pointer"/><div>Milan</div>
                                </div>
                              </div>

                              <div>
                                <div className="flex md:space-x-2 space-x-1" onClick={()=>{ setPushupsGalleryVisible(false); setSwitchGallery(false)}}>
                                  <div className="accent-gray-400 xl:w-[25px] lg:w-[20px] sm:w-[18px] w-[16px]  rounded-[30px] bg-[#696969] cursor-pointer"/><div>Milan</div>
                                </div>
                              </div>

                              <div>
                                <div className="flex md:space-x-2 space-x-1" onClick={()=>{ setPushupsGalleryVisible(false); setSwitchGallery(false)}}>
                                  <div className="accent-gray-400 xl:w-[25px] lg:w-[20px] sm:w-[18px] w-[16px]  rounded-[30px] bg-[#696969] cursor-pointer"/><div>Milan</div>
                                </div>
                              </div>

                            </div>                          
                          </div>

                        </div>
                        

                      </animated.div> : ''
                        
                    )}
              

                    </div>
                </div>

            </div>


            
        <div className="pt-10 pb-2 flex justify-between relative font-poppins">
        <div className="underline underline-offset-[3px] font-spectral xl:text-[18px] lg:text-[15px] sm:text-[13px] text-[10px] font-regular 2xl:tracking-normal md:tracking-wider my-auto"><Link to="/articles">Learn more about 100 club challenge </Link> </div>

        {/*Filter*/}
        <div className="flex lg:space-x-6 md:space-x-4 space-x-3">
          <div className="2xl:text-md lg:text-sm md:text-[13px] text-[11px] my-auto text-[#545454] sm:block hidden ">Filter</div> 
        
        {/*Actual fitler*/}
        <div id="switchGalleryGenresTrigger" className={`${openSwitchGalleryGenres ? "" :"duration-500 ease-in-out hover:scale-110 cursor-pointer"}`} onClick={()=>{setOpenSwitchGalleryGenres(!openSwitchGalleryGenres)}}>
        <div className="bg-white md:rounded-2xl rounded-xl shadow-lg max-w-full 2xl:w-[125px] xl:w-[110px] md:w-[95px] xl:py-3 md:py-2  px-2 py-1  flex items-center justify-center 2xl:text-[17px] xl:text-[15px] lg:text-md md:text-sm text-[12px]">
          <div className="mr-2">{selected ? selected : "Newest"}</div> <MdKeyboardDoubleArrowDown size={18} className="hover:scale-125 duration-300 ease-in-out xl:w-auto lg:w-[16px] w-[14px]"/></div>
          
          <div id="switchGalleryGenres" className= {`absolute z-[1] top-10 right-0 2xl:w-[125px] xl:w-[110px] md:w-[95px] w-[90px]  rounded-2xl 2xl:text-[17px] xl:text-md md:text-sm text-[12px]   bg-white ${openSwitchGalleryGenres? "" : "hidden"}`}>
          {filterOptions.map((filteroption) => 
          <div 
            key={filteroption.id} 
            className="flex items-center justify-center px-4 py-[12px] first:rounded-t-2xl last:rounded-b-2xl  hover:bg-[#777777] active:bg-[#5e5d5d] cursor-pointer"
            onClick={()=>{
              setSelected(filteroption.name)
              setOpenSwitchGalleryGenres(!openSwitchGalleryGenres)
              console.log(filteroption)
            }}
            >
              {filteroption.name}
              </div>
              ) }
          </div>
          
          </div>
        </div>

        </div>


<div className=" 2xl:pt-4 md:pt-10 pt-4 font-poppins">
    <div className="py-4 grid 2xl:grid-cols-4 xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 2xl:gap-y-20 2xl:gap-x-10 xl:gap-y-16 xl:gap-x-10 lg:gap-y-20 lg:gap-x-8 md:gap-y-16 md:gap-x-8 gap-y-[50px] gap-x-4 2xl:px-[120px] xl:px-20 lg:px-20 md:px-8 sm:px-4  px-0 pr-2 sm:pr-4  2xl:max-w-full lg:max-w-full mx-auto 2xl:max-h-[700px] xl:max-h-[450px] lg:max-h-[440px] md:max-h-[375px] max-h-[350px]  overflow-y-scroll pushupsScroll">


      <div className="relative aspect-[4/7]">
        <iframe className="aspect-[4/7] w-full rounded-t-[30px]" src="https://www.youtube.com/embed/TAGCf_QzbBw" title="Mafia 2 Radio Soundtrack - Billy Merman - 900 miles" allowFullScreen/>
        <div className="absolute  w-full flex justify-between lg:px-6 md:px-3 px-2 py-1 bg-[#242424] roun rounded-b-[30px]">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg sm:text-base text-sm font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto md:space-x-0 space-x-1"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] sm:h-[22px] h-[18px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm sm:text-sm text-xs">56</div></div>
        </div>
      </div>

      <div className="relative aspect-[4/7]">
        <iframe className="aspect-[4/7] w-full rounded-t-[30px]" src="https://www.youtube.com/embed/v6HBZC9pZHQ" title="Baby Keem, Kendrick Lamar - family ties (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
        <div className="absolute w-full flex justify-between md:px-6 px-2 py-1  bg-[#242424] roun rounded-b-[30px]">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg sm:text-base text-sm font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto md:space-x-0 space-x-1"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] sm:h-[22px] h-[18px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm sm:text-sm text-xs">56</div></div>
        </div>
      </div>

      <div className="relative aspect-[4/7]">
        <iframe className="aspect-[4/7] w-full rounded-t-[30px]" src="https://www.youtube.com/embed/4B4pgDet6jo" title="𝐌𝐮𝐬𝐢𝐜 𝐒𝐨𝐮𝐧𝐝𝐬 𝐁𝐞𝐭𝐭𝐞𝐫 𝐖𝐢𝐭𝐡 𝐘𝐨𝐮 (Slowed) (Wolf Of Wallstreet) (Music VIdeo)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
        <div className="absolute w-full flex justify-between md:px-6 px-2 py-1  bg-[#242424] roun rounded-b-[30px]">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg sm:text-base text-sm font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto md:space-x-0 space-x-1"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] sm:h-[22px] h-[18px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm sm:text-sm text-xs">56</div></div>
        </div>
      </div>

      <div className="relative aspect-[4/7]">
        <iframe className="aspect-[4/7] w-full rounded-t-[30px]" src="https://www.youtube.com/embed/TAGCf_QzbBw" title="Mafia 2 Radio Soundtrack - Billy Merman - 900 miles" allowFullScreen/>
        <div className="absolute w-full flex justify-between md:px-6 px-2 py-1  bg-[#242424] roun rounded-b-[30px]">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg sm:text-base text-sm font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto md:space-x-0 space-x-1"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] sm:h-[22px] h-[18px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm sm:text-sm text-xs">56</div></div>
        </div>
      </div>

        <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out ">
        <div className="absolute bottom-0 w-full flex justify-between lg:px-3 sm:px-2 px-1 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg sm:text-base text-sm font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto md:space-x-0 space-x-1"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] sm:h-[22px] h-[18px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm sm:text-sm text-xs">56</div></div>
        </div>
        </div>

        <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo2.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out ">
        <div className="absolute bottom-0 w-full flex justify-between lg:px-3 sm:px-2 px-1 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg sm:text-base text-sm font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto md:space-x-0 space-x-1"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] sm:h-[22px] h-[18px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm sm:text-sm text-xs">56</div></div>
        </div>
        </div>

        <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out ">
        <div className="absolute bottom-0 w-full flex justify-between lg:px-3 sm:px-2 px-1 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg sm:text-base text-sm font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto md:space-x-0 space-x-1"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] sm:h-[22px] h-[18px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm sm:text-sm text-xs">56</div></div>
        </div>
        </div>

        <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo2.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out ">
        <div className="absolute bottom-0 w-full flex justify-between lg:px-3 sm:px-2 px-1 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg sm:text-base text-sm font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto md:space-x-0 space-x-1"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] sm:h-[22px] h-[18px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm sm:text-sm text-xs">56</div></div>
        </div>
        </div>

        <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo3.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out ">
        <div className="absolute bottom-0 w-full flex justify-between lg:px-3 sm:px-2 px-1 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg sm:text-base text-sm font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto md:space-x-0 space-x-1"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] sm:h-[22px] h-[18px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm sm:text-sm text-xs">56</div></div>
        </div>
        </div>

        <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out ">
        <div className="absolute bottom-0 w-full flex justify-between lg:px-3 sm:px-2 px-1 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg sm:text-base text-sm font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto md:space-x-0 space-x-1"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] sm:h-[22px] h-[18px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm sm:text-sm text-xs">56</div></div>
        </div>
        </div>

        <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo3.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out ">
        <div className="absolute bottom-0 w-full flex justify-between lg:px-3 sm:px-2 px-1 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg sm:text-base text-sm font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto md:space-x-0 space-x-1"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] sm:h-[22px] h-[18px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm sm:text-sm text-xs">56</div></div>
        </div>
        </div>

        <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo2.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out ">
        <div className="absolute bottom-0 w-full flex justify-between lg:px-3 sm:px-2 px-1 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg sm:text-base text-sm font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto md:space-x-0 space-x-1"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] sm:h-[22px] h-[18px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm sm:text-sm text-xs">56</div></div>
        </div>
        </div>

        <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out ">
        <div className="absolute bottom-0 w-full flex justify-between lg:px-3 sm:px-2 px-1 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg sm:text-base text-sm font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto md:space-x-0 space-x-1"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] sm:h-[22px] h-[18px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm sm:text-sm text-xs">56</div></div>
        </div>
        </div>

        
        



        </div>
</div>


        </div>
    </div>


    <Footer/>
        </>
    )
}


export default Pushups