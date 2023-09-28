import { useParams, Link as RouteLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { useMediaQuery } from 'react-responsive'
import { Link } from "react-router-dom"
import {FacebookShareButton, PinterestShareButton, TwitterShareButton} from "react-share"
import Navbar from "./Navbar"
import Footer from "./Footer"
import commentIcon from "../assets/commentIcon.png"
import arrowRight from "../assets/Allarticlesarrow.png"
import arrowRightIntro from "../assets/arrowRightIntro.png"
import twitter from "../assets/twShare.png"
import facebook from "../assets/fbShare.png"
import pinterest from "../assets/pintShare.png"
import closeButton from "../assets/closebutton.png"


export default function SingleArticlePage({articles}) {


    //media query
    const isLaptop = useMediaQuery({query: '(min-width: 1024px )'})

    //side bar 
    const [closeSideBar, setCloseSideBar] = useState(false)

   //write a comment
   const[openWriteCommentWindow, setOpenWriteCommentWindow] = useState(false)

    //Find clicked article
    const {id} = useParams()

    const article = articles.find((article) =>  article.id === Number(id))
    const otherArticles = articles.filter((article) => article.id !== Number(id) )
    
    //console.log(otherArticles)

    //URL
    const currentURL = `peterbruncik.com/articles/${id}`

    const [hideNameInput, setHideNameInput] = useState(false)

  
    useEffect(()=>{
        
         const handleClickOutsideCommentWindow = (event) => {
            const commentWindow = document.getElementById("commentWindow")
            const triggerCommentWindow = document.getElementById("triggerCommentsWindow")

            if(commentWindow && triggerCommentWindow && !triggerCommentWindow.contains(event.target) && !commentWindow.contains(event.target)){
                setOpenWriteCommentWindow(false)
            }
        }


        window.addEventListener('click', handleClickOutsideCommentWindow)

        return () =>{
            window.removeEventListener('click', addEventListener)
        }
    })



return (
    <>
    <Navbar/>
    {/*Main container*/}
    <div className={`${closeSideBar ? "2xl:max-w-[1680px] max-w-[1380px] mx-auto grid-flow-col grid-cols-2 xl:gap-x-20 md:gap-x-10 gap-x-3 mt-[120px] grid 2xl:pl-20 lg:pl-20 sm:pl-10 px-7" : "2xl:max-w-[1680px] max-w-[1380px] mx-auto grid-flow-col grid-cols-2 xl:gap-x-20 md:gap-x-10 gap-x-3 mt-[120px] grid 2xl:pl-20 lg:pl-20 sm:pl-10 pl-4"}`}>
        


        {/*Article container*/}
        <div className="2xl:max-w-[1100px] col-span-2 xl:mt-0 sm:mt-[-40px] mt-[-120px]">
            <div className="col-span-2">
            <div className="flex justify-start items-center space-x-4 mt-16 xl:text-[13px] sm:text-[11px] text-[9px]">
                <div>16.AUGUST 2023, 12:45 </div>
                <div className="text-gray-400">Reading time: 2:00</div> {/*npm modul na zobrazovanie casu -> date-fns*/}
            </div>

            <div className="xl:text-6xl lg:text-5xl md:text-4xl  text-3xl xl:my-6 md:my-4 sm:my-3 my-4 font-bold">{article.title}</div>

            <div className="flex justify-start items-center sm:space-x-4 space-x-2 xl:mt-10 xl:text-lg sm:text-[13px] text-[11px]">
                <div className="xl:text-base md:text-[13px] text-[11px] font-spectral">written by </div>
                <strong className=" tracking-wider">PETER BRUNCIK</strong>
                <div className="border-l-2 border-black sm:pl-5 pl-2 uppercase"><strong>{article.label}</strong>
            </div>
            </div>


        </div>



        {/*Article content*/}

        <div className="xl:mt-16 sm:mt-10 mt-7 xl:text-base sm:text-[13px] text-[14px] break-all leading-6 lg:pr-0 sm:pr-7 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula est nec sapien finibus eleifend. Nunc ut urna vitae augue ultrices eleifend ut quis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod purus id augue aliquet fermentum. Vestibulum vulputate, erat et molestie viverra, tellus mi aliquam enim, a dictum ipsum sapien nec dolor. Nulla nec mi augue. Vestibulum at felis magna. Nam at congue tellus.

Etiam id fermentum lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ornare feugiat magna id ullamcorper. In hac habitasse platea dictumst. Nulla in urna neque. Praesent quis vestibulum dui. Donec ut dolor ut tortor laoreet maximus vel sit amet enim. Nam rutrum odio nec augue venenatis suscipit. Sed rutrum maximus dui gravida hendrerit. Sed vitae tellus ultrices, tempus tortor ac, iaculis felis. Pellentesque in turpis ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ut justo et felis dapibus placerat. Fusce faucibus tincidunt lectus quis malesuada. Maecenas tempus aliquam dui et condimentum.

Nam sed dictum lectus, ullamcorper fermentum enim. Aliquam efficitur nibh eu dolor vehicula, et auctor massa ornare. Praesent non elit tristique, euismod eros eu, egestas massa. Integer ut nunc sed quam scelerisque venenatis. Maecenas venenatis sapien ipsum, mattis mattis nunc lacinia mattis. Mauris vestibulum massa a ante imperdiet tincidunt. Cras accumsan id ex vel pulvinar. Vestibulum quis lectus non urna tempor tempor. Suspendisse nec velit at diam dignissim luctus.

Vestibulum pharetra scelerisque orci, ut scelerisque augue rutrum at. Vestibulum sed nulla in turpis fringilla elementum et a eros. Cras dictum, quam at vestibulum eleifend, metus tellus convallis massa, et tincidunt ipsum dui vel tortor. Pellentesque vulputate luctus turpis ut varius. Quisque id erat interdum, tincidunt velit ut, vehicula neque. Sed lorem odio, egestas ac iaculis ut, interdum sit amet felis. Fusce pellentesque magna sed nunc semper, ac imperdiet lectus mattis. Suspendisse eu rhoncus ante, ut sollicitudin nisl. Suspendisse potenti. Vivamus hendrerit pretium rutrum. Mauris massa libero, consectetur id lacus sed, molestie faucibus massa. Ut eu interdum mauris. In faucibus mauris ut ultrices sodales. Duis elementum faucibus metus ac molestie. Sed at quam libero. In leo magna, condimentum porta magna eget, pellentesque euismod diam.
        </div>

        


        {/*Review container*/}
        <div className="mt-[125px] flex justify-center">
            <div className="text-center">
                <h1 className="lg:text-2xl md:text-xl text-[14px] font-bold">How do you rate this article?</h1>
                <div>Stars</div>
            </div>
            
        </div>


        {/*Comments container*/}
        <div className="mt-[200px]">
            <h1 className="xl:text-4xl md:text-2xl text-xl">Comments and reviews</h1>

            <div className="flex space-x-6 uppercase mt-6 xl:text-lg text-xs xl:mt-8">
                <div className="my-auto ">
                    Comments
                </div>

                <div className="flex space-x-2 duration-500 ease-in-out  2xl:border-2 border-[1px] border-white   py-1 px-3 rounded-3xl lg:hover:border-black active:border-black hover:cursor-pointer ">
                    <div className="my-auto">
                        <img src={commentIcon}/>
                    </div>

                    <div id="triggerCommentsWindow" className="my-auto" onClick={() =>  setOpenWriteCommentWindow(true)}>
                        Write a comment
                    </div>

                </div>

                
           
            </div>


            <div className="xl:text-2xl md:text-[18px] text-base mt-8 font-bold">12 thougths on "{article.title}"</div>


            {/*Comments*/}
            <div className="mt-10">

                <div className="my-12">
                    <div>
                        <h1 className="font-bold xl:text-lg text-sm">Natalie B</h1>
                        <div className="xl:text-sm text-[11px] text-[#757575] mt-2">July 1, 2017 at 12:57 AM</div>
                    </div>

                    <div className="xl:pl-20 pl-8">
                        <div className="border-2 border-gray-300 rounded-[10px] max-w-[480px] mt-6 xl:p-4 p-3">
                            <div className="xl:text-sm text-xs">
                            Thank you for the fantastic list! I've already read 'Meditations' by Marcus Aurelius, and now I have a list of books I want to dive into next. Stoicism is an inspiring philosophical movement for me.
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>


                 {/*Write a comment window*/}
                    {
                    openWriteCommentWindow ?
                    <div className="fixed top-0 left-0 bg-[#00000080] z-[10] h-[100vh] w-full flex justify-center items-center md:px-0 px-6">
                        <div className="relative bg-white rounded-[30px] p-6 px-8 w-[500px]" id="commentWindow">
                        
                        <div className="text-bold md:text-2xl text-xl font-bold">Write a comment</div>

                        <div className={`${hideNameInput ? "hidden" : "mt-7 md:text-base text-sm"}`}>
                            <p className="font-bold md:text-base text-xs">Name:</p>
                            <input placeholder="Your name " className="w-full md:rounded-[30px] rounded-[15px] mt-2 border-2 py-2 px-4 border-gray-400"/>
                        </div>

                        <div className={`${hideNameInput ? "flex space-x-2 md:mt-[107px] mt-[95px]" : "flex space-x-2 mt-1"}`}>
                                <input type="checkbox"  onClick={()=>setHideNameInput(!hideNameInput)}/>
                                <div className="font-bold md:text-base text-xs">Stay anonymous</div>
                            </div> 

                        <div className="mt-8 md:text-base text-sm">
                            <p className="font-bold md:text-base text-xs">Your thoughts on this article:</p>
                            <textarea type="text" placeholder="Write a comment ... " className="w-full md:rounded-[30px] rounded-[15px] max-h-[200px] mt-2 border-2 py-2 px-5 border-gray-400"/>
                        </div>

                        <div className="px-4">
                        <div className="w-full bg-black text-white md:mt-[125px] md:text-base text-sm mt-20 p-2 rounded-[30px] flex space-x-2 justify-center">
                            <div>Send</div>
                            <div>Icon</div>
                        </div>
                        </div>

                        <div className="absolute top-5 right-5" onClick={()=> setOpenWriteCommentWindow(false)}>X</div>
                        </div>

                    </div>
                    : ""
                    }


        </div>
  




        

    
        {/*About the author side panel*/}
        {closeSideBar ? 
            
        <div className={`${isLaptop ? "hidden" : "text-bold absolute top-20 right-8"}`} onClick={()=>setCloseSideBar(false)}>icon</div>
    
        :
        
            <div className={`${closeSideBar ? "hidden" : "relative xl:border-l-2 border-l-[1px] mr-0 sm:mt-[-100px] mt-[-125px]  max-h-auto z-[0]"}`}>
            <div onClick={()=>setCloseSideBar(true)} className={`${isLaptop ? "hidden" : "absolute sm:left-2 sm:top-[60px] top-5"}`}>
                <img src={closeButton} className="sm:w-[24px] w-[20px]"/>
            </div>
            <div className="relative xl:max-w-[400px] lg:max-w-[300px] sm:max-w-[250px] max-w-[150px] mx-auto text-left">
                <div className="xl:pr-20 xl:pl-12 lg:px-8 md:px-6 px-4 lg:mt-[210px] md:mt-[150px] sm:mt-[180px] mt-[100px]">

            
                    <h1 className="underline xl:underline-offset-[25px] sm:underline-offset-[15px] underline-offset-[12px] text-[#6F6F6F] decoration-gray-300 xl:text-base lg:text-sm sm:text-xs text-[10px]">ABOUT THE AUTHOR</h1>
                    <div className="sm:mt-10 mt-8 xl:text-base lg:text-sm sm:text-xs text-[10px]">
                    <strong>Peter Brunčík</strong> writes about egestas dui at iaculis ultricies. Nunc pulvinar neque at tellus accumsan lobortis nec non est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam dignissim dapibus volutpat. Pellentesque iaculis sapien quam, ut fermentum enim scelerisque in. 
                    <div className="mt-6 underline underline-offset-4  decoration-gray-300 xl:text-base lg:text-sm sm:text-[11px] text-[8px] flex space-x-1">
                        <div className=" hover:cursor-pointer"><Link to="/about">Click here to learn more</Link></div> 
                        
                        <div className="my-auto">
                            <img src={arrowRightIntro} className="hover:scale-110 duration-100 ease-in-out xl:w-[26px] lg:w-[20px] sm:w-[18px] w-[12px]  hover:cursor-pointer"/>
                        </div>
                    </div>
                    </div>

                    {/*Add banner*/}
                    <div className="flex justify-center  my-[200px]">
                        <div className="w-[300px] h-[400px] bg-[#D9D9D9] text-[#6F6F6F] rounded-lg p-4 flex justify-center items-center text-xl">
                            
                            <span className="rotate-[-45deg]">
                                Miesto pre reklamu
                            </span>
                        </div>
                    </div>


                    {/*Share container*/}
                    <div className="grid justify-center text-center">
                        <h1 className="xl:text-xl sm:text-base text-xs font-bold">Share this article</h1>
                        
                        <div className="flex xl:space-x-8 sm:space-x-6 space-x-2 xl:mt-6 mt-4">
                            <div><PinterestShareButton url={currentURL} media={currentURL}><img src={pinterest} className="xl:w-[58px] sm:w-[42px] w-[28px] hover:scale-110 duration-300 ease-in-out"/></PinterestShareButton></div>
                            <div><TwitterShareButton url={currentURL} title="Check out this article!" via="peterbruncik"><img src={twitter} className="xl:w-[58px] sm:w-[42px] w-[28px] hover:scale-110 duration-300 ease-in-out"/></TwitterShareButton></div>
                            <div><FacebookShareButton url={currentURL} quote="Check out this article!"><img src={facebook} className="xl:w-[58px] sm:w-[42px] w-[28px] hover:scale-110 duration-300 ease-in-out"/></FacebookShareButton></div>
                        </div>
                    </div>


                    {/*Add banner*/}
                    <div className="flex justify-center  my-[200px]">
                        <div className="w-[300px] h-[400px] bg-[#D9D9D9]  text-[#6F6F6F] rounded-lg p-4 flex justify-center items-center text-xl">
                            
                            <span className="rotate-[-45deg]">
                                Miesto pre reklamu
                            </span>
                        </div>
                    </div>


                    {/*Read next container*/}

                    <div className="text-left xl:text-base sm:text-xs text-xs">
                        <div className="divide-y-2 divide-gray-300">
                                <h1 className="uppercase mb-4 text-[#6F6F6F]">Read next</h1>
                            <div className="divide-y-2 divide-gray-300 mt-2">
                            {otherArticles.map((article)=> 
                            <div key={article.id}>
                            <RouteLink to={`/articles/${article.id}`}>
                                <div className="xl:py-6 py-4">
                                    {article.title}
                                </div>
                            </RouteLink>
                            </div>
                            )}
                            </div>


                            <div className="xl:pt-8 lg:pt-4 md:pt-4 pt-4 pb-[250px] flex xl:space-x-4 md:space-x-3 space-x-2">
                                <div className="font-bold  hover:cursor-pointer">
                                    All articles
                                </div>

                                <div className="my-auto">
                                    <img src={arrowRight} className="xl:w-[22px] w-[14px] hover:scale-105 duration-100 ease-in-out"/>
                                </div>
                            
                            </div>

                        </div>

                    </div>


                </div>
            </div>
            </div>
         
        }
        
        
      



  
        </div>


    <Footer/>
    
    </>
    
  )
}
