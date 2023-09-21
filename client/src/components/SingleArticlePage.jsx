import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import commentIcon from "../assets/commentIcon.png"
import arrowRight from "../assets/Allarticlesarrow.png"
import twitter from "../assets/twShare.png"
import facebook from "../assets/fbShare.png"
import pinterest from "../assets/pintShare.png"

export default function SingleArticlePage({articles}) {

    const {id} = useParams()

    const article = articles.find((article) =>  article.id === Number(id))
    const otherArticles = articles.map((article) => {
        article.id !== Number(id)
         return article;
        })



console.log(otherArticles)


  return (
    <>
    <Navbar/>
    {/*Main container*/}
    <div className='2xl:max-w-[1680px] max-w-[1380px] mx-auto grid-flow-col grid-cols-2 xl:gap-x-20 md:gap-x-10 mt-[120px] grid 2xl:pl-20 lg:pl-20 sm:pl-10 pl-6'>
        


        {/*Article container*/}
        <div className="2xl:max-w-[1100px] col-span-2">
            <div className="col-span-2">
            <div className="flex justify-start items-center space-x-4 mt-16 text-[13px]">
                <div>16.AUGUST 2023, 12:45 </div>
                <div className="text-gray-400">Reading time: 2:00</div> 
            </div>

            <div className="xl:text-6xl md:text-5xl xl:my-6 md:my-4">{article.title}</div>

            <div className="flex justify-start items-center space-x-4 mt-10 xl:text-lg md:text-base">
                <div className="text-sm">written by </div><strong className="ml-5 tracking-wider">PETER BRUNCIK</strong>
                <div className="border-l-2 border-black pl-6 uppercase"><strong>{article.label}</strong>
            </div>
            </div>


        </div>



        {/*Article content*/}

        <div className="mt-16 text-base break-all ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula est nec sapien finibus eleifend. Nunc ut urna vitae augue ultrices eleifend ut quis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod purus id augue aliquet fermentum. Vestibulum vulputate, erat et molestie viverra, tellus mi aliquam enim, a dictum ipsum sapien nec dolor. Nulla nec mi augue. Vestibulum at felis magna. Nam at congue tellus.

Etiam id fermentum lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ornare feugiat magna id ullamcorper. In hac habitasse platea dictumst. Nulla in urna neque. Praesent quis vestibulum dui. Donec ut dolor ut tortor laoreet maximus vel sit amet enim. Nam rutrum odio nec augue venenatis suscipit. Sed rutrum maximus dui gravida hendrerit. Sed vitae tellus ultrices, tempus tortor ac, iaculis felis. Pellentesque in turpis ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ut justo et felis dapibus placerat. Fusce faucibus tincidunt lectus quis malesuada. Maecenas tempus aliquam dui et condimentum.

Nam sed dictum lectus, ullamcorper fermentum enim. Aliquam efficitur nibh eu dolor vehicula, et auctor massa ornare. Praesent non elit tristique, euismod eros eu, egestas massa. Integer ut nunc sed quam scelerisque venenatis. Maecenas venenatis sapien ipsum, mattis mattis nunc lacinia mattis. Mauris vestibulum massa a ante imperdiet tincidunt. Cras accumsan id ex vel pulvinar. Vestibulum quis lectus non urna tempor tempor. Suspendisse nec velit at diam dignissim luctus.

Vestibulum pharetra scelerisque orci, ut scelerisque augue rutrum at. Vestibulum sed nulla in turpis fringilla elementum et a eros. Cras dictum, quam at vestibulum eleifend, metus tellus convallis massa, et tincidunt ipsum dui vel tortor. Pellentesque vulputate luctus turpis ut varius. Quisque id erat interdum, tincidunt velit ut, vehicula neque. Sed lorem odio, egestas ac iaculis ut, interdum sit amet felis. Fusce pellentesque magna sed nunc semper, ac imperdiet lectus mattis. Suspendisse eu rhoncus ante, ut sollicitudin nisl. Suspendisse potenti. Vivamus hendrerit pretium rutrum. Mauris massa libero, consectetur id lacus sed, molestie faucibus massa. Ut eu interdum mauris. In faucibus mauris ut ultrices sodales. Duis elementum faucibus metus ac molestie. Sed at quam libero. In leo magna, condimentum porta magna eget, pellentesque euismod diam.
        </div>

        


        {/*Review container*/}
        <div className="mt-[125px] flex justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold">How do you rate this article?</h1>
                <div>Starts</div>
            </div>
            
        </div>


        {/*Comments container*/}
        <div className="mt-[200px]">
            <h1 className="text-4xl">Comments and reviews</h1>

            <div className="flex space-x-6 uppercase mt-6">
                <div>
                    Comments
                </div>

                <div className="flex space-x-2">
                    <div className="my-auto">
                        <img src={commentIcon}/>
                    </div>

                    <div>
                        Write a comments
                    </div>
                </div>
            </div>


            <div className="text-2xl mt-8 font-bold">12 thoughs on "{article.title}"</div>


            {/*Comments*/}
            <div className="mt-10">

                <div className="my-12">
                    <div>
                        <h1 className="font-bold text-lg">Natalie B</h1>
                        <div className="text-sm text-[#757575] mt-2">July 1, 2017 at 12:57 AM</div>
                    </div>

                    <div className="pl-20">
                        <div className="border-2 border-gray-300 rounded-[10px] max-w-[480px] mt-6 p-4">
                            <div className="text-sm">
                            Thank you for the fantastic list! I've already read 'Meditations' by Marcus Aurelius, and now I have a list of books I want to dive into next. Stoicism is an inspiring philosophical movement for me.
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>


        </div>
  
        

    
        {/*About the author side panel*/}
        <div className="border-l-2 mr-0 mt-[-100px]  max-h-auto z-[-1]">
            <div className="relative xl:max-w-[400px] lg:max-w-[300px] sm:max-w-[250px] mx-auto xl:text-left text-center">
                <div className="xl:px-20 lg:px-8 md:px-6 lg:mt-[210px] sm:mt-[180px]">

            
                    <h1 className="underline underline-offset-[25px] decoration-gray-300 xl:text-base lg:text-sm sm:text-xs">ABOUT THE AUTHOR</h1>
                    <div className="mt-10 xl:text-base lg:text-sm sm:text-xs">
                    Peter Brunčík writes about egestas dui at iaculis ultricies. Nunc pulvinar neque at tellus accumsan lobortis nec non est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam dignissim dapibus volutpat. Pellentesque iaculis sapien quam, ut fermentum enim scelerisque in. 
                    <div className="mt-6 underline underline-offset-4  decoration-gray-300 xl:text-base lg:text-sm">Click here to learn more</div>
                    </div>

                    {/*Add banner*/}
                    <div className="flex justify-center  my-[200px]">
                        <div className="w-[300px] h-[400px] bg-[#D9D9D9] rounded-lg p-4 flex justify-center items-center text-xl">
                            
                            <span className="rotate-[-45deg]">
                                Miesto pre reklamu
                            </span>
                        </div>
                    </div>


                    {/*Share container*/}
                    <div className="grid justify-center text-center">
                        <h1 className="text-xl font-bold">Share this article</h1>
                        
                        <div className="flex space-x-4 mt-6">
                            <div><a href>Pinterest</a></div>
                            <div><a href>Pinterest</a></div>
                            <div><a href>Pinterest</a></div>
                        </div>
                    </div>


                    {/*Add banner*/}
                    <div className="flex justify-center  my-[200px]">
                        <div className="w-[300px] h-[400px] bg-[#D9D9D9] rounded-lg p-4 flex justify-center items-center text-xl">
                            
                            <span className="rotate-[-45deg]">
                                Miesto pre reklamu
                            </span>
                        </div>
                    </div>


                    {/*Read next container*/}

                    <div className="text-left xl:text-base lg:text-sm sm:text-xs">
                        <div className="divide-y-2 divide-gray-300">
                                <h1 className="uppercase mb-4">Read next</h1>
                            <div className="divide-y-2 divide-gray-300 mt-2">
                            {otherArticles.map((article)=> 
                            <div>
                                <div key={article.id} className="xl:py-6 md:py-5">
                                    {article.title}
                                </div>
                            </div>
                            )}
                            </div>


                            <div className="xl:pt-8 lg:pt-4 md:pt-3 pb-[250px] flex space-x-4">
                                <div>
                                    All articles
                                </div>

                                <div>
                                    sipka
                                </div>
                            
                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </div>
      



  
    </div>


    <Footer/>
    
    </>
    
  )
}
