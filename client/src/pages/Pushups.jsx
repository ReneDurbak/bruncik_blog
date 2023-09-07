import { useEffect, useState } from "react";
import { useTransition, animated } from "react-spring";
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
import CloseButton from "../assets/closebutton.png"



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

  const Filteroptions = [
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
  const [open,setOpen] = useState(false)

  //Pop-ups variables
  const [timedPopup, setTimedPopup] = useState(false)

  //Pushups gallery variables

  const [pushupsGalleryIsVisible, setPushupsGalleryVisible] = useState(false)
  const pushupsGalleryTransition = useTransition(pushupsGalleryIsVisible, {
      config:{mass:1, tension:150, friction:30, clamp: true},
      from:{ x:700, opacity:0},
      enter:{x:0, opacity:1},
      leave:{x:550, opacity:0},
  })

  //Notifications variables

  const [notificationIsVisible, setNotificationIsVisible] = useState(false)
  const notificationsTransition = useTransition(notificationIsVisible,{
    config:{mass:1, tension:150, friction:40, clamp: true},
    from: {x:1000, opacity:0},
    enter:{x:0, opacity:1},
    leave:{x:1000, opacity:0},
  })





  useEffect(()=>{

    setTimeout(() => {
      setTimedPopup(true)
    }, 1000);

  },[])

  useEffect(() => {

    {/*Pushups gallery window*/}
    const handleClickOutsidePushupsGallery = (event) => {
      const pushupsGalleryElement = document.getElementById("pushupsgallery");
      const triggerpushupsgallery = document.getElementById("triggerpushupsgallery"); 
  
      if (pushupsGalleryElement && triggerpushupsgallery && !pushupsGalleryElement.contains(event.target) && !triggerpushupsgallery.contains(event.target)) {
        setPushupsGalleryVisible(false);
      }
    };
  
  
  if(pushupsGalleryIsVisible === true){
    window.addEventListener('click', handleClickOutsidePushupsGallery);
  }
  
    return () => {
      window.removeEventListener('click', handleClickOutsidePushupsGallery);
    };


 



  }, [pushupsGalleryIsVisible]);






  useEffect(() => {

       {/*Notification window*/}

       const handleClickOutisdeNotifications = (event) => {
        const notificationElement = document.getElementById("notifications")
        const triggerNotifications = document.getElementById("notificationsTrigger")
  
        if(notificationElement && triggerNotifications && !notificationElement.contains(event.target) && !triggerNotifications.contains(event.target)){
          setNotificationIsVisible(false)
        }
      }
  
        if(notificationIsVisible === true){
          window.addEventListener('click', handleClickOutisdeNotifications)
        }
  
        return()=>{
          window.removeEventListener('click', handleClickOutisdeNotifications)
        }
  
      

  },[notificationIsVisible])
  



    return(
        <>
        <Navbar/>
        
      {/*Push-ups intro*/}
      <div className="bg-[url('/src//assets/pushupsintrobg.png')] bg-cover py-[400px]"/>



      {/*Popup*/}
      <PushupsPopup trigger={timedPopup} setTrigger={setTimedPopup}>
      <div className='bg-white border-black border-2 rounded-[35px] text-2xl flex justify-center items-center'>
       <div className="max-w-full mx-auto px-6 py-10 text-center ">
       <div className="text-4xl"> Do you want to be on my site?</div><div className="mt-2">& have your own gallery of push ups?</div>

       <div className="mt-10 font-indieflower">Feel free to contact me on social media</div>

       <div className="flex justify-between mt-10 mx-14">
          <a href="https://www.instagram.com/peterbruncik/" target="_blank"><img src={instagramIcon} className="hover:scale-110 duration-300 ease-in-out"/></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=peterbruncik700%40gmail.com&su=[Subject]&body=[Peter - Usually replies within 24 hours.]" target="_blank" rel="noopener noreferrer"><img src={GmailIcon} className="hover:scale-110 duration-300 ease-in-out"/></a>
          <a href="https://twitter.com/peterbruncik" target="_blank"><img src={TwitterIcon} className="hover:scale-110 duration-300 ease-in-out"/></a>
       </div>


       <div className="text-sm mt-10">Note: Send me at least 7 videos of your push ups from every single day and I’ll post it on my page.<br/><strong>I’ll update it every week.</strong></div>
       </div>
      </div>
      </PushupsPopup>



      {/*Push-ups videos*/}
    <div className=" 2xl:max-w-[1680px] py-[100px] max-w-[1380px] mx-auto 2xl:px-20 sm:px-10 px-6 font-poppins">
       
       
    <div className="bg-[url('/src/assets/pushupsvideosbg.png')] bg-cover xl:px-12 lg:px-8  px-6 pt-14 pb-10 rounded-[50px]">
            {/*Notification and Push ups gallery container*/}
            <div className="flex justify-between ">
                <div className="my-auto">
                <h1 className="xl:text-[42px] lg:text-[38px] md:text-[34px] font-regular tracking-normal" >Explore</h1>
                </div>
                <div className="flex xl:space-x-12 lg:space-x-10 md:space-x-8">
                    
                    {/*Notifications button*/}
                    <div className="relative my-auto">
                    <img src={ringbell} className="xl:w-[48px] lg:w-[40px] md:w-[36px] hover:scale-105 duration-300 ease-in-out" onClick={()=>{setNotificationIsVisible(true)}} id="notificationsTrigger"/>

                      {/*Notification window*/}
                      {notificationsTransition((style,item)=>
                        item ?

                        <animated.div style={style} className="absolute top-0 left-[-580px] bottom-0 right-0 w-[650px] z-[2]">
                        <div className="relative bg-white flex flex-col py-8 pl-6 pr-10 justify-center items-start   rounded-[30px] z-[2]" id="notifications">
                          <div className=" h-full w-full">
                            <div className="absolute right-8 top-4"><img src={CloseButton} className="duration-300 ease-in-out hover:scale-110" onClick={()=>{setNotificationIsVisible(false)}}/></div>
                            <h1 className="text-2xl font-bold">Notifications</h1>
                          
                            <div className="flex space-x-3 mt-2 text-sm">
                              <div className="underline underline-offset-8">View all</div>
                              <div>Mentions</div>
                            </div>

                            {/*View all container*/}
                            <div className="flex flex-col mt-4">

                              <div className="flex space-x-4 my-2">
                                <img src={profilepicture2} className="w-[48px]"/>
                                <div className="my-auto w-full">
                                  <div>
                                    Peter Bruncik added new member YAKSHA
                                  </div>
                                  <div className="text-xs text-[#777777] mt-[1px] flex justify-between">
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

                        </div>
                        </div>
                      </animated.div>



                      : ""
                      )
                      }


                </div>
                    

                    {/*Push-ups gallery button*/}
              
                      <div className="relative my-auto">
                      <img src={profilepicture} className="xl:w-[64px] lg:w-[54px] md:w-[50px] hover:scale-105 duration-300 ease-in-out"  onClick={()=>setPushupsGalleryVisible(true)} id="triggerpushupsgallery"/>
                      
                      {/*Push ups gallery window*/}
                      {pushupsGalleryTransition((style,item) => 
                        item ?
                        <animated.div style={style} className="absolute w-[400px] top-0  left-[-335px]   z-[2] ">
                        <div className="h-full flex flex-col justify-center items-center  divide-y-2 divide-black" id="pushupsgallery">
                          {PushupsGallery.map(PushupsGallery =>
                          <div className=" relative bg-white  hover:bg-[#696969] flex flex-row items-center py-12  w-full first:rounded-t-[30px] duration-300 ease-in-out" key={PushupsGallery.id}>
                          <div className="absolute left-3"><img src={PushupsGallery.photo} className="xl:w-[64px] lg:w-[54px] md:w-[50px]"/></div>
                          <div className="absolute left-[110px] font-bold">{PushupsGallery.name}</div>
                        </div>
                          )}
                        <div className="relative bg-white  hover:bg-[#696969] w-full flex justify-center items-center rounded-b-[30px] py-12 space-x-10 duration-300 ease-in-out"><div className="absolute left-5"><img src={SwitchGalleryIcon}/></div> <div className="absolute left-[70px] font-bold">Switch to another gallery</div> </div>
                        </div> 
                        </animated.div> : ''
                      )}

                      </div>
               

                </div>
            </div>


            
        <div className="pt-10 pb-2 flex justify-between relative font-poppins">
        <div className="underline underline-offset-[3px] font-spectral xl:text-[18px] lg:text-[15px] md:text-[13px] font-bold 2xl:tracking-normal md:tracking-wider my-auto">Learn more about 100 club challenge </div>

        {/*Filter*/}
        <div className="flex space-x-6"><div className="2xl:text-md lg:text-sm md:text-[13px] my-auto text-[#545454] ">Filter</div> 
        <div>
        <div className="bg-white rounded-2xl max-w-full 2xl:w-[125px] xl:w-[110px] md:w-[95px] xl:py-3 md:py-2  flex items-center justify-center 2xl:text-[17px] xl:text-[15px] lg:text-md md:text-sm ">
          <div className="mr-2">{selected ? selected : "Newest"}</div> <MdKeyboardDoubleArrowDown size={18} onClick={()=>{setOpen(!open)}} className="hover:scale-125 duration-300 ease-in-out"/></div>
          
          <div className= {`absolute z-[1] top-10 right-0 2xl:w-[125px] xl:w-[110px] md:w-[95px]  rounded-2xl 2xl:text-[17px] xl:text-md md:text-sm   bg-white ${open? "" : "hidden"}`}>
          {Filteroptions.map((filteroption) => 
          <div 
            key={filteroption.id} 
            className="flex items-center justify-center px-4 py-[12px] first:rounded-t-2xl last:rounded-b-2xl  hover:bg-[#777777] active:bg-[#5e5d5d]"
            onClick={()=>{
              setSelected(filteroption.name)
              setOpen(!open)
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


<div className=" 2xl:pt-4 md:pt-10 pt-16 font-poppins">
    <div className="py-4 grid 2xl:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 grid-cols-2 2xl:gap-y-8 2xl:gap-x-10 xl:gap-y-10 xl:gap-x-10 lg:gap-y-8 lg:gap-x-8 md:gap-y-8 md:gap-x-8 gap-y-20 2xl:px-[120px] xl:px-20 lg:px-20 md:px-10 sm:px-[100px] px-2   2xl:max-w-full lg:max-w-full mx-auto 2xl:max-h-[700px] lg:max-h-[440px] md:max-h-[375px]  overflow-y-scroll pushupsScroll">


      <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out ">
        <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg md:text-base font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] md:h-[22px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm md:text-sm">56</div></div>
        </div>
        </div>

        <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo3.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out">
        <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg md:text-base font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] md:h-[22px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm md:text-sm">56</div></div>
        </div>
        </div>

        <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo4.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out">
        <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg md:text-base font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] md:h-[22px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm md:text-sm">56</div></div>
        </div>
        </div>

        <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo2.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out">
        <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg md:text-base font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] md:h-[22px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm md:text-sm">56</div></div>
        </div>
        </div>

        <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out">
        <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg md:text-base font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] md:h-[22px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm md:text-sm">56</div></div>
        </div>
        </div>

        <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo3.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out">
        <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg md:text-base font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] md:h-[22px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm md:text-sm">56</div></div>
        </div>
        </div>

        <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo2.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out">
        <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg md:text-base font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] md:h-[22px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm md:text-sm">56</div></div>
        </div>
        </div>

        <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo4.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out">
        <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg md:text-base font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] md:h-[22px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm md:text-sm">56</div></div>
        </div>
        </div>

        <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo3.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out">
        <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg md:text-base font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] md:h-[22px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm md:text-sm">56</div></div>
        </div>
        </div>

        <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo2.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out">
        <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg md:text-base font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] md:h-[22px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm md:text-sm">56</div></div>
        </div>
        </div>

        <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo2.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out">
        <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg md:text-base font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] md:h-[22px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm md:text-sm">56</div></div>
        </div>
        </div>

        <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo2.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out">
        <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg md:text-base font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] md:h-[22px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm md:text-sm">56</div></div>
        </div>
        </div>

        <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo2.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out">
        <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg md:text-base font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] md:h-[22px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm md:text-sm">56</div></div>
        </div>
        </div>

        <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo2.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out">
        <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg md:text-base font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] md:h-[22px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm md:text-sm">56</div></div>
        </div>
        </div>

        <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo2.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out">
        <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg md:text-base font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] md:h-[22px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm md:text-sm">56</div></div>
        </div>
        </div>

        <div className="relative aspect-[4/7] bg-[url('/src/assets/pushupvideo2.png')] bg-cover rounded-[30px] hover:scale-105 duration-500 ease-in-out">
        <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
          <div className="text-white left-0 2xl:text-2xl xl:text-xl lg:text-lg md:text-base font-bold pl-3 ">DAY 1</div>
          <div className="text-white 2xl:right-0 2xl:mr-0 mr-2 flex 2xl:w-auto"><img src={hearticon} className="lg:h-auto lg:w-[25px] md:w-[20px] md:h-[22px] my-auto"/><div className="my-auto lg:pl-2 md:pl-1 2xl:text-lg lg:text-sm md:text-sm">56</div></div>
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