import React from "react"
import{SiInstagram, SiGmail, SiFacebook, SiSnapchat} from 'react-icons/si'
import { Link } from "react-router-dom"

function Footer(){


return(
    <>
    <footer className=" bg-gray-900 mt-auto py-10">
      <div className="flex flex-row items-center justify-center max-w-[1920px] mx-auto">
      <div className=" basis-1/3 mr-20  "> 
 <h1 className=" text-white my-1 sm:text-lg md:text-2xl text-md text-center font-bold mt-0">
  Newsletter
  </h1> 
  <div className="">
  <div className="text-white text-base mt-4 text-center">Stay informed & receive email updates on the latest news and articles. </div>       
  </div>
        <div className="my-2 text-center ">
        <input size="30" className="px-2 py-2 rounded si mb-6 mt-2"/>
        </div>
        </div>
    

        <div className="basis-1/4 border-l-4 border-white"> 
<ul className="text-white text-lg"> 
<li className="mt-4 mx-4 underline underline-offset-4 decoration-0 hover:text-gray-400 duration-300 ease-in-out "><Link to="/">Home </Link></li>
<li className="my-5 mx-4 underline underline-offset-4 decoration-0 hover:text-gray-400 duration-300 ease-in-out"><Link to="/articles">Articles</Link></li>
<li className="my-5 mx-4 underline underline-offset-4 decoration-0 hover:text-gray-400 duration-300 ease-in-out"><Link to="/push-ups">Push ups series </Link></li>
<li className="my-5 mx-4 underline underline-offset-4 decoration-0 hover:text-gray-400 duration-300 ease-in-out"><Link to="/mycourse">My course </Link>  </li>
<li className="mb-4 mx-4 underline underline-offset-4 decoration-0 hover:text-gray-400 duration-300 ease-in-out"><Link to="/about">About </Link> </li>

</ul>

        </div>



        <div className="basis-1/7 border-l-4 border-white"> 
        
        <ul>
            <li className="ml-6 mb-7 mt-3 text-white text-4xl"><a href="https://www.instagram.com/peterbruncik/" target="_blank"><SiInstagram className="hover:scale-125 ease-in-out duration-500"/></a></li>
            <li className="ml-6 my-7 text-white text-4xl"><a><SiGmail className="hover:scale-125 ease-in-out duration-500"/></a></li>
            <li className="ml-6 my-7 text-white text-4xl"><a><SiFacebook className="hover:scale-125 ease-in-out duration-500"/></a></li>
            <li className="ml-6 mt-7 mb-2 text-white text-4xl"><a><SiSnapchat className="hover:scale-125 ease-in-out duration-500"/></a></li>
        </ul>
        </div>


        <p className="text-white md:text-xl float-right align-middle ml-14 ">Feel free to contact me on social media</p>
     

{/*
    <div className="text-white text-sm mt-10 mb-[-60px]">
    <p>Made by ©René Durbák</p>
  </div>*/}
</div>
    </footer>
    </>

)
}


export default Footer