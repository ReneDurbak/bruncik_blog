import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {GiOpenBook} from 'react-icons/gi'
import {CgGym}  from 'react-icons/cg'
import {MdOutlineComputer} from 'react-icons/md'
import {BsInfoCircleFill} from 'react-icons/bs'
import {AiOutlineArrowRight} from 'react-icons/ai'

function Home(){
    return(
        <>
    <Navbar/>
    {/*Intro*/ }
    <div className=" 2xl:text-[160px] px-20 text-center mx-auto w-full  xl:text-8xl lg:text-8xl text-5xl md:text-8xl md:pt-[490px] md:pb-[440px] xl:pt-[520px] xl:pb-[470px] 3xl:pt-[480px] 3xl:pb-[440px] 2xl:pt-[410px] 2xl:pb-[360px] 2xl:px-[200px] lg:pt-[520px] lg:pb-[470px] pt-[540px] pb-[490px]  bg-[url('/src/assets/bgImg.jpg')] bg-cover font-bold align-middle md:tracking-normal tracking-tight text-white leading-normal">
      Breath in<br/> Breath out
    </div>

    {/*Explore*/ }
    <div className="max-w-[1240px] mx-auto py-[175px] px-4 sm:mb-[125px]">
      <h1 className="sm:float-left text-center xl:text-5xl md:text-3xl sm:text-2xl text-lg font-bold underline sm:underline-offset-[20px] decoration-2  sm:px-10 sm:mx-0 mx-8">
        What you can see on my site...
      </h1>

      <div className="grid sm:grid-flow-col grid-cols-2 sm:auto-cols-fr sm:mx-0 mx-8 lg:gap-20 sm:gap-8 gap-6  text-center sm:mt-[175px] mt-[80px] md:text-base lg:text-lg xl:text-xl text-xs  sm:px-10">
      <div >
      <GiOpenBook  className="mx-auto my-5 xl:text-8xl md:text-7xl text-5xl"/>
        <div className="border-2 rounded-3xl bg-yellow-500 px-4 py-3  duration-300 ease-in-out sm:text-sm md:text-lg">Articles </div>
        <div className="mt-4 mx-auto md:text-sm sm:text-xs   duration-500 ease-in-out md:border-2 border-2 sm:border-0 border-black rounded-md py-2 xl:px-4 px-4  md:w-[120px] w-[100px] hover:scale-110"><div><Link to="/articles">Explore <AiOutlineArrowRight className="float-right sm:text-xs text-[10px] my-[3px] sm:my-[2px] md:my-1"/>  </Link> </div></div>

        </div>

        <div>
          <CgGym className="mx-auto my-5 xl:text-8xl md:text-7xl text-5xl"/>
        <div className="border-2 rounded-3xl bg-yellow-500 px-4 py-3  duration-300 ease-in-out sm:text-sm md:text-lg  ">Push-ups</div>
        <div className="mt-4 mx-auto md:text-sm sm:text-md   duration-500 ease-in-out md:border-2 border-2 sm:border-0 border-black rounded-md py-2 xl:px-4 px-4  md:w-[120px] w-[100px] hover:scale-110"><div><Link to="/push-ups">Explore <AiOutlineArrowRight className="float-right sm:text-xs text-[10px] my-[3px] sm:my-[2px] md:my-1"/>  </Link> </div></div>

        </div>


        <div>
          <MdOutlineComputer  className="mx-auto my-5 xl:text-8xl md:text-7xl text-5xl"/>
        <div className="border-2 rounded-3xl bg-yellow-500 px-4 py-3  duration-300 ease-in-out sm:text-sm md:text-lg" >My course </div>
        <div className="mt-4 mx-auto md:text-sm sm:text-xs   duration-500 ease-in-out md:border-2 border-2 sm:border-0 border-black rounded-md py-2 xl:px-4 px-4  md:w-[120px] w-[100px] hover:scale-110"><div><Link to="/mycourse">Explore <AiOutlineArrowRight className="float-right sm:text-xs text-[10px] my-[3px] sm:my-[2px] md:my-1"/>  </Link> </div></div>
        
        </div>

        <div>
          <BsInfoCircleFill  className="mx-auto my-5 xl:text-8xl md:text-7xl text-5xl"/>
        <div className="border-2 rounded-3xl bg-yellow-500 px-4 py-3  duration-300 ease-in-out sm:text-sm md:text-lg " >About </div>
        <div className="mt-4 mx-auto md:text-sm sm:text-xs   duration-500 ease-in-out md:border-2 border-2 sm:border-0 border-black rounded-md py-2 xl:px-4 px-4  md:w-[120px] w-[100px] hover:scale-110"><div><Link to="/about">Explore <AiOutlineArrowRight className="float-right sm:text-xs text-[10px] my-[3px] sm:my-[2px] md:my-1"/>  </Link> </div></div>

        </div>
      </div>

    </div>


    
    <Footer/>
  </>
   
    )
    
}


export default Home