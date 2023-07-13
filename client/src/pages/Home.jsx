import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home(){
    return(
        <>
    <Navbar/>
    {/*Intro*/ }
    <div className="2xl:pt-[400px] 2xl:pb-[350px] 2xl:px-[450px] 2xl:text-[160px] px-8 text-center mx-auto  xl:text-8xl lg:text-8xl text-5xl md:text-8xl md:pt-[380px] md:pb-[330px] xl:pt-[420px] xl:pb-[370px] lg:pt-[430px] lg:pb-[380px] pt-[450px] pb-[400px]  bg-amber-500 md:font-thin font-bold align-middle md:tracking-normal tracking-tight">
      "Breath in, breath out."
    </div>

    {/*Explore*/ }
    <div className="max-w-[1240px] mx-auto py-[175px] px-4 sm:mb-[125px]">
      <h1 className="text-center sm:text-7xl text-5xl font-bold">
        Explore
      </h1>

      <div className="grid grid-flow-col auto-cols-fr lg:gap-20 sm:gap-16 gap-4  text-center sm:mt-[125px] mt-[50px] sm:text-xl md:text-2xl text-sm lg:px-[125px] sm:px-10">
        <div className="border-2 rounded-3xl bg-amber-500 px-4 py-3  duration-300 ease-in-out  hover:scale-105"><Link to="/articles">Articles</Link> </div>
        <div className="border-2 rounded-3xl bg-amber-500 px-4 py-3  duration-300 ease-in-out  hover:scale-105"><Link to="/push-ups">Push-ups</Link></div>
        <div className="border-2 rounded-3xl bg-amber-500 px-4 py-3  duration-300 ease-in-out  hover:scale-105" ><Link to="/mycourse">My course </Link></div>
      </div>

    </div>


    
    <Footer/>
  </>
   
    )
    
}


export default Home