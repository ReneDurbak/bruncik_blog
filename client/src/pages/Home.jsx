import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {GiOpenBook} from 'react-icons/gi'
import {CgGym}  from 'react-icons/cg'
import {MdOutlineComputer} from 'react-icons/md'
import {BsInfoCircleFill} from 'react-icons/bs'

function Home(){
    return(
        <>
    <Navbar/>
    {/*Intro*/ }
    <div className="2xl:pt-[400px] 2xl:pb-[350px] 2xl:px-[450px] 2xl:text-[160px] px-8 text-center mx-auto  xl:text-8xl lg:text-8xl text-5xl md:text-8xl md:pt-[380px] md:pb-[330px] xl:pt-[420px] xl:pb-[370px] lg:pt-[430px] lg:pb-[380px] pt-[450px] pb-[400px]  bg-white md:font-thin font-bold align-middle md:tracking-normal tracking-tight">
      "Breath in, breath out."
    </div>

    {/*Explore*/ }
    <div className="max-w-[1240px] mx-auto py-[175px] px-4 sm:mb-[125px]">
      <h1 className="text-center sm:text-7xl text-5xl font-bold">
        Explore
      </h1>

      <div className="grid sm:grid-flow-col grid-cols-2 sm:auto-cols-fr sm:mx-0 mx-8 lg:gap-20 sm:gap-10 gap-6  text-center sm:mt-[125px] mt-[80px] md:text-base lg:text-lg xl:text-xl text-xs lg:px-[125px] sm:px-10">
      <div >
      <GiOpenBook  className="mx-auto my-5 xl:text-8xl md:text-7xl text-5xl"/>
        <div className="border-2 rounded-3xl bg-amber-500 px-4 py-3  duration-300 ease-in-out  hover:scale-105"><Link to="/articles">Articles</Link> </div>
        </div>

        <div>
          <CgGym className="mx-auto my-5 xl:text-8xl md:text-7xl text-5xl"/>
        <div className="border-2 rounded-3xl bg-amber-500 px-4 py-3  duration-300 ease-in-out  hover:scale-105"><Link to="/push-ups">Push-ups</Link></div>
        </div>


        <div>
          <MdOutlineComputer  className="mx-auto my-5 xl:text-8xl md:text-7xl text-5xl"/>
        <div className="border-2 rounded-3xl bg-amber-500 px-4 py-3  duration-300 ease-in-out  hover:scale-105" ><Link to="/mycourse">My course </Link></div>
        </div>

        <div>
          <BsInfoCircleFill  className="mx-auto my-5 xl:text-8xl md:text-7xl text-5xl"/>
        <div className="border-2 rounded-3xl bg-amber-500 px-4 py-3  duration-300 ease-in-out  hover:scale-105" ><Link to="/about">About </Link></div>
        </div>
      </div>

    </div>


    
    <Footer/>
  </>
   
    )
    
}


export default Home