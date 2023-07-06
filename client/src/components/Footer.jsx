import React from "react"
import{SiInstagram, SiGmail, SiFacebook, SiSnapchat} from 'react-icons/si'

function Footer(){


return(
    <>
    <footer className="flex flex-col my-auto mx-auto items-center justify-center fixed bottom-0 w-full bg-cyan-700 min-h-max py-16 px-50">
        <h1 className="text-white my-2 sm:text-lg md:text-xl text-md mx-12 text-center font-bold mt-0 " >Join me in my journey and send me your e-mail to be updated</h1>
        <div className="my-">
        <input size="30" className="px-2 py-2 rounded si mb-10 mt-2"/>
        </div>
        <h3 className="text-white my-2 font-regular">Feel free to contact me on Social Media</h3>
        <ul className="flex ">
            <li className="mx-3 text-white text-3xl ease-in-out duration-300 hover:scale-125"><a><SiInstagram /></a></li>
            <li className="mx-3  text-white text-3xl ease-in-out duration-300 hover:scale-125"><a><SiGmail/></a></li>
            <li className="mx-3  text-white text-3xl ease-in-out duration-300 hover:scale-125"><a><SiFacebook/></a></li>
            <li className="mx-3  text-white text-3xl ease-in-out duration-300 hover:scale-125"><a><SiSnapchat/></a></li>
        </ul>


    <div className="fixed bottom-0 text-white">Made by ©René Durbák </div>

    </footer>
    </>

)
}


export default Footer