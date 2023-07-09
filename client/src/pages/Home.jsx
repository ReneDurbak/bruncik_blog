import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home(){
    return(
        <>
    <Navbar/>
    <div className="2xl:pt-[400px] 2xl:pb-[350px] 2xl:px-[450px] 2xl:text-[160px] px-8 text-center mx-auto  xl:text-8xl lg:text-8xl text-5xl md:text-8xl md:pt-[380px] md:pb-[330px] xl:pt-[420px] xl:pb-[370px] lg:pt-[430px] lg:pb-[380px] pt-[450px] pb-[400px]  bg-amber-500 md:font-thin font-bold align-middle md:tracking-normal tracking-tight">
      "Breath in, breath out."
    </div>
    <div className="py-[500px] text-left 2xl:px-[450px] xl:px-[120px] px-[20px] md:text-7xl text-4xl font-bold">
      Hello!<br />
      I am Peter Brunčík.
    </div>
    <Footer/>
  </>
   
    )
    
}


export default Home