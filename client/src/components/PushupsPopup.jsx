import React, { useEffect, useState } from 'react'

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

        if(props.trigger){
            window.addEventListener('click', handleClickOutside)
        }

        return()=>{
            window.removeEventListener('click',handleClickOutside)
        }

    },[props.trigger, props.setTrigger])

  return props.trigger && !clickedOutside ?(
    <div className="fixed top-0 left-0 bg-[#00000080] z-[10] h-[100vh] w-full flex justify-center items-center">
        <div className="relative" id='pop-up'>
            <button className='text-xl absolute top-[12px] right-[20px] text-black' onClick={()=>{props.setTrigger(false)}}>X</button>
          {props.children}
        </div>
    </div>
  ): null
}
