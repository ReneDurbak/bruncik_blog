import selfie from "../assets/selfiePhoto.png"
import timeline from "../assets/timeline.png"
import timelineMobile from "../assets/timelineMobile.png"
import timelineBg from "../assets/timelineBg.png"
import health from "../assets/valuesHealth.png"
import movement from "../assets/valuesMovement.png"
import improvement from "../assets/valuesImprovement.png"
import arrowDown from "../assets/arrowDown.png"
import healthImage from "../assets/healthImages.png"
import movementImage from "../assets/movement.png"
import shoeIcon from "../assets/shoeIcon.png"
import improvementImage from "../assets/improvement.png"
import improvementIcon from "../assets/improvementIcon.png"
import contactImage from "../assets/contactImage.png"
import movimpbg from "../assets/movimpbg.png"
import healthvaluesbg from "../assets/healthvaluesbg.png"
import healthUnderline from "../assets/healthUnderline.png"
import hearthIcon from "../assets/hearthIcon.png"
import bottomShadow from "../assets/bottomShadow.png"
import paperPlane from "../assets/PaperPlane.png"
import paperPlaneBlack from "../assets/PaperPlaneBlack.png"
import {Helmet} from 'react-helmet';
import {Link} from "react-scroll";
import {useMediaQuery} from 'react-responsive'
import {useState} from "react";


