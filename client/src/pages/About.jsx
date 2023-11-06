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
import improvementImage from "../assets/improvement.png"
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

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [hoverOnSendButton, setHoverOnSendButton] = useState(false)
    const [clickOnSendButton, setClickOnSendButton] = useState(false)


    const isLaptop = useMediaQuery({query: '(min-width: 1024px )'})


    return (
        <>
            <Helmet>
                <title>About me</title>
                <link rel="icon" type="image/svg+xml" href="/aboutme.png"/>
            </Helmet>

            <Navbar/>

            <div className="mb-[300px]">
                {/*Hello intro*/}
                <div className="bg-no-repeat bg-cover  h-[1000px] w-full"
                    style={
                        {
                            backgroundImage: isDesktop ? `url('/src/assets/aboutMeIntro.png')` : ''
                        }
                }>
                    <div className="2xl:max-w-[1680px] max-w-[1380px] mx-auto mt-10 2xl:px-20 lg:px-20 sm:px-10 px-6] font-bold not-italic">
                        <div className="mt-0 flex">
                            <div className="2xl:pr-[150px] mt-[150px] font-spectral">
                                <div className=" 2xl:text-[170px]">Hi!</div>
                                <div className="2xl:text-[90px]  font-thin tracking-wider mt-[-50px]">I'm Peter Brunčík
                                </div>
                                <div className="text-lg font-thin font-spectral tracking-wide text-justify md:block hidden">Oh, hello. So, you're genuinely curious about who I am. That truly warms my heart. So, without further ado, allow me to introduce myself. I'm Peter Brunčík, an 18-year-old with no major achievements, no prestigious competition wins, and absolutely no fame in the media spotlight. Surprising, isn't it? I'm just an ordinary individual who wholeheartedly embraces self-discovery and personal growth. I'm on a life journey striving to become the best version of myself. Will you join me?</div>
                                <Link to="mystory"
                                    smooth={true}>
                                    <button className="p-2 text-white mt-8 bg-[#2A6CA5] custom-shadow text-base rounded-[30px] font-poppins duration-300 ease-in-out underline-offset-[3px] hover:underline active:text-black">Learn more</button>
                                </Link>
                            </div>
                            <img src={selfie}
                                className="2xl:h-[750px] h-[350px] aspect-auto p-10 2xl:mr-[-75px] float-right mt-[120px]"/>
                        </div>
                    </div>
                </div>


                {/*My story*/}

                <div id="mystory" className="h-[1100px] bg-no-repeat bg-cover mt-[-100px]"
                    style={
                        {backgroundImage: `url('/src/assets/aboutMeMyStory.png')`}
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
                <div className="lg:h-[1400px] h-[300px] relative">

                    <img src={timelineBg}
                        className="absolute w-full"/>

                    <div className="lg:pt-[300px] pt-16 relative">
                        <h1 className="2xl:text-4xl text-center font-spectral 2xl:tracking-[50px] uppercase font-bold">Timeline</h1>
                    </div>
                    <img src={timeline}
                        className="absolute z-[-1] lg:top-[53%] top-[70%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-[1550px]"/>

                </div>


                {/*My values*/}

                <div className="max-w-full lg:h-[1200px]">
                    <img src={healthvaluesbg}
                        className="absolute z-[-1] w-full"/>
                    <div className="2xl:max-w-[1680px] max-w-[1380px] mx-auto 2xl:px-20 lg:px-20 sm:px-10 px-6 lg:mt-[-350px] mt-[150px] lg:pt-[300px] ">

                        <h1 className="flex justify-center text-6xl uppercase font-bold tracking-widest">My values</h1>

                        <div className="grid grid-flow-col auto-cols-fr mt-20  gap-x-6 2xl:gap-x-20 2xl:px-[100px]">

                            {/*Health*/}
                            <div className="relative py-5 2xl:px-8 2xl:h-[350px] bg-[#ACDC6F] rounded-[30px] lg:rounded-[70px] custom-shadow-card">
                                <img src={bottomShadow}
                                    className="absolute lg:bottom-[-65px] bottom-[-20px] lg:left-2 z-[-1]"/>
                                <div className="absolute w-[80%] lg:top-[210px] border border-black"></div>
                                <img src={health}
                                    className="float-right lg:w-[125px] w-[50px] mr-4 mt-4"/>
                                <div className="lg:pr-[100px] lg:pt-[140px] lg:pb-10">
                                    <h1 className="2xl:text-[38px] font-bold">Health</h1>
                                    <a href="#healthSection">
                                        <p className="underline underline-offset-4 mt-2 2xl:text-[23px] font-spectral">Learn more</p>
                                    </a>
                                </div>
                            </div>

                            {/*Movement*/}
                            <div className="relative lg:py-5 lg:px-8 2xl:h-[350px] bg-[#DC836F] rounded-[30px] lg:rounded-[70px] custom-shadow-card">
                                <img src={bottomShadow}
                                    className="absolute lg:bottom-[-65px] bottom-[-20px] lg:left-2 z-[-1]"/>
                                <div className="absolute w-[80%] lg:top-[210px] border border-black"></div>
                                <img src={movement}
                                    className="float-right lg:w-[125px] w-[50px] mr-4 mt-4"/>
                                <div className="lg:pr-[100px] lg:pt-[140px] lg:pb-10">
                                    <h1 className="2xl:text-[38px] font-bold">Movement</h1>
                                    <a href="#movementSection">
                                        <p className="underline underline-offset-4 mt-4 2xl:text-[23px] font-spectral">Learn more</p>
                                    </a>
                                </div>
                            </div>

                            {/*Improvement*/}
                            <div className="relative py-5 2xl:px-8 2xl:h-[350px] bg-[#6FD5DC] rounded-[30px] lg:rounded-[70px] custom-shadow-card2">
                                <img src={bottomShadow}
                                    className="absolute lg:bottom-[-65px] bottom-[-20px] lg:left-2 z-[-1]"/>
                                <div className="absolute w-[80%] lg:top-[210px] border border-black"></div>
                                <img src={improvement}
                                    className="float-right lg:w-[125px] w-[50px] mr-4 mt-4"/>
                                <div className="lg:pr-[100px] lg:pt-[140px] lg:pb-10">
                                    <h1 className="2xl:text-[38px] font-bold">Improvement</h1>
                                    <a href="#improvementSection">
                                        <p className="underline underline-offset-4 mt-4 2xl:text-[23px] font-spectral">Learn more</p>
                                    </a>
                                </div>
                            </div>

                        </div>


                        {/*Scroll down arrow*/}
                        <div className="flex flex-col items-center mt-[180px] text-white uppercase text-2xl">
                            <Link to="healthSection"
                                smooth={true}
                                offset={-50}>
                                <img className="mt-[-20px] w-[60px] duration-300 ease-in-out hover:scale-110"
                                    src={arrowDown}/>
                            </Link>
                        </div>

                    </div>
                </div>


                <div className="2xl:max-w-full max-w-[1380px] mx-auto  lg:px-0 sm:px-10 px-6">
                {/*Health*/}

                <div id="healthSection" className="relative max-w-full 2xl:h-[1200px] 2xl:mt-[-25px]">

                    <div className="2xl:px-20 pt-20">

                        <img className="float-left mr-10 2xl:w-[700px] w-[150px]"
                            src={healthImage}/>

                        <div className="relative pt-[300px]">
                            <img src={hearthIcon}
                                className="absolute 2xl:top-[-450px] 2xl:left-[225px] 2xl:w-[1300px] w-[200px] z-[-1]"/>
                            
                            <div className="lg:flex lg:items-start relative">
                              <h1 className="2xl:text-9xl text-2xl uppercase lg:rotate-[-10deg] decoration-4 font-spectral mt-4 text-center lg:text-left">Health</h1>
                              <img src={healthUnderline} className="absolute hidden md:block bottom-[-40px]"/>
                            </div>
                            
                            <div className="text-base lg:text-xl tracking-wide mt-[63px] pt-8 2xl:ml-[730px] 2xl:text-white 2xl:max-w-[750px] mx-auto text-justify lg:text-right">
                                Nunc tortor tortor, consectetur nec ultrices id, molestie at augue. Praesent dapibus nisi ut nisl pulvinar bibendum. Nam laoreet venenatis orci, at vehicula mi. Curabitur mollis tristique sem, nec tempor est sollicitudin a. Sed pharetra orci urna, tempor pellentesque odio pellentesque ut. Etiam vestibulum ipsum sit amet mi egestas pellentesque. Aenean posuere, nisi sed eleifend consectetur, magna lectus varius orci, nec consectetur metus purus vitae dui. Ut aliquam ante eget diam mattis tempus. Donec aliquet tincidunt dui.
                            </div>
                        </div>

                    </div>

                </div>


                {/*Movement*/}
                <div id="movementSection" className="relative max-w-full lg:h-[1100px] pt-[200px] lg:pt-[125px]">
                    <img src={movimpbg}
                        className="absolute bottom-[-650px] w-full z-[-1]"/>
                    <h1 className="2xl:text-9xl text-2xl text-center lg:text-left font-bold lg:pl-[150px] uppercase">Movement</h1>
                    <img className="float-left pt-6 pl-[110px] pr-16"
                        src={movementImage}/>
                    <div className="2xl:pr-[150px] text-base lg:text-2xl mt-8 text-justify lg:text-left">
                        Nunc tortor tortor, consectetur nec ultrices id, molestie at augue. Praesent dapibus nisi ut nisl pulvinar bibendum. Nam laoreet venenatis orci, at vehicula mi. Curabitur mollis tristique sem, nec tempor est sollicitudin a. Sed pharetra orci urna, tempor pellentesque odio pellentesque ut. Etiam vestibulum ipsum sit amet mi egestas pellentesque. Aenean posuere, nisi sed eleifend consectetur, magna lectus varius orci, nec consectetur metus purus vitae dui. Ut aliquam ante eget diam mattis tempus. Donec aliquet tincidunt dui.
                    </div>
                </div>


                {/*Improvement*/}
                <div id="improvementSection" className="relative max-w-full 2xl:h-[1000px] pt-[200px] lg:pt-[190px]">
                    <h1 className="2xl:text-[110px] text-2xl font-bold text-center lg:text-justify 2xl:pl-[250px] uppercase lg:mt-[-50px] mb-2">Constant improvement</h1>
                    <img className="lg:float-left lg:pl-[110px] pr-16 w-[900px] lg:pt-[110px]"
                        src={improvementImage}/>

                    <div className="2xl:pr-[300px] text-base lg:text-2xl lg:mt-[425px] text-justify lg:text-left">
                        Nunc tortor tortor, consectetur nec ultrices id, molestie at augue. Praesent dapibus nisi ut nisl pulvinar bibendum. Nam laoreet venenatis orci, at vehicula mi. Curabitur mollis tristique sem, nec tempor est sollicitudin a. Sed pharetra orci urna, tempor pellentesque odio pellentesque ut. Etiam vestibulum ipsum sit amet mi egestas pellentesque. Aenean posuere, nisi sed eleifend consectetur, magna lectus varius orci, nec consectetur metus purus vitae dui. Ut aliquam ante eget diam mattis tempus. Donec aliquet tincidunt dui.
                    </div>
                </div>


                {/*Contact*/}

                <div className="lg:h-[1200px]  pt-[225px] lg:pt-[500px] 2xl:max-w-[1680px] max-w-[1380px] mx-auto 2xl:px-10">
                    <div className="flex items-center md:space-x-[200px]">
                        <img src={contactImage}
                            className="2xl:h-[800px] lg:h-[500px] h-[200px] mr-[-50px] mt-[-75px]"/>

                        <div className="w-[900px] font-cabin" id="Email">

                            <form className="bg-white border-black  shadow-[14px_14px_5px_0px_rgba(152,131,131,0.6)] rounded-[50px] lg:px-10 px-4 py-10 mb-4  sm:text-base text-sm outline outline-[1px]">

                                <h1 className='text-3xl font-bold'>Love to hear from you,
                                    <br/>
                                    <div className="mt-2">Get in touch👋</div>
                                </h1>


                                <div className="mb-6 mt-8">
                                    <label className="block text-gray-700 text-[15px] mb-3">
                                        Subject
                                    </label>
                                    <input type="text" name="user_Email"
                                        onChange={
                                            e => setEmail(e.target.value)
                                        }
                                        className="shadow border rounded-[20px] bg-[#ECECEC] duration-200 ease-in-out w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-lg outline-none "/>
                                </div>


                                <div className="mb-2">
                                    <label className="block text-gray-700 text-[15px] mb-3">Message</label>
                                    <textarea rows={4}
                                        name="message"
                                        onChange={
                                            e => setMessage(e.target.value)
                                        }
                                        className="w-full bg-[#ECECEC] max-h-[175px] duration-200 ease-in-out px-3 py-2 rounded-[20px] shadow focus:shadow-md outline-none switchGalleryScrollbar"/>
                                    <button onMouseEnter={
                                            () => isLaptop ? setHoverOnSendButton(true) : setHoverOnSendButton(false)
                                        }
                                        onMouseLeave={
                                            () => setHoverOnSendButton(false)
                                        }
                                        onClick={
                                            () => {
                                                setClickOnSendButton(true),
                                                setTimeout(function () {
                                                    setClickOnSendButton(false)
                                                }, 200)

                                                window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=peterbruncik700%40gmail.com&su=${email}&body=${name}-${message}`, '_blank');

                                            }
                                        }
                                        className="flex justify-center space-x-2 w-full bg-black duration-700 ease-in-out py-2 px-3 mt-3 text-md  rounded-[20px] text-white lg:hover:bg-white lg:hover:text-black outline outline-[1px] outline-black active:bg-white active:text-black active:shadow-xl">
                                        <p>Send</p>
                                        <img src={
                                                hoverOnSendButton || clickOnSendButton ? paperPlaneBlack : paperPlane
                                            }
                                            className="my-auto"/>
                                    </button>


                                </div>


                            </form>
                        </div>
                    </div>
                </div>
              </div>                                
            </div>


            <Footer/>
        </>
    )


}

export default About
