import React, { useEffect, useState } from 'react'
import CloseButton from "../assets/closebutton.png"


export default function PushupsPopup(props) {

    const [clickedOutside, setClickedOutside] = useState(false)

    useEffect(()=>{

        const handleClickOutside= (event)=>{
            const popupElement = document.getElementById("pop-up")
            if(popupElement && !popupElement.contains(event.target)){
                setClickedOutside(true)
                props.setTrigger(false)
            }
        }

        if(clickedOutside === false){
            window.addEventListener('click', handleClickOutside)
        }

        return()=>{
            window.removeEventListener('click',handleClickOutside)
        }

    },[])

  return props.trigger && !clickedOutside ?(
    <div className="fixed top-0 left-0 bg-[#00000080] z-[10] h-[100vh] w-full flex justify-center items-center">
        <div className="relative lg:px-0 sm:px-[75px] px-3" id='pop-up'>
            <button className='2xl:text-xl xl:text-lg lg:text-base md:text-sm sm:text-xs text-[8px] absolute top-[12px] lg:right-[20px] sm:right-[90px] right-6 text-black' onClick={()=>{props.setTrigger(false)}}><img src={CloseButton} className="hover:scale-110 active:scale-110 lg:w-auto sm:w-[25px] w-[23px] duration-300 ease-in-out"/></button>
          {props.children}
        </div>
    </div>
  ): null
}
