import React from "react"
import{SiInstagram, SiGmail, SiFacebook, SiSnapchat} from 'react-icons/si'

function Footer(){


return(
    <>
    <footer className="flex flex-col mx-auto items-center justify-center bg-cyan-700 mt-auto py-16 px-50">
 <h1 className="text-white my-1 sm:text-lg md:text-2xl text-md mx-12 text-center font-bold mt-0">
    Join me on my journey and send me your e-mail to stay updated
  </h1>        
  
        <div className="my-2 ">
        <input size="30" className="px-2 py-2 rounded si mb-6 mt-2"/>
        </div>
     
        <ul className="flex pb-8">
            <li className="mx-3 text-white text-4xl ease-in-out duration-300 hover:scale-125"><a><SiInstagram /></a></li>
            <li className="mx-3  text-white text-4xl ease-in-out duration-300 hover:scale-125"><a><SiGmail/></a></li>
            <li className="mx-3  text-white text-4xl ease-in-out duration-300 hover:scale-125"><a><SiFacebook/></a></li>
            <li className="mx-3  text-white text-4xl ease-in-out duration-300 hover:scale-125"><a><SiSnapchat/></a></li>
        </ul>


    <div className="text-white text-sm mt-10 mb-[-60px]">
    <p>Made by ©René Durbák</p>
  </div>

    </footer>
    </>

)
}


export default Footer