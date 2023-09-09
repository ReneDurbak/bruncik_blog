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
import CloseButtonv2 from "../assets/closebuttonv2.png"



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
  const [notificationSwitch, setNotificationSwitch] = useState(false)
  const notificationsTransition = useTransition(notificationIsVisible,{
    config:{mass:1, tension:150, friction:40, clamp: true},
    from: {x:1000, opacity:0},
    enter:{x:0, opacity:1},
    leave:{x:1000, opacity:0},
  })

  //Gallery switch variables

  const [switchGallery, setSwitchGallery] = useState(false)
  const [galleryChange, setGalleryChanged] = useState(false)
 




  useEffect(()=>{

    setTimeout(() => {
      setTimedPopup(true)
    }, 1000);

  },[])

  useEffect(() => {

    {/*Pushups gallery window*/}
    const handleClickOutsidePushupsGallery = (event) => {
      const pushupsGalleryElement = document.getElementById("pushupsgallery");;
      const triggerpushupsgallery = document.getElementById("triggerpushupsgallery");


    if(pushupsGalleryElement && triggerpushupsgallery && !pushupsGalleryElement.contains(event.target) && !triggerpushupsgallery.contains(event.target)) {
      
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
  



    return(
        <>
        <Navbar/>
        
      {/*Push-ups intro*/}
      <div className="bg-[url('/src//assets/pushupsintrobg.png')] bg-cover xl:py-[500px] md:py-[350px] py-[300px]"/>



      {/*Popup*/}
      <PushupsPopup trigger={timedPopup} setTrigger={setTimedPopup} >
      <div className='bg-white border-black lg:border-2 border-[1px] rounded-[35px] xl:text-2xl lg:text-xl sm:text-[16px] text-[15px] flex justify-center items-center'>
       <div className="max-w-full mx-auto lg:px-6 sm:px-6  px-4 lg:py-10 sm:py-6 pb-3  pt-8 text-center ">
       <div className="xl:text-4xl lg:text-3xl sm:text-2xl text-[21px]"> Do you want to be on my site?</div><div className="mt-2">& have your own gallery of push ups?</div>

       <div className="md:mt-10 sm:mt-8 mt-6 font-indieflower">Feel free to contact me on social media</div>

       <div className="flex justify-between xl:mt-10 lg:mt-8 sm:mt-4 mt-4 xl:mx-0 lg:mx-18 sm:px-[100px] px-8">
          <a href="https://www.instagram.com/peterbruncik/" target="_blank"><img src={instagramIcon} className="hover:scale-110 duration-300 ease-in-out lg:w-auto w-[50px]"/></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=peterbruncik700%40gmail.com&su=[Subject]&body=[Peter - Usually replies within 24 hours.]" target="_blank" rel="noopener noreferrer"><img src={GmailIcon} className="hover:scale-110 duration-300 ease-in-out lg:w-auto w-[50px]"/></a>
          <a href="https://twitter.com/peterbruncik" target="_blank"><img src={TwitterIcon} className="hover:scale-110 duration-300 ease-in-out lg:w-auto w-[50px]"/></a>
       </div>


       <div className="lg:text-sm sm:text-xs text-[11px] xl:mt-10 lg:mt-8 sm:mt-6 mt-6 ">Note: Send me at least 7 videos of your push ups from every single day and I’ll post it on my page.<br/><strong>I’ll update it every week.</strong></div>
       </div>
      </div>
      </PushupsPopup>



      {/*Push-ups videos*/}
    <div className=" 2xl:max-w-[1680px] py-[100px] max-w-[1380px] mx-auto 2xl:px-20 sm:px-10 px-6 font-poppins">
       
       
    <div className="bg-[url('/src/assets/pushupsvideosbg.png')] bg-cover xl:px-12 lg:px-8  sm:px-6 px-3 pt-14 pb-10 rounded-[50px]">
            {/*Notification and Push ups gallery container*/}
            <div className="flex justify-between ">
                <div className="my-auto">
                <h1 className="xl:text-[42px] lg:text-[38px] md:text-[34px] text-[26px] font-regular tracking-normal" >Explore</h1>
                </div>
                <div className="flex xl:space-x-12 lg:space-x-10 md:space-x-8 space-x-4">
                    
                    {/*Notifications button*/}
                    <div className="relative my-auto">
                    <img src={ringbell} className="xl:w-[48px] lg:w-[40px] md:w-[36px] w-[28px] hover:scale-105 duration-300 ease-in-out cursor-pointer" onClick={()=>{setNotificationIsVisible(true)}} id="notificationsTrigger"/>

                      {/*Notification window*/}
                      {notificationsTransition((style,item)=>
                        item ?

                        <animated.div style={style} className="absolute md:top-0 top-[-10px] lg:left-[-580px] sm:left-[-470px] bottom-0 right-[-60px] lg:w-[650px] sm:w-[520px] w-[340px] px-0 z-[2]">
                        <div className="relative shadow-2xl bg-white flex flex-col 2xl:py-8 xl:py-6 lg:py-4 sm:py-3 py-3 lg:pl-6 pl-3 sm:pl-4 lg:pr-10 pr-3 justify-center items-start   rounded-[30px] z-[2]" id="notifications">
                          <div className=" h-full w-full">
                            <div className="absolute lg:right-8 sm:right-4 right-3 top-4"><img src={CloseButtonv2} className="duration-300 ease-in-out hover:scale-110 cursor-pointer sm:w-auto w-[18px]" onClick={()=>{setNotificationIsVisible(false)}}/></div>
                            <h1 className="2xl:text-2xl xl:text-xl sm:text-lg text-base font-bold">Notifications</h1>
                          
                            <div className="flex space-x-3 mt-2 2xl:text-sm text-[12px]">
                              <div className={`${notificationSwitch ? "no-underline" : "underline " } underline-offset-8 hover:underline duration-300 ease-in-out`} onClick={()=>setNotificationSwitch(false)}>View all</div>
                              <div className={`${notificationSwitch ? "underline " : "no-underline"} underline-offset-8 hover:underline duration-300 ease-in-out`} onClick={()=>setNotificationSwitch(true)}>Mentions</div>
                            </div>

                            {notificationSwitch ?
                            
        
                            <div className="flex-col mt-6">

                              <div className="flex space-x-4 my-3">
                                <img src={profilepicture2} className="2xl:w-[48px] w-[40px]"/>
                                <div className="my-auto w-full 2xl:text-base sm:text-[14px] text-xs">
                                  <div>
                                    @Peter Bruncik on DAY 41 ! Keep working!💪
                                  </div>
                                </div>
                              </div>
                              
                            </div>
                          
                          :
                          
                          

                          <div className="flex flex-col mt-4">

                              <div className="flex space-x-4 my-2">
                                <img src={profilepicture2} className="2xl:w-[48px]  w-[40px] "/>
                                <div className="my-auto w-full 2xl:text-base sm:text-[14px] text-xs">
                                  <div>
                                    Peter Bruncik added new member YAKSHA
                                  </div>
                                  <div className="2xl:text-xs lg:text-[11px] text-[10px] text-[#777777] mt-[1px] flex justify-between">
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
                      <animated.div style={style} className="absolute w-[400px]  shadow-2xl rounded-[30px] top-0  left-[-335px]   z-[2]">
                        
                        {switchGallery ?
                            <div className="bg-white  rounded-[30px] px-5 pt-3 pb-1"   id="switchpushups">
                            <div className="pr-20 flex flex-col space-y-1 overflow-y-scroll max-h-[200px] switchGalleryScrollbar">
                              
                              <div className="flex space-x-2">
                                <input type="checkbox" className="accent-gray-400 rounded-[30px] bg-gray-700 cursor-pointer" onClick={()=>{{setSwitchGallery(false)}; setGalleryChanged(true)}}/><div>Milan</div>
                              </div>

                              <div className="flex space-x-2">
                                <input type="checkbox" className="accent-gray-400 rounded-[30px] bg-gray-700 cursor-pointer" onClick={()=>{{setSwitchGallery(false)}; setGalleryChanged(true)}}/><div>Samo</div>
                              </div>

                              <div className="flex space-x-2">
                                <input type="checkbox" className="accent-gray-400 rounded-[30px] bg-gray-700 cursor-pointer" onClick={()=>{{setSwitchGallery(false)}; setGalleryChanged(true)}}/><div>Misko</div>
                              </div>

                              <div className="flex space-x-2">
                                <input type="checkbox" className="accent-gray-400 rounded-[30px] bg-gray-700 cursor-pointer" onClick={()=>{{setSwitchGallery(false)}; setGalleryChanged(true)}}/><div>Jozko</div>
                              </div>

                              <div className="flex space-x-2">
                                <input type="checkbox" className="accent-gray-400 rounded-[30px] bg-gray-700 cursor-pointer" onClick={()=>{{setSwitchGallery(false)}; setGalleryChanged(true)}}/><div>Marek</div>
                              </div>

                              <div className="flex space-x-2">
                                <input type="checkbox" className="accent-gray-400 rounded-[30px] bg-gray-700 cursor-pointer" onClick={()=>{{setSwitchGallery(false)}; setGalleryChanged(true)}}/><div>Riso</div>
                              </div>

                              <div className="flex space-x-2">
                                <input type="checkbox" className="accent-gray-400 rounded-[30px] bg-gray-700 cursor-pointer" onClick={()=>{{setSwitchGallery(false)}; setGalleryChanged(true)}}/><div>Martin</div>
                              </div>

                              <div className="flex space-x-2">
                                <input type="checkbox" className="accent-gray-400 rounded-[30px] bg-gray-700 cursor-pointer" onClick={()=>{{setSwitchGallery(false)}; setGalleryChanged(true)}}/><div>Gregor</div>
                              </div>

                              <div className="flex space-x-2">
                                <input type="checkbox" className="accent-gray-400 rounded-[30px] bg-gray-700 cursor-pointer" onClick={()=>{{setSwitchGallery(false)}; setGalleryChanged(true)}}/><div>Dano</div>
                              </div>
                            </div>
                          
                          </div>

                        
                      
                          :  
                          
                          <div className="h-full flex flex-col justify-center items-center  divide-y-2 divide-black"   id="pushupsgallery">
                          {PushupsGallery.map(PushupsGallery =>
                          <div className=" relative bg-white  hover:bg-[#696969] flex flex-row items-center py-12  w-full first:rounded-t-[30px] duration-300 ease-in-out" key={PushupsGallery.id}>
                          <div className="absolute left-3"><img src={PushupsGallery.photo} className="xl:w-[64px] lg:w-[54px] md:w-[50px]"/></div>
                          <div className="absolute left-[110px] font-bold">{PushupsGallery.name}</div>
                        </div>
                          )}
                        <div className=" bg-white  hover:bg-[#696969] w-full flex justify-center items-center rounded-b-[30px] py-12 space-x-10 duration-300 ease-in-out" onClick={()=>{setSwitchGallery(true); setGalleryChanged(false)}} > 
                          <img src={SwitchGalleryIcon} className="absolute left-5 hover:scale-110 duration-300 ease-in-out"/>
                          <div className="absolute left-[70px] font-bold">Switch to another gallery</div> 
                        </div>

                        </div> 
                        }

                      </animated.div> : ''
                        
                    )}
              

                    </div>
                </div>

            </div>


            
        <div className="pt-10 pb-2 flex justify-between relative font-poppins">
        <div className="underline underline-offset-[3px] font-spectral xl:text-[18px] lg:text-[15px] md:text-[13px] text-[10px] font-bold 2xl:tracking-normal md:tracking-wider my-auto">Learn more about 100 club challenge </div>

        {/*Filter*/}
        <div className="flex lg:space-x-6 md:space-x-4 space-x-3"><div className="2xl:text-md lg:text-sm md:text-[13px] text-[11px] my-auto text-[#545454] ">Filter</div> 
        <div>
        <div className="bg-white rounded-2xl shadow-lg max-w-full 2xl:w-[125px] xl:w-[110px] md:w-[95px] xl:py-3 md:py-2  p-2  flex items-center justify-center 2xl:text-[17px] xl:text-[15px] lg:text-md md:text-sm text-[13px]">
          <div className="mr-2">{selected ? selected : "Newest"}</div> <MdKeyboardDoubleArrowDown size={18} onClick={()=>{setOpen(!open)}} className="hover:scale-125 duration-300 ease-in-out xl:w-auto lg:w-[16px] w-[14px]"/></div>
          
          <div className= {`absolute z-[1] top-10 right-0 2xl:w-[125px] xl:w-[110px] md:w-[95px] w-[90px]  rounded-2xl 2xl:text-[17px] xl:text-md md:text-sm text-[13px]   bg-white ${open? "" : "hidden"}`}>
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
    <div className="py-4 grid 2xl:grid-cols-4 xl:grid-cols-4 sm:grid-cols-3 grid-cols-2 2xl:gap-y-8 2xl:gap-x-10 xl:gap-y-10 xl:gap-x-10 lg:gap-y-8 lg:gap-x-8 md:gap-y-8 md:gap-x-8 gap-y-10 gap-x-2 2xl:px-[120px] xl:px-20 lg:px-20 md:px-6  px-2   2xl:max-w-full lg:max-w-full mx-auto 2xl:max-h-[700px] lg:max-h-[440px] md:max-h-[375px] max-h-[350px]  overflow-y-scroll sm:pushupsScroll pushupsScrollSM">


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