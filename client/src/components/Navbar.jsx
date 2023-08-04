import { useState } from 'react'
import React from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { NavLink, Link } from 'react-router-dom';


function Navbar(){
  const [nav,setNav] = useState(false)

  const handleNav=() => {
    setNav(!nav)
  }


return(
    <>
    

      
    <header className="w-full bg-sky-700  text-white fixed top-0 left-0 lg:border-b-2">
  <div className="p-6 md:flex md:items-center md:justify-between 2xl:max-w-[1680px] max-w-[1380px] mx-auto 2xl:px-4 sm:px-10 px-6">
    <div className="flex items-center justify-between w-full md:w-auto">
      <h1 className="text-white 2xl:text-3xl lg:text-2xl md:text-2xl sm:text-2xl  text-2xl font-hurricane cursor-pointer"><Link to="/">Peter Brunčík</Link></h1>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu className="cursor-pointer"  size={20} /> : <AiOutlineClose className="cursor-pointer" size={20} />}
      </div>
    </div>
    {/* ----desktop version------ */}
    <ul className="md:flex md:flex-row flex-col md:items-center hidden md:ml-10">
      <li className="sm:mx-0 md:mx-3 lg:mx-4 xl:mx-5  md:text-sm lg:text-base 2xl:text-xl hover:text-neutral-400 duration-300"><NavLink to="/">Home</NavLink></li>
      <li className="sm:mx-0 md:mx-3 lg:mx-4 xl:mx-5  md:text-sm lg:text-base 2xl:text-xl  hover:text-neutral-400 duration-300"><NavLink to="/push-ups">Push-ups</NavLink></li>
      <li className="sm:mx-0 md:mx-3 lg:mx-4 xl:mx-5  md:text-sm lg:text-base 2xl:text-xl hover:text-neutral-400 duration-300"><NavLink to="/articles">Articles</NavLink></li>
      <li className="sm:mx-0 md:mx-3 lg:mx-4 xl:mx-5  md:text-sm lg:text-base 2xl:text-xl hover:text-neutral-400 duration-300"><NavLink to="/mycourse">My Course</NavLink></li>
      <li className="sm:ml-0 md:ml-3 lg:ml-4 xl:ml-5  md:text-sm lg:text-base 2xl:text-xl hover:text-neutral-400 duration-300"><NavLink to="/about">About Me</NavLink></li>
    </ul>

    
  </div>

  {/* ----mobile version------ */}
  
    <ul className={nav ? " flex flex-col pt-8 fixed top-9 left-0 w-full ease-in-out duration-1000 md:hidden z-[-1] bg-sky-700 opacity-100 " : "fixed top-[-50%] z-[-1] left-0 w-full ease-in-out duration-1000  md:hidden  bg-sky-800 opacity-0"}>
      <li className="p-4 sm:text-lg text-sm hover:text-neutral-400 duration-300 w-full text-center"><NavLink to="/">Home</NavLink></li>
      <li className="p-4 sm:text-lg text-sm hover:text-neutral-400 duration-300 text-center"><NavLink to="/push-ups">Push-ups</NavLink></li>
      <li className="p-4 sm:text-lg text-sm hover:text-neutral-400 duration-300 text-center"><NavLink to="/articles">Articles</NavLink></li>
      <li className="p-4 sm:text-lg text-sm hover:text-neutral-400 duration-300 text-center"><NavLink to="/mycourse">My Course</NavLink></li>
      <li className="p-4 pb-6 sm:text-lg text-sm hover:text-neutral-400 duration-300 text-center"><NavLink to="/about">About Me</NavLink></li>
    </ul>


  
</header>




    </>
)
}

export default Navbar