import { useState, useEffect } from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import { NavLink, Link } from 'react-router-dom';
import logo from "../assets/icon.png"


function Navbar(){
  const [nav,setNav] = useState(false)

  const handleNav=() => {
    setNav(!nav)
  }


  const scrollDirection = useScrollDirection();

  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);
  
    useEffect(() => {
      let lastScrollY = window.pageYOffset;
  
      const updateScrollDirection = () => {
        if(window.innerWidth < 640){
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      }
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      } 
    }, [scrollDirection]);
  
    return scrollDirection;
  };


return(
    <>
    

      
    <header className={`w-full z-[5] bg-[#2A6CA5] text-white sm:fixed sticky transition-all duration-300 ${scrollDirection === "down" ? "top-[-100px]" : "top-0"}`}> 
  <div className=" 2xl:p-5 xl:p-6 sm:p-[18px] p-4 md:flex md:items-center md:justify-between 2xl:max-w-[1680px] max-w-[1380px] mx-auto 2xl:px-20 lg:px-20 sm:px-10 px-6">
    <div className="flex items-center justify-between w-full md:w-auto">
      <h1 className="text-white 2xl:text-[32px] xl:text-3xl lg:text-[26px] md:text-2xl sm:text-2xl  text-[25px] font-hurricane cursor-pointer"><Link to="/"><div className="flex space-x-2"><img src={logo} className='xl:w-[26px] lg:w-[18px] md:w-[16px] w-[21px]  my-auto'/><div>Peter Brunčík</div></div></Link></h1>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu className="cursor-pointer"  size={20} /> : <AiOutlineClose className="cursor-pointer" size={20} />}
      </div>
    </div>
    {/* ----desktop version------ */}
    <ul className="md:flex md:flex-row flex-col md:items-center hidden md:ml-10">
      <li className="sm:mx-0 md:mx-3 lg:mx-4 xl:mx-5  md:text-sm xl:text-base 2xl:text-lg hover:text-neutral-400 duration-300"><NavLink to="/">Home</NavLink></li>
      <li className="sm:mx-0 md:mx-3 lg:mx-4 xl:mx-5  md:text-sm xl:text-base 2xl:text-lg  hover:text-neutral-400 duration-300"><NavLink to="/push-ups">Push-ups</NavLink></li>
      <li className="sm:mx-0 md:mx-3 lg:mx-4 xl:mx-5  md:text-sm xl:text-base 2xl:text-lg hover:text-neutral-400 duration-300"><NavLink to="/articles">Articles</NavLink></li>
      <li className="sm:mx-0 md:mx-3 lg:mx-4 xl:mx-5  md:text-sm xl:text-base 2xl:text-lg hover:text-neutral-400 duration-300"><NavLink to="/mycourse">My Course</NavLink></li>
      <li className="sm:ml-0 md:ml-3 lg:ml-4 xl:ml-5  md:text-sm xl:text-base 2xl:text-lg hover:text-neutral-400 duration-300"><NavLink to="/about">About Me</NavLink></li>
    </ul>

    
  </div>

  {/* ----mobile version------ */}
  
    <ul className={nav ? "origin-top flex flex-col absolute top-18  w-full ease-in-out duration-500  md:hidden  bg-[#2A6CA5] opacity-100  z-20" : "origin-top scale-y-0 	 flex flex-col absolute top-18  w-full ease-in-out duration-500  md:hidden  bg-[#2A6CA5] opacity-100  z-20"}>
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