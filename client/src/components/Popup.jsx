import React from 'react'

function Popup(props) {

  return(props.trigger) ? (
    <div className='fixed top-0 left-0 w-full h-[100vh] bg-[#00000080] flex justify-center items-center  md:hidden'>
      <div className='relative'>
        <button className='text-lg rounded-md px-2 bg-red-400 absolute right-3 sm:right-[-10px] top-[-10px] sm:top-[-55px]' onClick={() => props.setTrigger(false)}>X</button>
        {props.children}
      </div>
    </div>

  ) : <div className='hidden'>{props.children}</div>

}

export default Popup