function About() {


    const isDesktop = useMediaQuery({query: '(min-width: 1538px)'})
    const isLaptopXL = useMediaQuery({query: '(min-width: 1440px )'})
    const isLaptop = useMediaQuery({query: '(min-width: 1024px )'})
    const isTablet = useMediaQuery({query: '(min-width: 768px)'})
    const isMobile = useMediaQuery({query: '(min-width: 640px)'})
    
    const [message, setMessage] = useState("")
    const [messageError,setMessageError] = useState(false)
    const [subject, setSubject] = useState("")
    const [subjectError,setSubjectError] = useState(false)
    const [hoverOnSendButton, setHoverOnSendButton] = useState(false)
    const [clickOnSendButton, setClickOnSendButton] = useState(false)



      function sendMessage(e) {
        e.preventDefault();

        const isMessageValid = message.trim() !== "";
        const isSubjectValid = subject.trim() !== "";

        setMessageError(!isMessageValid);
        setSubjectError(!isSubjectValid);

        if(!isMessageValid){
            document.getElementById("message").value =  "Please insert your message" 
        }

        if(!isSubjectValid){
            document.getElementById("subject").value =  "Please insert your subject of the message"
        }

        if (isMessageValid && isSubjectValid){
            setMessageError(false)
            setSubjectError(false)
            window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=peterbruncik700%40gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`);
        }
      }


      
      






    return (
        <>
            <Helmet>
                <title>About me</title>
                <link rel="icon" type="image/svg+xml" href="/aboutme.png"/>
            </Helmet>

            <div className="mb-[300px]">
                {/*Hello intro*/}
                <div className="bg-no-repeat bg-cover  md:h-[1000px] sm:h-[1250px] h-[1150px] w-full"
                    style={
                        {
                            backgroundImage: isDesktop ? `url('/src/assets/aboutMeIntro.png')` : ''
                        }
                }>
                    <div className="2xl:max-w-[1680px] max-w-[1380px] mx-auto mt-10 2xl:px-20 xl:px-10 lg:px-10 sm:px-10 px-6 font-bold not-italic">
                        
                        {
                            isLaptop ?

                            <div className="mt-0 flex">
                            <div className="2xl:mr-[150px] xl:mr-[120px] lg:mr-16 2xl:mt-[220px] xl:mt-[200px] lg:mt-[180px] font-spectral">
                                <div className=" 2xl:text-[170px] text-8xl">Hi!</div>
                                <div className="2xl:text-[90px] xl:text-[50px] lg:text-5xl  font-thin tracking-wider 2xl:mt-4 mt-2">I'm Peter Brunčík</div>
                                <div className="2xl:text-[19px] xl:text-lg lg:text-base font-thin font-spectral tracking-wide text-justify 2xl:mt-18 mt-10">Oh, hello. So, you're genuinely curious about who I am. That truly warms my heart. So, without further ado, allow me to introduce myself. I'm Peter Brunčík, an 18-year-old with no major achievements, no prestigious competition wins, and absolutely no fame in the media spotlight. Surprising, isn't it? I'm just an ordinary individual who wholeheartedly embraces self-discovery and personal growth. I'm on a life journey striving to become the best version of myself. Will you join me?</div>
                                <Link to="mystory"
                                    smooth={true}>
                                    <button className="p-2 text-white mt-8 bg-[#2A6CA5] custom-shadow lg:text-base rounded-[30px] font-poppins duration-300 ease-in-out underline-offset-[3px] hover:underline active:text-black">Learn more</button>
                                </Link>
                            </div>
                            <img src={selfie}
                                className="2xl:h-[750px] xl:h-[700px] lg:h-[600px] md:h-[350px] h-[200px] aspect-auto 2xl:p-10 2xl:mr-[-75px] xl:mr-[-32px] lg:mr-[-28px] float-right mt-[120px]"/>
                        </div>

                        :

                        <div className="sm:mt-[120px] md:mt-0">
                            <div className="flex md:flex-row flex-col justify-between 2xl:mr-[150px] xl:mr-[120px] lg:mr-16 2xl:mt-[280px] xl:mt-[200px] lg:mt-[180px] font-spectral">
                                {/*Intro image for mobile*/}
                                <img src={selfie}
                                    className="h-full aspect-auto mx-auto mt-4 md:hidden block"/>
                                <div className="flex justify-end flex-col mb-[23px]">
                                    <div className="md:text-[140px] text-8xl">Hi!</div>
                                    <div className="md:text-[42px] sm:text-5xl text-3xl  font-thin tracking-wider md:mr-[-100px]">I'm Peter Brunčík</div>
                                </div>
                                {/*Intro image for mobile*/}
                                <img src={selfie}
                                    className="md:h-[450px] h-full aspect-auto md:mr-[-22px] mx-auto md:mt-[70px] mt-4 md:block hidden"/>
                            </div>
                            <div className="2xl:text-[19px] xl:text-lg lg:text-base text-[17px] font-thin font-spectral tracking-wide text-justify mt-8">Oh, hello. So, you're genuinely curious about who I am. That truly warms my heart. So, without further ado, allow me to introduce myself. I'm Peter Brunčík, an 18-year-old with no major achievements, no prestigious competition wins, and absolutely no fame in the media spotlight. Surprising, isn't it? I'm just an ordinary individual who wholeheartedly embraces self-discovery and personal growth. I'm on a life journey striving to become the best version of myself. Will you join me?</div>
                                <Link to="mystory"
                                    smooth={true}>
                                    <button className="p-2 text-white mt-8 bg-[#2A6CA5] custom-shadow text-sm rounded-[30px] font-poppins duration-300 ease-in-out underline-offset-[3px] hover:underline active:text-black">Learn more</button>
                                </Link>
                            
                        </div>


                        }
                        
                    </div>
                </div>


                {/*My story*/}

                <div id="mystory" className="2xl:h-[1100px] xl:h-[870px] lg:h-[720px] md:h-[880px] sm:h-[780px] h-[600px] bg-no-repeat bg-cover mt-[-100px]"
                    style={
                        {
                            backgroundImage: `${ isDesktop ? "url('/src/assets/aboutMeMyStory.png')" : isLaptopXL ? "url('/src/assets/aboutMeMyStoryLaptopXL.png')" : isLaptop ? "url('/src/assets/aboutMeMyStoryLaptop.png')" : isTablet ? "url('/src/assets/aboutMeMyStoryTablet.png')" : isMobile ? "url('/src/assets/aboutMeMyStoryBigMobile.png')"   : "url('/src/assets/aboutMeMyStoryMobile.png')" }`,
                            backgroundSize: "100%"
                        }
                }>

                    <div className="mt-20">
                        <h1 className="text-black text-3xl text-center pt-20 font-spectral uppercase tracking-[10px] font-bold">My story</h1>


                        {/*Text bubbles*/}
                        <div className="relative">
                            <div className="bg-white p-4 2xl:w-[500px] 2xl:h-[250px] float-left 2xl:ml-20 mt-[50px] blur-xl rounded-[30px]"></div>
                            <p className="2xl:absolute top-[90px] blur-none 2xl:w-[400px] 2xl:left-[120px] text-justify 2xl:text-base text-xs">My story begins where your story ends. Naozaj! Moja cesta transformácie začala práve vtedy, keď som sa ocitol v situácií, kde som bezprostredne videl ako mnohí moji rovesníci sa oddávajú zábave a iným nerestiam, vedú bezstarostný život a žijú zo dňa na deň. Ja som bol však v tomto
                            </p>
                        </div>


                        <div className="relative">
                            <div className="bg-white p-4 2xl:w-[500px] 2xl:h-[300px] float-right mr-20 mt-[580px] blur-xl rounded-[30px]"></div>
                            <p className="2xl:absolute top-[635px] blur-none 2xl:w-[400px] right-[135px] text-justify 2xl:text-base text-xs">
                                Sed molestie, quam a fringilla fringilla, nibh est interdum lectus, a pulvinar lectus lorem sit amet nisl. Aliquam consectetur, turpis quis ultrices rutrum, nisi ante aliquam libero, nec mattis augue leo eget ligula. Proin ac semper lorem. Suspendisse posuere accumsan diam sed tempor. Vivamus nunc dui, cursus sed augue eget, sodales eleifend orci. Fusce vestibulum volutpat velit.
                            </p>
                        </div>


                    </div>
                </div>

                {/*Timeline*/}
                <div className="xl:h-[1400px] lg:h-[1000px] h-[300px] relative">

                    <img src={timelineBg}
                        className="absolute w-full"/>

                    <div className="2xl:pt-[300px] xl:pt-[250px] sm:pt-[150px] pt-[125px] text-center">
                        <h1 className="xl:text-4xl lg:text-3xl text-2xl text-center font-spectral tracking-[15px] 2xl:tracking-[50px] uppercase font-bold">Timeline</h1>
                    </div>
                    
                    {
                        isMobile ?

                        <img src={timeline}
                        className="absolute z-[-1] 2xl:top-[53%] xl:top-[45%] lg:top-[45%] top-[120%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] 2xl:w-[1550px] xl:w-[1100px] lg:w-[850px] md:w-[650px] w-[600px]"/>

                        :

                        <img src={timelineMobile}
                        className="absolute z-[-1] top-[80%] left-0 right-0 m-auto w-[300px]"/>

                    }

                
                </div>


                {/*My values*/}

                <div className="max-w-full 2xl:h-[1200px]">
                    <img src={healthvaluesbg}
                        className="absolute z-[-1] w-full 2xl:block hidden"/>
                    <div className="2xl:max-w-[1680px] max-w-[1380px] mx-auto 2xl:px-20 lg:px-20 sm:px-10 px-2 lg:mt-[-350px] md:mt-[400px] mt-[650px] lg:pt-[300px] ">

                        <h1 className="flex justify-center lg:text-6xl md:text-5xl text-4xl uppercase font-bold tracking-widest">My values</h1>

                        <div className="grid grid-flow-col auto-cols-fr xl:mt-20 lg:mt-14 md:mt-14 mt-8 gap-x-2 sm:gap-x-8 md:gap-x-6 md:px-10 lg:gap-x-10 2xl:gap-x-20 2xl:px-[100px]">

                            {/*Health*/}
                            <div className="relative xl:py-5 lg:py-4 md:py-6 py-4 px-2 md:px-4 xl:px-8 2xl:h-[350px] bg-[#ACDC6F] rounded-[30px]  lg:rounded-[45px] xl:rounded-[60px] 2xl:rounded-[70px] custom-shadow-card3">
                                <img src={bottomShadow}
                                    className="absolute lg:bottom-[-38px] xl:bottom-[-55px] md:bottom-[-30px] bottom-[-20px] mx-auto left-0 z-[-1]"/>
                                <div className="absolute w-[80%] 2xl:top-[220px] xl:top-[220px] lg:top-[145px] md:top-[110px] top-[75px] border border-black"></div>
                                <img src={health}
                                    className="float-right 2xl:w-[125px] xl:w-[110px] lg:w-[80px] md:w-[60px] sm:w-[50px] w-[40px] 2xl:mr-4 lg:mr-3 xl:mt-4"/>
                                <div className="lg:pr-[100px] xl:pt-[160px] lg:pt-[100px] md:pt-[60px] pt-10 2xl:pb-10 xl:pb-8 lg:pb-4">
                                    <h1 className="2xl:text-[38px] xl:text-4xl lg:text-2xl md:text-xl text-sm font-bold">Health</h1>
                                    <a href="#healthSection">
                                        <p className="underline underline-offset-4 xl:mt-8 lg:mt-5 md:mt-2 mt-1  2xl:text-[23px] xl:text-[20px] lg:text-[17px] text-xs font-spectral">Learn more</p>
                                    </a>
                                </div>
                            </div>

                            

                            {/*Movement*/}
                            <div className="relative xl:py-5 lg:py-4 md:py-6 py-4 px-2 md:px-4 xl:px-8 2xl:h-[350px] bg-[#DC836F] rounded-[30px]  lg:rounded-[45px] xl:rounded-[60px] 2xl:rounded-[70px] custom-shadow-card">
                                <img src={bottomShadow}
                                    className="absolute lg:bottom-[-38px] xl:bottom-[-55px] md:bottom-[-30px] bottom-[-20px] mx-auto left-0 z-[-1]"/>
                                <div className="absolute w-[80%] 2xl:top-[220px] xl:top-[220px] lg:top-[145px] md:top-[110px] top-[75px] border border-black"></div>
                                <img src={movement}
                                    className="float-right 2xl:w-[125px] xl:w-[110px] lg:w-[80px] md:w-[60px] sm:w-[50px] w-[40px] 2xl:mr-4 lg:mr-3 xl:mt-4"/>
                                <div className="lg:pr-[100px] xl:pt-[160px] lg:pt-[100px] md:pt-14 pt-10 2xl:pb-10 xl:pb-8 lg:pb-4">
                                    <h1 className="2xl:text-[38px] xl:text-4xl lg:text-2xl md:text-xl text-sm font-bold">Movement</h1>
                                    <a href="#movementSection">
                                        <p className="underline underline-offset-4 xl:mt-8 lg:mt-5 md:mt-2 mt-1 2xl:text-[23px] xl:text-[20px] lg:text-[17px] text-xs font-spectral">Learn more</p>
                                    </a>
                                </div>
                            </div>

                            {/*Improvement*/}
                            <div className="relative xl:py-5 lg:py-4 md:py-6 py-4 px-2 md:px-4 xl:px-8 2xl:h-[350px]  bg-[#6FD5DC] rounded-[30px] lg:rounded-[45px] xl:rounded-[60px] 2xl:rounded-[70px] custom-shadow-card2">
                                <img src={bottomShadow}
                                    className="absolute lg:bottom-[-38px] xl:bottom-[-55px] md:bottom-[-30px] bottom-[-20px] mx-auto left-0 z-[-1]"/>
                                <div className="absolute w-[80%] 2xl:top-[220px] xl:top-[220px] lg:top-[145px] md:top-[110px] top-[75px] border border-black"></div>
                                <img src={improvement}
                                    className="float-right 2xl:w-[125px] xl:w-[110px] lg:w-[80px] md:w-[60px] sm:w-[50px] w-[40px] 2xl:mr-4 lg:mr-3 xl:mt-4"/>
                                <div className="lg:pr-[100px] xl:pt-[160px] lg:pt-[100px] md:pt-14 pt-10 2xl:pb-10 xl:pb-8 lg:pb-4">
                                    <h1 className="2xl:text-[38px] xl:text-4xl lg:text-2xl md:text-xl text-sm font-bold">Improvement</h1>
                                    <a href="#improvementSection">
                                        <p className="underline underline-offset-4 xl:mt-8 lg:mt-5 md:mt-2 mt-1 2xl:text-[23px] xl:text-[20px] lg:text-[17px] text-xs font-spectral">Learn more</p>
                                    </a>
                                </div>
                            </div>

                        </div>


                        {/*Scroll down arrow*/}
                        <div className="flex flex-col items-center mt-[180px] 2xl:bg-inherit bg-black  uppercase text-2xl">
                            <Link to="healthSection"
                                smooth={true}
                                offset={-50}>
                                <img className=" mt-[-20px] w-[60px] duration-300 ease-in-out hover:scale-110"
                                    src={arrowDown}/>
                            </Link>
                        </div>

                    </div>
                </div>


                {/*Movement and improvement background picture*/}
                <img src={movimpbg}
                        className="absolute lg:top-[4800px]  2xl:top-[6300px] 2xl:block hidden w-full z-[-1]"/>




                {/*Main Container*/}
                <div className="2xl:max-w-full max-w-[1380px] mx-auto  2xl:px-20 lg:px-10 sm:px-10 px-6">


                {/*Health*/}
                <div id="healthSection" className="relative max-w-full 2xl:h-[1200px] xl:h-[900px] lg:h-[700px] 2xl:mt-[-25px] mt-0 lg:mt-[-100px] xl:mt-0">

                    <div className="2xl:px-20 xl:pt-20 2xl:mt-[160px] xl:mt-[200px]">
                        <div className="relative pt-[300px] xl:pt-10 2xl:pt-[250px]">
                            {/*Health Image on laptops/desktops*/}
                            <img className="lg:float-left lg:block hidden mx-auto lg:mr-10 2xl:w-[700px] xl:w-[500px] lg:w-[300px] 2xl:mt-[-250px]" src={healthImage}/>
                            <img src={hearthIcon}
                                className="absolute 2xl:w-[1300px] lg:w-[400px] md:w-[500px] w-[320px] 2xl:top-[-520px] xl:top-[-150px] lg:top-[110px]  md:top-[90px] top-[140px]  2xl:left-[225px] xl:left-[700px] lg:left-[500px] md:left-[-165px] left-[-110px]  2xl:rotate-0 lg:rotate-[-12deg] rotate-[16deg] z-[-1]"/>
                            
                            <div className="lg:flex lg:items-start relative">
                              <h1 className="2xl:text-9xl lg:text-7xl md:text-8xl  text-5xl uppercase rotate-[-10deg] decoration-4  mt-4 text-center font-bold lg:text-left">Health</h1>
                              <img src={healthUnderline} className="absolute lg:bottom-[-40px] md:bottom-[-40px] bottom-[-20px] lg:right-auto right-0 left-0 mx-auto lg:w-auto md:w-[450px] w-[220px]"/>
                            </div>
                            
                            {/*Health Image on mobiles/tablets*/}
                            <img className="lg:float-left lg:hidden block mx-auto mt-20 w-[400px]" src={healthImage}/>

                            
                            <div className="text-base 2xl:text-xl lg:tracking-wide 2xl:ml-[730px] lg:mt-16  mt-6 2xl:text-white 2xl:max-w-[750px] mx-auto text-justify 2xk:text-right">
                                Nunc tortor tortor, consectetur nec ultrices id, molestie at augue. Praesent dapibus nisi ut nisl pulvinar bibendum. Nam laoreet venenatis orci, at vehicula mi. Curabitur mollis tristique sem, nec tempor est sollicitudin a. Sed pharetra orci urna, tempor pellentesque odio pellentesque ut. Etiam vestibulum ipsum sit amet mi egestas pellentesque. Aenean posuere, nisi sed eleifend consectetur, magna lectus varius orci, nec consectetur metus purus vitae dui. Ut aliquam ante eget diam mattis tempus. Donec aliquet tincidunt dui.
                            </div>
                        </div>

                    </div>

                </div>


                {/*Movement*/}
                <div id="movementSection" className="relative max-w-full 2xl:h-[1200px] xl:h-[900px] lg:h-[800px] 2xl:pt-[100px]  xl:pt-[100px] lg:pt-[200px] pt-[200px]">
         
                    <img src={shoeIcon} className="absolute right-3 md:top-[100px] top-[115px] rotate-[-15deg] lg:hidden block md:w-[100px] w-[60px]"/>
                    <h1 className="2xl:text-9xl lg:text-7xl md:text-6xl text-4xl text-center lg:text-left font-bold 2xl:pl-[150px] lg:pl-10 uppercase">Movement</h1>
                    <img className="lg:float-left 2xl:mt-6 xl:mt-10 mt-8 2xl:pl-[110px] 2xl:mr-16 lg:mr-10 2xl:w-auto xl:w-[650px] lg:w-[450px] mx-auto"
                        src={movementImage}/>
                    <div className="2xl:pr-[150px]  2xl:text-[22px] xl:text-xl lg:text-lg text-base 2xl:leading-8 2xl:mt-8 xl:mt-10 lg:mt-10 mt-6 text-justify lg:text-left">
                        Nunc tortor tortor, consectetur nec ultrices id, molestie at augue. Praesent dapibus nisi ut nisl pulvinar bibendum. Nam laoreet venenatis orci, at vehicula mi. Curabitur mollis tristique sem, nec tempor est sollicitudin a. Sed pharetra orci urna, tempor pellentesque odio pellentesque ut. Etiam vestibulum ipsum sit amet mi egestas pellentesque. Aenean posuere, nisi sed eleifend consectetur, magna lectus varius orci, nec consectetur metus purus vitae dui. Ut aliquam ante eget diam mattis tempus. Donec aliquet tincidunt dui.
                    </div>
                </div>


                {/*Improvement*/}
                <div id="improvementSection" className="relative max-w-full 2xl:h-[1000px] 2xl:pt-[100px] xl:pt-[100px] lg:pt-[100px] md:pt-[250px] pt-[200px] ">
                    
                    <h1 className="2xl:text-[110px] lg:text-7xl md:text-5xl text-[28px] font-bold text-center 2xl:text-justify 2xl:pl-[310px] uppercase mb-2">Constant improvement</h1>
                    <img src={improvementIcon} className="absolute left-3 md:top-[100px] top-[115px] rotate-[10deg] lg:hidden block md:w-[100px] w-[60px]"/>
                    <img className="lg:float-left mx-auto 2xl:pl-[110px] 2xl:mr-16 lg:mr-8 2xl:w-[800px] xl:w-[650px] lg:w-[500px] md:w-[700px] w-full 2xl:mt-20 lg:mt-10  md:mt-10 mt-8"
                        src={improvementImage}/>

                    <div className="2xl:pr-[300px] 2xl:text-[22px] xl:text-xl lg:text-lg md:text-lg text-base 2xl:leading-8 2xl:mt-[425px] xl:mt-[215px] lg:mt-[175px] mt-6 text-justify lg:text-left">
                        Nunc tortor tortor, consectetur nec ultrices id, molestie at augue. Praesent dapibus nisi ut nisl pulvinar bibendum. Nam laoreet venenatis orci, at vehicula mi. Curabitur mollis tristique sem, nec tempor est sollicitudin a. Sed pharetra orci urna, tempor pellentesque odio pellentesque ut. Etiam vestibulum ipsum sit amet mi egestas pellentesque. Aenean posuere, nisi sed eleifend consectetur, magna lectus varius orci, nec consectetur metus purus vitae dui. Ut aliquam ante eget diam mattis tempus. Donec aliquet tincidunt dui.
                    </div>
                </div>

                </div>


                {/*Contact*/}

                <div className="2xl:h-[1200px]  2xl:mt-[400px] xl:mt-[600px] lg:mt-[400px] mt-[225px] 2xl:max-w-[1680px] max-w-[1380px] mx-auto 2xl:px-20 lg:px-10 md:px-[125px] sm:px-10 px-10">
                    <div className="lg:flex lg:items-center lg:justify-between xl:space-x-[200px] lg:space-x-10">
                        <img src={contactImage}
                            className="2xl:h-[800px] lg:h-[500px] xl:mr-[-100px] mt-[-75px]"/>

                        {/*Contact form*/}
                        <div className="xl:w-[900px] mx-auto w-full font-cabin lg:mt-0 md:mt-12 mt-8" id="Email">

                            <form className="bg-white border-black  shadow-[14px_14px_5px_0px_rgba(152,131,131,0.6)] rounded-[50px] lg:px-10 px-4 py-10 mb-4  sm:text-base text-sm outline outline-[1px]">

                                <h1 className='xl:text-3xl lg:text-2xl md:text-3xl text-xl font-bold'>Love to hear from you,
                                    <br/>
                                    <div className="mt-2">Get in touch👋</div>
                                </h1>


                                <div className="mb-6 mt-8">
                                    <label className="block text-gray-700 text-[15px] mb-3">
                                        Subject
                                    </label>
                                    <input id="subject" type="text" name="user_Email"
                                        onChange={
                                            e => setSubject(e.target.value)
                                        }
                                        onClick={()=>{
                                            setSubjectError(false)
                                            if(subjectError){
                                                document.getElementById("subject").value = ""
                                            }
                                            }
                                        }
                                        className={`shadow border rounded-[20px] bg-[#ECECEC] duration-200 ease-in-out w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-lg outline-none ${subjectError ? "animate-shake border-red-600 text-red-600": ""}`}/>
                                </div>


                                <div className="mb-2">
                                    <label className="block text-gray-700 text-[15px] mb-3">Message</label>
                                    <textarea rows={4}
                                        id="message"
                                        name="message"
                                        onChange={
                                            e => setMessage(e.target.value)
                                        }
                                        onClick={()=>{
                                                setMessageError(false)
                                                if(messageError){
                                                    document.getElementById("message").value = ""
                                                }
                                            }
                                        }

                                        className={`w-full bg-[#ECECEC] max-h-[175px] duration-200 border ease-in-out px-3 py-2 rounded-[20px] shadow focus:shadow-md outline-none switchGalleryScrollbar ${messageError ? "animate-shake border-red-600 text-red-600": ""}`}/>
                                    <a onMouseEnter={
                                            () => isLaptop ? setHoverOnSendButton(true) : setHoverOnSendButton(false)
                                        }
                                        onMouseLeave={
                                            () => setHoverOnSendButton(false)
                                        }
                                        onClick={
                                            (e) => {
                                                setClickOnSendButton(true),
                                                setTimeout(function () {
                                                    setClickOnSendButton(false)
                                                }, 200)
                                                sendMessage(e)
                                            }
                                        }

                                        
                                        className="flex justify-center space-x-2 w-full bg-black duration-700 ease-in-out py-2 px-3 mt-3 text-md  rounded-[20px] text-white lg:hover:bg-white lg:hover:text-black outline outline-[1px] outline-black active:bg-white active:text-black active:shadow-xl">
                                        <p>Send</p>
                                        <img src={
                                                hoverOnSendButton || clickOnSendButton ? paperPlaneBlack : paperPlane
                                            }
                                            className="my-auto"/>
                                    </a>

                            
                        



                                </div>


                            </form>
                        </div>
                        </div>
                    </div>
                                              
            </div>
        </>
    )


}

export default About
