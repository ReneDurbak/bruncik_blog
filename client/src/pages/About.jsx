import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import selfie from "../assets/selfiePhoto.png"
import timeline from "../assets/timeline.png"
import timelineBg from "../assets/timelineBg.png"
import health from "../assets/valuesHealth.png"
import movement from "../assets/valuesMovement.png"
import improvement from "../assets/valuesImprovement.png"
import arrowDown from "../assets/arrowDown.png"
import healthImage from "../assets/healthImages.png"
import movementImage from "../assets/movement.png"
import movementBg from "../assets/movementbg.png"
import improvementImage from "../assets/improvement.png"
import improvementBg from "../assets/improvementbg.png"
import contactImage from "../assets/contactImage.png"
import movimpbg from "../assets/movimpbg.png"
import healthHeart from "../assets/healthHeartBg.png"
import Registration from "../components/Registration";
import { Helmet } from 'react-helmet';
import { Link } from "react-scroll";





function About(){

  

return(
    <>
    <Helmet>
        <title>About me</title>
        <link rel="icon" type="image/svg+xml" href="/aboutme.png" />
    </Helmet>

    <Navbar/>
    
    <div className="mb-[300px]">
    {/*Hello intro*/}
    <div className="bg-no-repeat bg-cover h-[1100px] w-full mt-10" style={{
      backgroundImage: `url('/src/assets/aboutMeIntro.png')`,
      }}>
        <div className="2xl:max-w-[1680px] max-w-[1380px] mx-auto 2xl:px-20 lg:px-20 sm:px-10 px-6 md:text-[170px] text-4xl font-bold not-italic">
    <div className="mt-0 flex">
      <div className="pr-[150px] mt-[280px] font-spectral">
        <div>Hi!</div>
        <div className="text-[90px] mt-[100px] font-thin tracking-wider">I'm Peter Brunčík </div>
        <div className="text-lg font-thin font-spectral tracking-wide mt-20 mb-[-40px] text-justify">Oh, hello. So, you're genuinely curious about who I am. That truly warms my heart. So, without further ado, allow me to introduce myself. I'm Peter Brunčík, an 18-year-old with no major achievements, no prestigious competition wins, and absolutely no fame in the media spotlight. Surprising, isn't it? I'm just an ordinary individual who wholeheartedly embraces self-discovery and personal growth. I'm on a life journey striving to become the best version of myself. Will you join me?</div>
        <button className="p-2 text-white  bg-[#2A6CA5] custom-shadow text-base rounded-[30px] font-poppins duration-300 ease-in-out hover:text-gray-700 active:text-black">Learn more</button>
      </div>
      <img src={selfie} className="h-[750px] aspect-auto p-10 mr-[-75px] float-right mt-[150px]"/>
      </div>
    </div>
    </div>


        

  {/*My story*/}

  <div className="h-[1100px] bg-no-repeat bg-cover mt-[-100px]" style={{
      backgroundImage: `url('/src/assets/aboutMeMyStory.png')`,
      }}>
      
      <div className="mt-20">
      <h1 className="text-black text-3xl text-center pt-20 font-spectral uppercase tracking-[10px] font-bold">My story</h1>


      {/*Text bubbles*/}
      <div className="relative">
        <div className="bg-white p-4 w-[450px] h-[250px] float-left ml-20 mt-[50px] blur-xl rounded-[30px] relative">
        </div>
        <p className="absolute top-[90px] blur-none w-[400px] left-[120px]">My story begins where your story ends. Naozaj! Moja cesta transformácie začala práve vtedy, keď som sa ocitol v situácií, kde som bezprostredne videl ako mnohí moji rovesníci sa oddávajú zábave a iným nerestiam, vedú bezstarostný život a žijú zo dňa na deň. Ja som bol však v tomto </p>
      </div>
      

      <div className="relative">
        <div className="bg-white p-4 w-[500px] h-[300px] float-right mr-20 mt-[580px] blur-xl rounded-[30px] relative">
        </div>
        <p className="absolute top-[635px] blur-none w-[400px] right-[135px]"> Sed molestie, quam a fringilla fringilla, nibh est interdum lectus, a pulvinar lectus lorem sit amet nisl. Aliquam consectetur, turpis quis ultrices rutrum, nisi ante aliquam libero, nec mattis augue leo eget ligula. Proin ac semper lorem. Suspendisse posuere accumsan diam sed tempor. Vivamus nunc dui, cursus sed augue eget, sodales eleifend orci. Fusce vestibulum volutpat velit. </p>
      </div>


      </div>
  </div>

  {/*Timeline*/}
  <div className="h-[1400px] relative">
    
    <img src={timelineBg} className="absolute top-[-10px] w-full"/>
    
    <div className="pt-[300px] relative">
    <h1 className="text-4xl text-center font-spectral tracking-[50px] uppercase font-bold">Timeline</h1> 
    </div>
    <img src={timeline} className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-[1300px]"/>

  </div>


  {/*My values*/}

  <div className="max-w-full h-[1200px] bg-no-repeat bg-cover" style={{
    backgroundImage: `url('/src/assets/valuesbg.png')`,
  }}>
    <div className="2xl:max-w-[1680px] max-w-[1380px] mx-auto 2xl:px-20 lg:px-20 sm:px-10 px-6 mt-[-350px] pt-[300px] ">
      
      <h1 className="flex justify-center text-6xl uppercase font-bold tracking-widest">My values</h1>

      <div className="grid grid-flow-col auto-cols-fr mt-20  gap-x-20 px-[150px]">

        {/*Health*/}
        <div className="py-5 px-9 h-[300px] bg-[#ACDC6F] rounded-[60px] relative custom-shadow-card">
        <div className="absolute w-[80%] top-[210px] border border-black"></div>
          <img src={health} className="float-right w-[125px]"/>
          <div className="pr-[100px] pt-[145px] pb-10">
          <h1 className=" text-4xl font-bold">Health</h1>
          <p className="underline underline-offset-4 mt-4 text-xl font-spectral">Learn more ...</p>
          </div>
        </div>

        {/*Movement*/}
        <div className="py-4 px-8 bg-[#DC836F] rounded-[40px] relative custom-shadow-card">
        <div className="absolute w-[80%] top-[210px] border border-black"></div>
          <img src={movement} className="float-right w-[125px]"/>
          <div className="pr-[100px] pt-[145px] pb-10">
          <h1 className=" text-4xl font-bold">Movement</h1>
          <p className="underline underline-offset-4 mt-4 text-xl font-spectral">Learn more ...</p>
          </div>
        </div>

        {/*Improvement*/}
        <div className="py-4 px-8 bg-[#6FD5DC] rounded-[40px] relative custom-shadow-card">
        <div className="absolute w-[80%] top-[210px] border border-black"></div>
          <img src={improvement} className="float-right w-[125px]"/>
          <div className="pr-[100px] pt-[145px] pb-10">
          <h1 className=" text-4xl font-bold">Improvement</h1>
          <p className="underline underline-offset-4 mt-4 text-xl font-spectral">Learn more ...</p>
          </div>
        </div>
        
      </div>

  
      {/*Scroll down arrow*/}
      <div className="flex flex-col items-center mt-20 text-white uppercase text-2xl">
        <p className="underline underline-offset-4">Scroll down</p>
        <Link smooth={true} offset={-50}>
          <img className="mt-1 w-[40px] duration-300 ease-in-out hover:scale-110" src={arrowDown} />
        </Link>
      </div>

    </div>
  </div>


  {/*Health*/}

  <div className="relative max-w-full h-[1350px] mt-[-20px] bg-no-repeat bg-cover" style={{
    backgroundImage: 'url(/src/assets/healthbg.png)',

  }}>
    {/*<img className="absolute right-[150px] top-20" src={healthHeart} alt="" />*/}

  <div className="px-20  pt-20">

    <img className="float-left mr-10" src={healthImage}/>
    
    <div className="pt-[150px] ">
      <h1 className="text-9xl uppercase rotate-[-15deg] underline underline-offset-[15px] decoration-4 font-spectral   mt-4">Health</h1>
      <div className="text-xl tracking-wide mt-[63px] pt-8 ml-[730px] text-white border-t-4 border-black  max-w-[750px] mx-auto">
      Nunc tortor tortor, consectetur nec ultrices id, molestie at augue. Praesent dapibus nisi ut nisl pulvinar bibendum. Nam laoreet venenatis orci, at vehicula mi. Curabitur mollis tristique sem, nec tempor est sollicitudin a. Sed pharetra orci urna, tempor pellentesque odio pellentesque ut. Etiam vestibulum ipsum sit amet mi egestas pellentesque. Aenean posuere, nisi sed eleifend consectetur, magna lectus varius orci, nec consectetur metus purus vitae dui. Ut aliquam ante eget diam mattis tempus. Donec aliquet tincidunt dui.
      </div>
    </div>

  </div>

  </div>


  {/*Movement*/}
  <div className="relative max-w-full h-[1000px] mt-[-150px]">
    <img src={movimpbg } className="absolute bottom-[-600px] w-full z-[-1]"/>
    <h1 className="text-9xl font-bold pl-[150px] uppercase">Movement</h1>
    <img className="float-left pt-6 pl-[110px] pr-16" src={movementImage}/>
    
    <div className="pr-[150px] text-2xl mt-8 text-justify">
    Nunc tortor tortor, consectetur nec ultrices id, molestie at augue. Praesent dapibus nisi ut nisl pulvinar bibendum. Nam laoreet venenatis orci, at vehicula mi. Curabitur mollis tristique sem, nec tempor est sollicitudin a. Sed pharetra orci urna, tempor pellentesque odio pellentesque ut. Etiam vestibulum ipsum sit amet mi egestas pellentesque. Aenean posuere, nisi sed eleifend consectetur, magna lectus varius orci, nec consectetur metus purus vitae dui. Ut aliquam ante eget diam mattis tempus. Donec aliquet tincidunt dui.
    </div>
  </div>




  {/*Improvement*/}
  <div className="relative max-w-full h-[1000px] pt-[150px]">
    <h1 className="text-8xl font-bold pl-[275px] uppercase mt-[-50px] mb-10">Constant improvement</h1>
    <img className="float-left pt-10 pl-[110px] pr-16" src={improvementImage}/>
    
    <div className="pr-[150px] text-2xl mt-[450px] text-justify">
    Nunc tortor tortor, consectetur nec ultrices id, molestie at augue. Praesent dapibus nisi ut nisl pulvinar bibendum. Nam laoreet venenatis orci, at vehicula mi. Curabitur mollis tristique sem, nec tempor est sollicitudin a. Sed pharetra orci urna, tempor pellentesque odio pellentesque ut. Etiam vestibulum ipsum sit amet mi egestas pellentesque. Aenean posuere, nisi sed eleifend consectetur, magna lectus varius orci, nec consectetur metus purus vitae dui. Ut aliquam ante eget diam mattis tempus. Donec aliquet tincidunt dui.
    </div>
  </div>



    {/*Contact*/}

    <div className="h-[1000px] pt-[500px]">
    <img src={contactImage} className="float-left pl-[200px] w-[900px]"/>
    </div>

  </div>
    




    
    <Footer/>
    </>
)


}

export default About