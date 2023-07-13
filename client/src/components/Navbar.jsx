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
    

      
    <header className="w-full  bg-cyan-700  text-white fixed top-0 left-0 z-10">
  <div className="p-6 md:flex md:items-center md:justify-between max-w-[1240px] mx-auto px-4">
    <div className="flex items-center justify-between w-full md:w-auto">
      <h1 className="text-white lg:text-3xl md:text-2xl sm:text-3xl  text-3xl font-hurricane cursor-pointer"><Link to="/">Peter Brunčík</Link></h1>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu  size={20} /> : <AiOutlineClose size={20} />}
      </div>
    </div>
    {/* ----desktop version------ */}
    <ul className="md:flex md:items-center hidden md:ml-10">
      <li className="sm:mx-0 md:mx-5 lg:mx-5  md:text-base lg:text-xl hover:text-neutral-400 duration-300"><NavLink to="/">Home</NavLink></li>
      <li className="sm:mx-0 md:mx-5 lg:mx-5  md:text-base lg:text-xl hover:text-neutral-400 duration-300"><NavLink to="/about">About</NavLink></li>
      <li className="sm:mx-0 md:mx-5 lg:mx-5  md:text-base lg:text-xl hover:text-neutral-400 duration-300"><NavLink to="/articles">Articles</NavLink></li>
      <li className="sm:mx-0 md:mx-5 lg:mx-5  md:text-base lg:text-xl hover:text-neutral-400 duration-300"><NavLink to="/push-ups">Push-ups</NavLink></li>
      <li className="sm:mx-0 md:mx-5 lg:mx-5  md:text-base lg:text-xl hover:text-neutral-400 duration-300"><NavLink to="/mycourse">My course</NavLink></li>
    </ul>

    {/* ----mobile version------ */}
    <div className={nav ? "fixed top-14 left-0 w-full ease-in-out duration-500 md:hidden  bg-cyan-700 " : "fixed top-[-100%]"}>
    <ul className="flex flex-col pt-8">
      <li className="p-4 md:text-base text-xl hover:text-neutral-400 duration-300 w-full border-b border-gray-400 text-center"><NavLink to="/">Home</NavLink></li>
      <li className="p-4 md:text-base text-xl hover:text-neutral-400 duration-300 border-b border-gray-400 text-center"><NavLink to="/about">About</NavLink></li>
      <li className="p-4 md:text-base text-xl hover:text-neutral-400 duration-300 border-b border-gray-400 text-center"><NavLink to="/articles">Articles</NavLink></li>
      <li className="p-4 md:text-base text-xl hover:text-neutral-400 duration-300 border-b border-gray-400 text-center"><NavLink to="/push-ups">Push-ups</NavLink></li>
      <li className="p-4 pb-6 md:text-base text-xl hover:text-neutral-400 duration-300 text-center"><NavLink to="/mycourse">My course</NavLink></li>
    </ul>
  </div>
  </div>

  
</header>




    </>
)
}

export default Navbar