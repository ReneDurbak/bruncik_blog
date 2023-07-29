import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {GiOpenBook} from 'react-icons/gi'
import {CgGym}  from 'react-icons/cg'
import {MdOutlineComputer} from 'react-icons/md'
import {AiOutlineArrowRight} from 'react-icons/ai'
import ImageComponent from "../components/ImageComponent";
import articlemenu from "../assets/articles/articlemenu.png"
import selfieabout from "../assets/selfieabout.png"
import pushups1 from "../assets/push-ups/pushups1.png"
import pushups2 from "../assets/push-ups/pushups2.png"
import exploreA from "../assets/explore/exploreA.png"
import exploreB from "../assets/explore/exploreB.png"


function Home(){


  {/*Explore pictures*/}
  const hash5 = "|33[@:-;D*9FDiM|.7-;xaRjf6fks:off6Rkayj[00D%-:?b.8tQD%D%NGx[ogaeM{M|kC%LogR*~p-;IU9FDiRj%g?Ht7MxNFog%M%LRjIURjt74oD%%L-;-;t7IUD%Rix]xuV@IUIVxt%MxuNG?b%MRjD%D%M{%M-;t8"
  const styling5 = "lg:w-[700px] w-[400px] lg:p-10 sm:p-8 mx-auto p-6"
  const height5 = 845;
  const width5= 475;



  {/*Menu pictures*/}
  

  {/*Articles picture*/}
  const hash2 = "|33[@:-;D*9FDiM|.7-;xaRjf6fks:off6Rkayj[00D%-:?b.8tQD%D%NGx[ogaeM{M|kC%LogR*~p-;IU9FDiRj%g?Ht7MxNFog%M%LRjIURjt74oD%%L-;-;t7IUD%Rix]xuV@IUIVxt%MxuNG?b%MRjD%D%M{%M-;t8"
  const styling2 = "lg:float-right mx-auto mb-8 sm:mb-6 lg:mb-0 2xl:w-[600px] w-[420px]  xl:ml-[150px] lg:ml-10"
  const height2 = 845;
  const width2 = 475;



  {/*Push ups picture*/}
  {/*pic1*/}
  const hashp1 = "|33[@:-;D*9FDiM|.7-;xaRjf6fks:off6Rkayj[00D%-:?b.8tQD%D%NGx[ogaeM{M|kC%LogR*~p-;IU9FDiRj%g?Ht7MxNFog%M%LRjIURjt74oD%%L-;-;t7IUD%Rix]xuV@IUIVxt%MxuNG?b%MRjD%D%M{%M-;t8"
  const stylingp1 = "lg:float-left  mx-auto mb-0 lg:mb-0 2xl:w-[300px] w-[210px] "
  const heightp1 = 845;
  const widthp1 = 475;

   {/*pic2*/}
   const hashp2 = "|33[@:-;D*9FDiM|.7-;xaRjf6fks:off6Rkayj[00D%-:?b.8tQD%D%NGx[ogaeM{M|kC%LogR*~p-;IU9FDiRj%g?Ht7MxNFog%M%LRjIURjt74oD%%L-;-;t7IUD%Rix]xuV@IUIVxt%MxuNG?b%MRjD%D%M{%M-;t8"
   const stylingp2 = "lg:float-left  mx-auto mb-0 lg:mb-0 2xl:w-[300px] w-[210px] "
   const heightp2 = 845;
   const widthp2 = 475;



  {/*About picture*/}
  const hash4 = "|33[@:-;D*9FDiM|.7-;xaRjf6fks:off6Rkayj[00D%-:?b.8tQD%D%NGx[ogaeM{M|kC%LogR*~p-;IU9FDiRj%g?Ht7MxNFog%M%LRjIURjt74oD%%L-;-;t7IUD%Rix]xuV@IUIVxt%MxuNG?b%MRjD%D%M{%M-;t8"
  const styling4 = "lg:float-left mx-auto  mb-8 sm:mb-6 lg:mb-0  2xl:w-[600px] w-[420px] 2xl:mr-[175px] lg:mr-10 xl:mt-[-75px]"
  const height4 = 845;
  const width4 = 475;




    return(
        <>
    <Navbar/>
    {/*Intro*/ }
    <div className=" 2xl:text-[160px] px-20 text-center mx-auto w-full  xl:text-8xl lg:text-8xl text-5xl md:text-8xl md:pt-[390px] md:pb-[340px] xl:pt-[450px] xl:pb-[400px] 3xl:pt-[480px] 3xl:pb-[440px] 2xl:pt-[410px] 2xl:pb-[360px] 2xl:px-[200px] lg:pt-[390px] lg:pb-[340px] pt-[410px] pb-[360px]  bg-[url('/src/assets/bgImg.jpg')] bg-cover font-thin align-middle md:tracking-normal tracking-tight text-white leading-normal">
      Breath in<br/> Breath out
    </div>

    {/*Explore*/ }
    <div className="max-w-[1380px] mx-auto pt-[175px] pb-[200px] sm:pb-[100px] px-4  xl:bg-[url('/src/assets/exbg.png')]  bg-cover font-spectral">
      <h1 className="sm:float-left text-center xl:text-5xl sm:text-3xl text-xl underline sm:underline-offset-[20px] underline-offset-[10px] sm:decoration-2 decoration-1 sm:mx-0 mx-8">
        What you can see on my site...
      </h1>

      <div className="font-thin sm:text-2xl lg:text-3xl text-3xl  grid sm:grid-flow-col sm:auto-cols-fr sm:mx-0 mx-8 sm:gap-0 gap-0  text-center sm:mt-[120px] mt-[80px] ">
     
      <div className="mb-10">
        <div className="xl:bg-[url('/src/assets/explore/exelementbg1.png')] md:bg-[url('/src/assets/explore/exelementbg1lg.png')] bg-[url('/src/assets/explore/exelementbg1.png')] bg-cover w-full">
      <ImageComponent src={exploreA} useHash={hash5} styling={styling5} useWidth={width5} useHeight={height5}/>
      </div>
        <div className="lg:pt-3  duration-300 ease-in-out ">Articles </div>
    <div className="underline sm:underline-offset-2 underline-offset-2 decoration-1  sm:text-xs md:text-base text-sm duration-300 ease-in-out hover:text-stone-400 active:text-red-400"><Link to="/articles">Read more </Link> </div>
   
        </div>

        <div className="mb-10">
          <div className="xl:bg-[url('/src/assets/explore/exelementbg2.png')] md: md:bg-[url('/src/assets/explore/exelementbg2lg.png')] bg-[url('/src/assets/explore/exelementbg2.png')] bg-cover w-full">
        <ImageComponent src={exploreA} useHash={hash5} styling={styling5} useWidth={width5} useHeight={height5}/>
        </div>
        <div className=" lg:pt-3  duration-300 ease-in-out  ">Push-ups</div>
        <div className="underline sm:underline-offset-2 underline-offset-2 decoration-1 sm:text-xs md:text-base text-sm duration-300 ease-in-out hover:text-stone-400"><Link to="/push-ups">Read more </Link> </div>

        </div>


        <div className="mb-10">
          <div className="xl:bg-[url('/src/assets/explore/exelementbg3.png')]   md:bg-[url('/src/assets/explore/exelementbg3lg.png')] bg-[url('/src/assets/explore/exelementbg3.png')] bg-cover w-full">
        <ImageComponent src={exploreB} useHash={hash5} styling={styling5} useWidth={width5} useHeight={height5}/>
        </div>
        <div className="lg:pt-3lg:  duration-300 ease-in-out" >My course </div>
        <div className="underline sm:underline-offset-2 underline-offset-2 decoration-1  sm:text-xs md:text-base text-sm duration-300 ease-in-out hover:text-stone-400"><Link to="/mycourse">Read more </Link> </div>
        
        </div>

      
      </div>

    </div>







      
    {/*menu*/}
      {/*Articles*/ }

    <div className="w-full  2xl:bg-[url('/src/assets/articles/articlesbg.png')] lg:bg-[url('/src/assets/articles/articlesbgnotebook.png')] sm:bg-[url('/src/assets/articles/articlesbgtablet.png')] bg-[url('/src/assets/articles/articlesbgmobile.png')] bg-cover	py-[300px] sm:py-[400px] lg:py-[575px]  font-spectral">
        <div className="2xl:max-w-[1680px] max-w-[1380px] mx-auto  text-black 2xl:px-4 sm:px-10 px-10">
        <div className="mb-[75px] mt-[-360px]">
        <h1 className="2xl:text-8xl xl:text-7xl  md:text-6xl sm:text-5xl text-2xl  lg:text-start text-center underline decoration-1 underline-offset-[15px]" >Articles</h1>
        </div> 


        <ImageComponent src={articlemenu} useHash={hash2} styling={styling2} useWidth={width2} useHeight={height2}/>
    


        <div className="xl:text-[22px] text-base break-words font-regular tracking-wider text-center lg:text-left">
          
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit vehicula est, nec mattis magna semper eu. Nunc convallis gravida enim a fringilla. Aliquam viverra condimentum varius. Donec rutrum commodo sapien a blandit. Pellentesque eget faucibus augue, ut cursus ipsum. Vestibulum aliquam tempor lorem, ac fermentum ipsum vestibulum non. Duis sit amet porttitor dui. Curabitur euismod eget sem ac hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit vehicula est, nec mattis magna semper eu. Nunc convallis gravida enim a fringilla. Aliquam viverra condimentum varius. Donec rutrum commodo sapien a blandit. Pellentesque eget faucibus augue, ut cursus ipsum. Vestibulum aliquam tempor lorem, ac fermentum ipsum vestibulum non. Duis sit amet porttitor dui. Curabitur euismod eget sem ac hendrerit.
        </div>

        <div className="mt-3 text-center sm:text-base  text-xs">
        <Link to="/articles" className="bg-red-400 rounded-2xl px-2 py-1 hover:bg-red-500 duration-500 ease-in-out lg:float-left" ><span className="underline decoration-1 underline-offset-2">Click here</span> <span className="no-underline">to see more ...</span></Link>
        </div>


        </div>
    </div>


      {/*Push ups gallery*/}
 
    <div className=" w-full 2xl:bg-[url('/src/assets/push-ups/pushupsbg.png')] lg:bg-[url('/src/assets/push-ups/pushupsbgnotebook.png')] sm:bg-[url('/src/assets/push-ups/pushupsbgtablet.png')] bg-[url('/src/assets/push-ups/pushupsbgmobile.png')] bg-cover	py-[300px] sm:py-[400px] lg:py-[520px] font-spectral">
      
        <div className="2xl:max-w-[1680px] max-w-[1380px] mx-auto  text-black 2xl:px-4 sm:px-10 px-10">
 
        <div className="mb-[75px] mt-[-360px] 2xl:max-w-[1680px] mx-auto">
        <h1 className="2xl:text-8xl xl:text-7xl md:text-6xl sm:text-5xl text-2xl text-center lg:text-left   underline decoration-1 underline-offset-[15px]" >Push Ups Gallery</h1>
        </div> 

        <div className="flex lg:flex-row flex-col">

          <div className="flex mx-auto sm:gap-20 lg:gap-5 lg:w-full">
        <div className="flex flex-col">
        <ImageComponent src={pushups1} useHash={hashp1} styling={stylingp1} useWidth={widthp1} useHeight={heightp1}/>
      <div className="flex justify-center xl:text-xl sm:text-base text-sm sm:font-normal font-bold">DAY 1</div>
        </div>

        <div className="flex flex-col ">
        <ImageComponent src={pushups2} useHash={hashp2} styling={stylingp2} useWidth={widthp2} useHeight={heightp2}/>
        <div className="flex justify-center xl:text-xl  sm:text-base text-sm sm:font-normal font-bold">DAY 70</div>
        </div>
        </div>

        <div className="xl:text-[22px] text-base  tracking-wider break-words font-regular lg:text-right text-center sm:w-full lg:ml-10 lg:mt-0 mt-8 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit vehicula est, nec mattis magna semper eu. Nunc convallis gravida enim a fringilla. Aliquam viverra condimentum varius. Donec rutrum commodo sapien a blandit. Pellentesque eget faucibus augue, ut cursus ipsum. Vestibulum aliquam tempor lorem, ac fermentum ipsum vestibulum non. Duis sit amet porttitor dui. Curabitur euismod eget sem ac hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit vehicula est, nec mattis magna semper eu. Nunc convallis gravida enim a fringilla. Aliquam viverra condimentum varius. Donec rutrum commodo sapien a blandit. Pellentesque eget faucibus augue, ut cursus ipsum. Vestibulum aliquam tempor lorem, ac fermentum ipsum vestibulum non. Duis sit amet porttitor dui. Curabitur euismod eget sem ac hendrerit.
        <div className=" mt-3 text-center xl:text-base sm:text-sm text-xs">
        <Link to="/push-ups" className="bg-lime-400 rounded-2xl px-2 py-1 hover:bg-lime-500 duration-500 ease-in-out lg:float-right" ><span className="underline decoration-1 underline-offset-2">Click here</span> <span className="no-underline">to see more ...</span></Link>
        </div>
        </div>

        

        </div>
     

      

        </div>
    </div>



     {/*My course*/}

     <div className="mt-[-50px] 2xl:bg-[url('/src/assets/mycourse/coursebg.png')] xl:bg-[url('/src/assets/mycourse/coursebgnotebookxl.png')] lg:bg-[url('/src/assets/mycourse/coursebgnotebook.png')] sm:bg-[url('/src/assets/mycourse/coursebgtablet.png')] bg-[url('/src/assets/mycourse/coursebgmobile.png')]  bg-cover py-[325px] sm:py-[250px] lg:py-[225px]	 xl:py-[200px] 2xl:py-[150px] font-spectral">
      <div className="2xl:max-w-[1680px] max-w-[1380px] mx-auto 2xl:px-4 sm:px-10 px-10">
    
      <h1 className="  xl:text-7xl sm:text-5xl text-2xl  lg:text-left text-center underline decoration-1 underline-offset-[25px] " >My Course - Work with me</h1>
   


      <div className=" mx-auto xl:mt-[445px] sm:mt-[350px] mt-[225px] text-black sm:px-4 px-10">
      <div className="align-middle mx-auto text-center xl:text-8xl md:text-7xl sm:text-5xl text-3xl sm:font-normal font-bold">Comming soon!</div>
      
      
      <div className="mt-[150px]" >
      <div className="text-center xl:text-3xl lg:text-2xl sm:text-xl text-lg">But you can pre-register and be the first to know about this special offer. </div>
        <div className="text-center mt-4 xl:text-base sm:text-sm text-sm">
      <Link to="/mycourse" className="bg-cyan-300 rounded-2xl px-2 py-1 underline decoration-1 underline-offset-2   hover:bg-cyan-400 duration-500 ease-in-out" >Click here</Link>
      </div>
      </div> 
      </div>

      </div>
  </div>



   {/*About me*/}

   <div className="  2xl:bg-[url('/src/assets/about/aboutbg.png')] xl:bg-[url('/src/assets/about/aboutbgnotebookxl.png')] lg:bg-[url('/src/assets/about/aboutbgnotebook.png')] sm:bg-[url('/src/assets/about/aboutbgtablet.png')] bg-[url('/src/assets/about/aboutbgmobile.png')] bg-cover	py-[300px]  sm:py-[450px] lg:py-[600px] 2xl:py-[450px]  mb-[325px] font-spectral">
      
      <div className="2xl:max-w-[1680px] max-w-[1380px] mx-auto  text-black 2xl:px-4 sm:px-10 px-10">

      <div className="mb-[60px] mt-[-360px] 2xl:max-w-[1680px] mx-auto">
      <h1 className="2xl:text-8xl xl:text-7xl md:text-6xl sm:text-4xl text-2xl text-center  lg:text-start underline decoration-1 underline-offset-[15px]" >About me</h1>
      </div> 
      <ImageComponent src={selfieabout} useHash={hash4} styling={styling4} useWidth={width4} useHeight={height4}/>
   

      <div className="xl:text-[22px] text-base break-words font-regular tracking-wider   xl:text-left lg:text-right text-center ">
        <div className="sm:text-3xl text-2xl mb-4 font-bold">Who the hell am I?</div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit  Sed blandit Sed blandit Sed blandit  Sed blandit Sed blandit  Sed blanditvehicula est, nec mattis magna semper eu. Nunc convalliNunc convalliNunc convalliNunc convallis gravida enim a fringilla. Aliquam viverra condimentum varius. Donec rutrum commodo sapien a blandit. Pellentesque eget faucibus augue, ut cursus ipsum. Vestibulum aliquam tempor lorem, ac fermentum ipsum vestibulum non. Duis sit amet porttitor dui. Curabitur euismod eget sem ac hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit vehicula est, nec mattis magna semper eu. Nunc convallis gravida enim a fringilla. Aliquam viverra condimentum varius. Donec rutrum commodo sapien a blandit. Pellentesque eget faucibus augue, ut cursus ipsum. Vestibulum aliquam tempor lorem, ac fermentum ipsum vestibulum non. Duis sit amet porttitor dui. Curabitur euismod eget sem ac hendrerit.
      </div>

      <div className="mt-3 text-center xl:text-base sm:text-sm text-xs">
        <Link to="/about" className=" bg-red-400 rounded-2xl px-2 py-1 hover:bg-red-500 duration-500 ease-in-out xl:float-left lg:float-right" ><span className="underline decoration-1 underline-offset-2">Click here</span> <span className="no-underline">to learn about me more ...</span></Link>
        </div>

      </div>
  </div>



    
    <Footer/>
  </>
   
    )
    
}


export default Home