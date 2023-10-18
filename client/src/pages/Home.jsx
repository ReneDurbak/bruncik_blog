import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {BiArrowFromTop} from 'react-icons/bi'
import ImageComponent from "../components/ImageComponent";
import articlemenu from "../assets/articles/articlemenu.png"
import selfieabout from "../assets/selfieabout.png"
import pushups1 from "../assets/push-ups/pushups1.png"
import pushups2 from "../assets/push-ups/pushups2.png"
import exploreA from "../assets/explore/exploreA.png"
import exploreB from "../assets/explore/exploreB.png"
import question from "../assets/mycourse/question.png"
import lines from "../assets/push-ups/lines.png"
import circles from "../assets/articles/circles.png"
import smiley from "../assets/about/smiley.png"
import { useState } from "react";
import { useMediaQuery } from 'react-responsive'
import { Helmet } from "react-helmet";


function Home(){


  {/*Explore pictures*/}
  const hash5 = "|33[@:-;D*9FDiM|.7-;xaRjf6fks:off6Rkayj[00D%-:?b.8tQD%D%NGx[ogaeM{M|kC%LogR*~p-;IU9FDiRj%g?Ht7MxNFog%M%LRjIURjt74oD%%L-;-;t7IUD%Rix]xuV@IUIVxt%MxuNG?b%MRjD%D%M{%M-;t8"
  const styling5 = "lg:w-[700px] lg:p-10 sm:p-8 mx-auto p-4"
  const height5 = 845;
  const width5= 475;



  {/*Menu pictures*/}
  

  {/*Articles picture*/}
  const hash2 = "|33[@:-;D*9FDiM|.7-;xaRjf6fks:off6Rkayj[00D%-:?b.8tQD%D%NGx[ogaeM{M|kC%LogR*~p-;IU9FDiRj%g?Ht7MxNFog%M%LRjIURjt74oD%%L-;-;t7IUD%Rix]xuV@IUIVxt%MxuNG?b%MRjD%D%M{%M-;t8"
  const styling2 = "lg:float-right mx-auto mb-8 sm:mb-6 lg:mb-0 2xl:w-[500px] w-[420px]  2xl:ml-[280px] xl:ml-[200px] lg:ml-[100px] lg:ml-20"
  const height2 = 845;
  const width2 = 475;



  {/*Push ups picture*/}
  {/*pic1*/}
  const hashp1 = "|33[@:-;D*9FDiM|.7-;xaRjf6fks:off6Rkayj[00D%-:?b.8tQD%D%NGx[ogaeM{M|kC%LogR*~p-;IU9FDiRj%g?Ht7MxNFog%M%LRjIURjt74oD%%L-;-;t7IUD%Rix]xuV@IUIVxt%MxuNG?b%MRjD%D%M{%M-;t8"
  const stylingp1 = "lg:float-left  mx-auto mb-0 lg:mb-0 2xl:w-[250px] w-[210px] "
  const heightp1 = 845;
  const widthp1 = 475;

   {/*pic2*/}
   const hashp2 = "|33[@:-;D*9FDiM|.7-;xaRjf6fks:off6Rkayj[00D%-:?b.8tQD%D%NGx[ogaeM{M|kC%LogR*~p-;IU9FDiRj%g?Ht7MxNFog%M%LRjIURjt74oD%%L-;-;t7IUD%Rix]xuV@IUIVxt%MxuNG?b%MRjD%D%M{%M-;t8"
   const stylingp2 = "lg:float-left  mx-auto mb-0 lg:mb-0 2xl:w-[250px] w-[210px] "
   const heightp2 = 845;
   const widthp2 = 475;



  {/*About picture*/}
  const hash4 = "|33[@:-;D*9FDiM|.7-;xaRjf6fks:off6Rkayj[00D%-:?b.8tQD%D%NGx[ogaeM{M|kC%LogR*~p-;IU9FDiRj%g?Ht7MxNFog%M%LRjIURjt74oD%%L-;-;t7IUD%Rix]xuV@IUIVxt%MxuNG?b%MRjD%D%M{%M-;t8"
  const styling4 = "lg:float-left mx-auto  mb-8 sm:mb-6 lg:mb-0  2xl:w-[500px] w-[420px] 2xl:mr-[280px] xl:mr-[150px] lg:mr-[100px] xl:mt-[-75px]"
  const height4 = 845;
  const width4 = 475;


  const [showMoreButtonIsOpenArticles, setShowMoreButtonIsOpenArticles] = useState(false)
  const [showMoreButtonIsOpenAbout, setShowMoreButtonIsOpenAbout] = useState(false)
  const [showMoreButtonIsOpenPushUps, setShowMoreButtonIsOpenPushUps] = useState(false)



  const showMoreStyles = {
    WebkitLineClamp : 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
  }


  const isBigMobile = useMediaQuery({query:'(min-width: 500px)'})
  const isMobile = useMediaQuery({query:'(min-width: 420px)'})




    return(
        <>
    <Helmet>
      <title>Bruncik Blog</title>  
      <link rel="icon" type="image/svg+xml" href="/icon.png"/>
    </Helmet>

    <Navbar/>
    {/*Intro*/ }
    <div className="2xl:text-[140px] sm:px-20 text-center mx-auto w-full  xl:text-8xl lg:text-8xl text-5xl md:text-7xl 3xl:pt-[480px] 3xl:pb-[440px] 2xl:pt-[320px] 2xl:pb-[320px]  xl:pt-[380px] xl:pb-[330px]  lg:pt-[280px] lg:pb-[230px] md:pt-[290px] md:pb-[240px] pt-[340px] pb-[345px] xl:bg-[url('/src/assets/bgImg.jpg')] md:bg-[url('/src/assets/bgImglaptop.png')] bg-[url('/src/assets/bgImgmobile.png')] bg-cover font-thin align-middle md:tracking-normal tracking-tight text-white leading-normal">
      Breath in<br/> Breath out
    </div>

    {/*Explore*/ }
    <div className="2xl:max-w-[1500px] max-w-[1380px] mx-auto lg:pt-[250px] sm:pt-[150px] pt-20 pb-20 sm:pb-[125px] 2xl:px-20 sm:px-10 px-6 md:bg-[url('/src/assets//explore/exbg.png')]  bg-cover font-spectral">
      <h1 className="sm:float-left text-center 2xl:text-[40px] xl:text-5xl sm:text-3xl text-xl underline sm:underline-offset-[20px] underline-offset-[10px] sm:decoration-2 decoration-1 sm:mx-0 mx-8">
        What you can see on my site...
      </h1>

      <div className="font-thin sm:text-2xl lg:text-[29px] text-[18px]  grid grid-flow-col auto-cols-fr  xl:gap-x-12 mx-[-15px]  text-center sm:mt-[120px] mt-10 ">
     
      <div className="mb-10">
        <div className="bg-[url('/src/assets/explore/exelementbg1lg.png')] bg-cover mx-[-10px] md:mx-0">
          <Link to="/articles">
          <ImageComponent src={exploreA} useHash={hash5} styling={styling5} useWidth={width5} useHeight={height5}/>
          </Link>
        </div>
        <div className="lg:pt-3">Articles </div>
        <div className="mt-[-4px] "><Link to="/articles" className="no-underline sm:text-xs md:text-base text-xs hover:underline underline-offset-2 decoration-1 active:text-red-400">Read more </Link> </div>
   
        </div>

        <div className="mb-10">
          <div className="bg-[url('/src/assets/explore/exelementbg2lg.png')] bg-cover mx-[-10px] md:mx-0">
            <Link to="/push-ups">
            <ImageComponent src={exploreA} useHash={hash5} styling={styling5} useWidth={width5} useHeight={height5}/>
            </Link>
          </div>
        <div className=" lg:pt-3">Push Ups Gallery</div>
        <div className="mt-[-4px]"><Link to="/push-ups" className="no-underline sm:text-xs md:text-base text-xs hover:underline underline-offset-2 decoration-1 active:text-red-400">Read more </Link> </div>

        </div>


        <div className="mb-10">
          <div className="bg-[url('/src/assets/explore/exelementbg3lg.png')] bg-cover mx-[-10px] md:mx-0">
          <Link to="mycourse">
            <ImageComponent src={exploreB} useHash={hash5} styling={styling5} useWidth={width5} useHeight={height5}/>
          </Link>
        </div>
        <div className="lg:pt-3" >Work with me - My Course </div>
        <div className="mt-[-4px]"><Link to="/mycourse" className="no-underline sm:text-xs md:text-base text-xs hover:underline underline-offset-2 hover:decoration-1 active:text-red-400">Read more </Link> </div>
        
        </div>

      
      </div>

    </div>







      
    {/*menu*/}
      {/*Articles*/ }

    <div id="articles" className="w-full  2xl:bg-[url('/src/assets/articles/articlesbg.png')] lg:bg-[url('/src/assets/articles/articlesbgnotebook.png')] sm:bg-[url('/src/assets/articles/articlesbgtablet.png')] bg-cover	pt-[350px] sm:py-[400px] lg:py-[600px]  font-spectral">
        <div className="2xl:max-w-[1680px] max-w-[1380px] mx-auto  text-black 2xl:px-20 lg:px-20 sm:px-10 px-10 ">
        
   
        <div className="">
        <div className="mb-[75px] mt-[-360px]">
        <h1 className="2xl:text-7xl xl:text-7xl  md:text-6xl sm:text-5xl text-2xl  lg:text-start text-center underline decoration-1 underline-offset-[15px]" >Articles</h1>
        </div>

        <div>
          {/*background for mobile res*/}
        <div className="sm:hidden">
          <img src={circles} className="left-0 absolute z-[-1] w-[650px] mt-[-90px]" />
        </div>

        {/*Articles picture*/}
        <ImageComponent src={articlemenu} useHash={hash2} styling={styling2} useWidth={width2} useHeight={height2}/>
        </div> 

        {isBigMobile ?

        <div className="2xl:text-[19px] xl:text-lg text-base break-words  font-regular tracking-normal  text-justify lg:text-left underline-offset-2">
        Right on this page, you'll discover the <strong>heart</strong> and <strong>essence</strong> of this entire website, my portfolio, which is <u>primarily composed</u> of <strong>articles</strong> on this site. Their content consists of <strong>practical</strong> and <strong>helpful advice</strong> meant to assist you in living a happy and fulfilled life, or to serve as a source of <strong>inspiration</strong> on days when you <strong>lack motivation</strong> or are going through tough times. You'll find articles covering various areas and topics that I've been deeply involved in for quite some time. Through my <strong>knowledge</strong> and <strong>experiences</strong>, encapsulated in these articles, I aim to present this information to you in the <strong>simplest</strong> form possible. However, these texts may not resonate with everyone, so <u>I believe that each person will find their own path in this and hopefully, find something useful in it</u>. After all, as an old Chinese proverb goes, <i>"when the student is ready, the teacher will appear."</i>          
        </div>

        :

        <div>
        <div style={showMoreButtonIsOpenArticles ? null : showMoreStyles} className="2xl:text-[19px] xl:text-lg text-base break-words  font-regular tracking-normal  text-justify lg:text-left underline-offset-2">
        Right on this page, you'll discover the <strong>heart</strong> and <strong>essence</strong> of this entire website, my portfolio, which is <u>primarily composed</u> of <strong>articles</strong> on this site. Their content consists of <strong>practical</strong> and <strong>helpful advice</strong> meant to assist you in living a happy and fulfilled life, or to serve as a source of <strong>inspiration</strong> on days when you <strong>lack motivation</strong> or are going through tough times. You'll find articles covering various areas and topics that I've been deeply involved in for quite some time. Through my <strong>knowledge</strong> and <strong>experiences</strong>, encapsulated in these articles, I aim to present this information to you in the <strong>simplest</strong> form possible. However, these texts may not resonate with everyone, so <u>I believe that each person will find their own path in this and hopefully, find something useful in it</u>. After all, as an old Chinese proverb goes, <i>"when the student is ready, the teacher will appear."</i>          
        </div>
        <button className="mt-1 font-bold  rounded-3xl  duration-300 ease-in-out underline underline-offset-2" onClick={()=> setShowMoreButtonIsOpenArticles(!showMoreButtonIsOpenArticles)}>{showMoreButtonIsOpenArticles ? "less..." : "more..."} </button>
        </div>

        }
        
        


        <div className="mt-3 text-center sm:text-base  text-sm">
          <Link to="/articles" className="mt-1 active:bg-lime-600 bg-lime-400 rounded-2xl px-2 py-1 hover:bg-lime-500 duration-500 ease-in-out lg:float-left float-right" ><span className="underline decoration-1 underline-offset-2">Click here</span></Link>
        </div>
        
        </div>
      



        </div>
    </div>


    


      {/*Push ups gallery*/}
 
    <div id="push-ups" className="sm:mt-[-150px] lg:mt-[-250px] 2xl:mt-[0px] mt-[250px]  w-full 2xl:bg-[url('/src/assets/push-ups/pushupsbg.png')] lg:bg-[url('/src/assets/push-ups/pushupsbgnotebook.png')] sm:bg-[url('/src/assets/push-ups/pushupsbgtablet.png')] bg-cover	py-[300px] sm:py-[400px] lg:py-[575px] font-spectral">
      
        <div className="2xl:max-w-[1680px] max-w-[1380px] mx-auto  text-black 2xl:px-20 lg:px-20 sm:px-10 px-10">
 
        <div className="mb-[75px] mt-[-360px] 2xl:max-w-[1680px] mx-auto">
        <h1 className="2xl:text-7xl xl:text-7xl md:text-6xl sm:text-5xl text-2xl text-center lg:text-left   underline decoration-1 underline-offset-[15px]" >Push Ups Gallery</h1>
        </div> 
        {/*background for mobile res*/}
        <div className="sm:hidden">
          <img src={lines} className="left-0 absolute z-[-1] w-[650px] mt-[-30px]" />
        </div>
        {/*Picture & Text container*/}
        <div className="flex lg:flex-row flex-col">
      
          {/*Picture container*/}
          <div className="flex mx-auto sm:gap-20 lg:gap-5 gap-8 lg:w-full">  
          
          
        {/*Pic 1*/}
        <div className="flex flex-col ">
        <ImageComponent src={pushups1} useHash={hashp1} styling={stylingp1} useWidth={widthp1} useHeight={heightp1}/>
      <div className="flex justify-center xl:text-xl sm:text-base text-sm sm:font-normal font-bold">DAY 1</div>
        </div>

        {/*Pic 2*/}
        <div className="flex flex-col ">
        <ImageComponent src={pushups2} useHash={hashp2} styling={stylingp2} useWidth={widthp2} useHeight={heightp2}/>
        <div className="flex justify-center xl:text-xl  sm:text-base text-sm sm:font-normal font-bold">DAY 70</div>
        </div>

        </div>

        {/*Additional text*/}
        {isBigMobile ?


        <div className="2xl:text-[19px] xl:text-lg text-base tracking-normal break-words font-regular lg:text-right text-justify sm:w-full 2xl:ml-[200px] xl:ml-[0px] lg:ml-20 lg:mt-0 mt-8 underline-offset-2">
        <div>
        <i><strong>Push ups, push ups, push ups</strong>. Have you ever tried doing <strong>1,000 push ups</strong> in a single day? How many push ups can you do in one set? And what about your endurance, not just at the gym (or in bed)?</i> I'm not asking these questions to belittle or embarrass you, but to highlight how <u>physical strength and endurance shape your identity and who you are as a person</u>. It's not just about having a ripped body and excellent physical fitness; it's also about how you handle <strong>obstacles, discomfort</strong>, and the <strong>pain</strong> that comes with them. Exercise itself helps us with that.
        On this page, you'll find videos of different people, including myself ;), who have decided to change their lives, thanks in part to push ups that we do every day, no matter the circumstances, whether we feel good or not. This is how you can build discipline and endurance, and bring order to your life. For more information or to join us, you can find details inside. I look forward to having you join us! :)        
        </div>
        
        <div className=" mt-3 text-center xl:text-base sm:text-sm text-sm">
        <Link to="/push-ups" className="active:bg-red-900 bg-red-400 rounded-2xl px-2 py-1 hover:bg-red-500 duration-300 ease-in-out float-right" ><span className="underline decoration-1 underline-offset-2">Click here</span></Link>
        </div>
        </div>
        
      
      :

      <div className="2xl:text-[19px] xl:text-lg text-base tracking-normal break-words font-regular lg:text-right text-justify sm:w-full 2xl:ml-[200px] xl:ml-[0px] lg:ml-20 lg:mt-0 mt-8 underline-offset-2">
        <div style={showMoreButtonIsOpenPushUps ? null : showMoreStyles}>
        <i><strong>Push ups, push ups, push ups</strong>. Have you ever tried doing <strong>1,000 push ups</strong> in a single day? How many push ups can you do in one set? And what about your endurance, not just at the gym (or in bed)?</i> I'm not asking these questions to belittle or embarrass you, but to highlight how <u>physical strength and endurance shape your identity and who you are as a person</u>. It's not just about having a ripped body and excellent physical fitness; it's also about how you handle <strong>obstacles, discomfort</strong>, and the <strong>pain</strong> that comes with them. Exercise itself helps us with that.
On this page, you'll find videos of different people, including myself ;), who have decided to change their lives, thanks in part to push ups that we do every day, no matter the circumstances, whether we feel good or not. This is how you can build discipline and endurance, and bring order to your life. For more information or to join us, you can find details inside. I look forward to having you join us! :)        
        </div>
        <button  className="mt-1 font-bold  rounded-3xl  duration-300 ease-in-out underline underline-offset-2" onClick={()=> setShowMoreButtonIsOpenPushUps(!showMoreButtonIsOpenPushUps)}>{showMoreButtonIsOpenPushUps ? "less..." : "more..."} </button>
        
        <div className=" mt-3 text-center xl:text-base sm:text-sm text-sm">
        <Link to="/push-ups" className="active:bg-red-900 bg-red-400 rounded-2xl px-2 py-1 hover:bg-red-500 duration-300 ease-in-out float-right" ><span className="underline decoration-1 underline-offset-2">Click here</span></Link>
        </div>
        </div>

      }

        

        </div>
     

        </div>

    </div>








     {/*My course*/}

     <div id="mycourse" className="sm:mt-[-350px] lg:mt-[-350px] 2xl:mt-[-50px] mt-[-450px] 2xl:bg-[url('/src/assets/mycourse/coursebg.png')] xl:bg-[url('/src/assets/mycourse/coursebgnotebookxl.png')] lg:bg-[url('/src/assets/mycourse/coursebgnotebook.png')]   bg-cover py-[325px] sm:py-[250px] lg:py-[250px]	 xl:py-[200px] 2xl:py-[150px] xl:mb-[225px] font-spectral">
      <div className="2xl:max-w-[1680px]  mx-auto 2xl:px-20 lg:px-20 sm:px-10 px-10">
    
      <h1 className="  2xl:text-7xl xl:text-6xl sm:text-5xl text-2xl  lg:text-left text-center underline decoration-1 underline-offset-[25px] " >My Course - Work with me</h1>
   


      <div className="xl:mt-[310px] sm:mt-[350px]  mt-[150px] text-black sm:px-4 px-10">
        <div className=" max-w-full sm:mt-[-230px] mt-[-50px]">
          <img src={question} className="mx-auto w-[200px] sm:w-[250px] lg:w-[275px] xl:w-[325px] 2xl:w-[425px]" />
        </div>
      <div className="align-middle mx-auto text-center 2xl:text-8xl md:text-7xl sm:text-5xl text-3xl sm:font-normal font-bold sm:mt-[-150px] lg:mt-[-190px] xl:mt-[-200px] 2xl:mt-[-260px] mt-[-110px]">Coming soon!</div>
      
      
      <div className="sm:mt-[150px] mt-[100px]" >
      <div className="text-center 2xl:text-2xl lg:text-2xl sm:text-xl text-lg">But you can pre-register and be the first to know about this special offer. </div>
   
        <div className="text-center mt-4 xl:text-base sm:text-sm text-sm">
        <div className="flex justify-center mt-2 mb-2 text-2xl">
        <BiArrowFromTop />
        </div>
      <Link to="/mycourse" className="active:bg-cyan-600 bg-cyan-300 rounded-2xl px-2 py-1 underline decoration-1 underline-offset-2   hover:bg-cyan-400 duration-500 ease-in-out" >Click here</Link>
      </div>
      </div> 
      </div>

      </div>
  </div>









   {/*About me*/}

   <div className="mt-[-75px] sm:mt-[-125px] lg:mt-[-250px] 2xl:mt-[-70px]   2xl:bg-[url('/src/assets/about/aboutbg.png')] xl:bg-[url('/src/assets/about/aboutbgnotebookxl.png')] lg:bg-[url('/src/assets/about/aboutbgnotebook.png')] sm:bg-[url('/src/assets/about/aboutbgtablet.png')] bg-cover	py-[300px]  sm:py-[450px] lg:py-[600px] 2xl:py-[450px] 2xl:pb-[550px] lg:mb-[150px] mb-[-150px] font-spectral">
      
      <div className= "2xl:max-w-[1680px] max-w-[1380px] mx-auto  text-black 2xl:px-20 lg:px-20 sm:px-10 px-10">

      <div className="mb-[60px] mt-[-360px] 2xl:max-w-[1680px] mx-auto">
      <h1 className="2xl:text-7xl xl:text-7xl md:text-6xl sm:text-4xl text-2xl text-center  lg:text-start underline decoration-1 underline-offset-[15px]" >About me</h1>
      </div>

      {/*background for mobile res*/}
      <div className="relative sm:hidden">
        <img src={smiley} className={isBigMobile ? "left-0 top-[-200px]  absolute z-[-1] w-[650px]" : isMobile ? "left-0 top-[-100px]  absolute z-[-1] w-[650px]" :  "left-0 top-[-50px]  absolute z-[-1] w-[650px]"} />
      </div>

      <ImageComponent src={selfieabout} useHash={hash4} styling={styling4} useWidth={width4} useHeight={height4}/>
   

      {isBigMobile 
          ?
          <div className="2xl:text-[19px] xl:text-lg text-base break-words font-regular tracking-normal    lg:text-left text-justify underline-offset-2">
          <div className="sm:text-3xl text-2xl mb-4 font-bold track">Who the hell am I?</div>
          Maybe you're now wondering the same question I used to ask myself when I first came across a bunch of motivational speakers, mental coaches, and similar figures on the internet, preaching about how to live and what to do. In those moments, we often think, 'Who's this person, and why should I listen to them?' The change happens when we get to <u>know this person better, learn about their backstory, what they've been through</u>, and <u>what their life's direction and purpose are</u>.<br/>
          And <u>that's exactly my goal</u>. For those of you who have known me for a while, this might not be all that interesting, but you can still discover things about me that you might not have known. As for the rest of you, this page is here for you. Its purpose is to provide insight into my life so that you can get to <u>know me better, trust me, and also understand the background behind my transformation</u>. So don't hesitate, click below."       
        </div>
        :

        <div>
    <div style={showMoreButtonIsOpenAbout ? null : showMoreStyles} className="2xl:text-[19px] xl:text-lg text-base break-words font-regular tracking-normal    lg:text-left text-justify underline-offset-2">
      <div className="sm:text-3xl text-2xl mb-4 font-bold track">Who the hell am I?</div>
      Maybe you're now wondering the same question I used to ask myself when I first came across a bunch of motivational speakers, mental coaches, and similar figures on the internet, preaching about how to live and what to do. In those moments, we often think, 'Who's this person, and why should I listen to them?' The change happens when we get to <u>know this person better, learn about their backstory, what they've been through</u>, and <u>what their life's direction and purpose are</u>.<br/>
      And <u>that's exactly my goal</u>. For those of you who have known me for a while, this might not be all that interesting, but you can still discover things about me that you might not have known. As for the rest of you, this page is here for you. Its purpose is to provide insight into my life so that you can get to <u>know me better, trust me, and also understand the background behind my transformation</u>. So don't hesitate, click below."       
    </div>

    <button  className="mt-1 font-bold  rounded-3xl  duration-300 ease-in-out underline underline-offset-2  " onClick={()=> setShowMoreButtonIsOpenAbout(!showMoreButtonIsOpenAbout)}>{showMoreButtonIsOpenAbout ? "sipka hore" : "more..."} </button>
    </div>

        

      }
      <div className="mt-3 text-center xl:text-base sm:text-sm text-sm">
        <Link to="/about" className="duration-500 ease-in-out bg-gradient-to-b from-lime-200 via-red-200 to-cyan-200 rounded-2xl px-2 py-1 hover:bg-gradient-to-b hover:from-lime-300 hover:via-red-300 hover:to-cyan-300 active:from-lime-400 active:via-red-400 active:to-cyan-400 lg:float-left float-right" ><span className="underline decoration-1 underline-offset-2">Click here</span></Link>
        </div>

      </div>
  </div>



    
    <Footer/>
  </>
   
    )
    
}


export default Home