import React from 'react'
import {GrFormClose} from "react-icons/gr"

function Popup(props) {

  return(props.trigger) ? (
    <div className='fixed top-0 left-0 w-full h-[100vh] bg-[#00000080] flex justify-center items-center  md:hidden'>
      <div className='relative'>
        <button className='rounded-md px-1 text-black bg-none absolute right-7 sm:right-1 top-1 sm:top-[-45px]' onClick={() => props.setTrigger(false)}><GrFormClose className="sm:text-2xl text-lg"/></button>
        {props.children}
      </div>
    </div>

  ) : <div className='hidden'>{props.children}</div>

}

export default Popup

