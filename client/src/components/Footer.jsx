import{SiInstagram, SiTwitter, SiFacebook, SiYoutube} from 'react-icons/si'
import { Link } from "react-router-dom"
import {AiOutlineArrowRight} from 'react-icons/ai'
import emailjs from 'emailjs-com'
import { useState } from 'react'


export default function Footer(){


  const[email,setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState(true)
    
    function handleChange(e){
      e.preventDefault()
      setEmail(e.target.value)
    }



    function sendEmail(e){
      e.preventDefault()
      const rgExp = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/


      if(rgExp.test(email)){
        setError(false)
        setMessage("Message was sent succesfully")
        emailjs.sendForm(
          'test123',
           'tempEmail',
            e.target,
            '6Rv8j2Hq5xEQ8kKOX'
            ).then(res=>{
              console.log(res)
            }).catch(err=> console.error(err))
          
      } else if(email === ""){
        setError(true)
        setMessage("Please Enter email")
    
      } else if(!rgExp.test(email)){
        setError(true)
        setMessage("Email is not valid")
      
      }else {
        setMessage("")
    
      }
    }


return(
    <>
    <footer className="bg-gray-900 mt-auto py-10 font-spectral w-full">
  <div className="flex flex-col xl:flex-row items-center justify-center xl:max-w-[1800px] 2xl:mx-auto sm:max-w-[600px]  xl:mx-4  mx-auto ">

    {/* Newsletter */}
    <div className="xl:basis-1/3 xl:mr-20">
      <h1 className="text-white my-1  text-3xl  text-center font-bold mt-0">
        Newsletter
      </h1>
      <div className="sm:w-[450px]  mx-auto ">
        <div className="text-white sm:text-lg text-xs mx-auto mt-4 xl:text-left text-center italic w-full ">Stay informed & receive email updates on the latest news and articles.</div>
      </div>

      <form className="my-4 sm:w-[450px] w-full mx-auto"   onSubmit={sendEmail} >
        < div className="flex items-center">
          <input type="email" name="user_Email" onChange={e=>setEmail(e.target.value)} placeholder="Enter your email address" className="px-2 2xl:py-[14px] sm:py-[13px] py-[12px] mb-6 mt-2 w-full focus:outline-none focus:shadow-xl outline-none bg-black float-left text-white border-l-4 border-r-[40px] border-y-4 mr-[-25px] border-white" />
          
          <div className="float-left bg-white py-auto mb-4 h-full">
          <AiOutlineArrowRight className="sm:text-xs text-[10px] text-black" type="submit" />  
          </div>


        </div>
      </form>
    </div>

    {/* Menu */}
    <div className="xl:basis-1/4 xl:border-l-4 xl:border-white   ">
      <ul className="text-white xl:text-xl sm:text-lg text-sm xl:block flex xl:my-[-3px] my-4 ">
        <li className="xl:mt-3 sm:mx-4 mx-1 my-auto underline underline-offset-4 decoration-0"><Link to="/" className="hover:text-gray-400 duration-300 ease-in-out">Home</Link></li>
        <li className="xl:mt-6 sm:mx-4 mx-1 my-auto underline underline-offset-4 decoration-0"><Link to="/articles" className="hover:text-gray-400 duration-300 ease-in-out">Articles</Link></li>
        <li className="xl:mt-6 sm:mx-4 mx-1 my-auto underline underline-offset-4 decoration-0"><Link to="/push-ups" className="hover:text-gray-400 duration-300 ease-in-out">Push ups series</Link></li>
        <li className="xl:mt-6 sm:mx-4 mx-1 my-auto underline underline-offset-4 decoration-0"><Link to="/mycourse" className="hover:text-gray-400 duration-300 ease-in-out">My course</Link></li>
        <li className="xl:my-6 sm:mx-4 mx-1 my-auto underline underline-offset-4 decoration-0"><Link to="/about" className="hover:text-gray-400 duration-300 ease-in-out">About</Link></li>
        <li className="xl:mb-3 sm:mx-4 mx-1 my-auto underline underline-offset-4 decoration-0"><Link to="/about" className="hover:text-gray-400 duration-300 ease-in-out">Contact</Link></li>
      </ul>
    </div>

    {/* Icons */}

      <div className="xl:basis-1/7 xl:border-l-4 border-white h-full py-[5px] ">
        <ul className="xl:block flex my-4 sm:text-4xl text-3xl text-white">
          <li className="ml-6 my-auto xl:mb-10 xl:mt-3"><a href="https://www.instagram.com/peterbruncik/" target="_blank"><SiInstagram className="hover:scale-125 ease-in-out duration-500" /></a></li>
          <li className="ml-6 xl:my-10"><a><SiTwitter className="hover:scale-125 ease-in-out duration-500" /></a></li>
          <li className="ml-6 xl:my-10"><a><SiFacebook className="hover:scale-125 ease-in-out duration-500" /></a></li>
          <li className="ml-6 xl:mt-10 xl:mb-2"><a><SiYoutube className="hover:scale-125 ease-in-out duration-500" /></a></li>
        </ul>
      </div>


    {/* Footer Text */}
    <p className="xl:visible invisible text-white 2xl:text-xl xl:text-base text-sm float-right align-middle 2xl:mx-auto mr-auto ml-4 px-4 text-center">FEEL FREE TO CONTACT ME ON SOCIAL MEDIA</p>
  </div>

  <div className="bottom-0 align-bottom text-white text-center sm:mt-12 sm:text-sm text-xs mb-[-35px] font-bold ">
    <p>Made by ©René Durbák</p>
  </div>
</footer>


    </>

)
}



