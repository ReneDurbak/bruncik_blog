import{SiInstagram, SiTwitter, SiFacebook, SiYoutube, SiSpotify} from 'react-icons/si'
import { Link, useLocation } from "react-router-dom"
import {AiOutlineArrowRight} from 'react-icons/ai'
import emailjs from 'emailjs-com'
import { useState } from 'react'


export default function Footer(){
  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin';

  if (isAdminRoute) {
    return null
  }

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
    <footer className="relative bg-black mt-auto py-16 font-spectral w-full  2xl:bg-[url('/src/assets/footerbg.png')] xl:bg-[url('/src/assets/footerbglaptopxl.png')] lg:bg-[url('/src/assets/footerbglaptop.png')] sm:bg-[url('/src/assets/footerbgtablet.png')] bg-[url('/src/assets/footerbgmobile.png')] bg-cover">
  <div className="flex flex-col xl:flex-row items-center justify-center xl:max-w-[1800px] 2xl:px-20 xl:pl-[75px]   2xl:mx-auto sm:max-w-[600px]   xl:mx-4  mx-auto ">

    {/* Newsletter */}
    <div className="xl:basis-1/3 xl:mr-20">
      <h1 className="text-white my-1  text-3xl  text-center font-bold mt-0">
        NEWSLETTER
      </h1>
      <div className="sm:w-[450px]  mx-auto ">
        <div className="text-white sm:text-lg text-xs mx-auto mt-4 xl:text-left text-center italic w-full ">Stay informed & receive email updates on the latest news and articles.</div>
      </div>

      <form className="my-2 sm:w-[450px] w-full mx-auto"   onSubmit={sendEmail} >
        < div className="flex items-center">
          <input type="email" name="user_Email" onChange={e=>setEmail(e.target.value)} placeholder="Enter your email address" className=" px-2 2xl:py-[14px] sm:py-[13px] py-[12px] mb-6 mt-2 w-full focus:outline-none focus:shadow-xl outline-none bg-black float-left text-white md:border-l-4 border-l-[2px] border-r-[50px] md:border-y-4 border-y-[2px] mr-[-30px] border-white" />
          
          <div className="float-left bg-white py-auto mb-4 h-full">
          <AiOutlineArrowRight className="sm:text-xs xl:text-base text-sm text-black" type="submit" />  
          </div>


        </div>
      </form>
    </div>

    {/* Menu */}
    <div className="2xl:basis-1/5 xl:basis-1/6 xl:border-l-4 xl:border-white">
      <ul className="text-white xl:text-base sm:text-xs text-[9px] xl:block flex xl:my-[-3px] my-4 uppercase font-bold tracking-wide">
        <li className=" xl:mx-5 mx-1 my-auto underline underline-offset-4 decoration-0"><Link to="/" className="hover:text-gray-400 duration-300 ease-in-out">HOME</Link></li>
        <li className="xl:mt-8 xl:mx-5 mx-1 my-auto underline underline-offset-4 decoration-0"><Link to="/articles" className="hover:text-gray-400 duration-300 ease-in-out">Articles</Link></li>
        <li className="xl:mt-8 xl:mx-5 mx-1 my-auto underline underline-offset-4 decoration-0"><Link to="/push-ups" className="hover:text-gray-400 duration-300 ease-in-out">Push ups series</Link></li>
        <li className="xl:mt-8 xl:mx-5 mx-1 my-auto underline underline-offset-4 decoration-0"><Link to="/mycourse" className="hover:text-gray-400 duration-300 ease-in-out">My course</Link></li>
        <li className="xl:my-8 xl:mx-5 mx-1 my-auto underline underline-offset-4 decoration-0"><Link to="/about" className="hover:text-gray-400 duration-300 ease-in-out">About</Link></li>
        <li className="xl:mb-2 xl:mx-5 mx-1 my-auto underline underline-offset-4 decoration-0"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=peterbruncik700%40gmail.com&su=[Subject]&body=[Peter - Usually replies within 24 hours.]" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 duration-300 ease-in-out">Contact</a></li>
      </ul>
    </div>

    {/* Icons */}
      <div className="xl:basis-1/7 xl:border-l-4 border-white h-full py-[5px] ">
        <ul className="xl:block flex my-4 sm:text-[40px] text-3xl text-white">
          <li className="xl:ml-7 xl:mt-[-14px]"><a href="https://www.instagram.com/peterbruncik/" target="_blank"><SiInstagram className="hover:scale-125 ease-in-out duration-500" /></a></li>
          <li className="ml-7 xl:my-11"><a href="https://youtube.com/@peterbruncik" target="_blank"><SiYoutube className="hover:scale-125 ease-in-out duration-500" /></a></li>
          <li className="ml-7 xl:my-11"><a href="https://open.spotify.com/show/4fCLQgWYQqpEqcBmzQcwfm" target="_blank"><SiSpotify className="hover:scale-125 ease-in-out duration-500" /></a></li>
          <li className="ml-7 xl:mt-10 xl:mb-[-14px]"><a href="https://twitter.com/peterbruncik" target="_blank"><SiTwitter className="hover:scale-125 ease-in-out duration-500" /></a></li>
        </ul>
      </div>


    {/* Footer Text */}
    <p className="xl:visible invisible text-white 2xl:text-[19px] xl:text-[14px] text-sm float-right align-middle 2xl:mx-auto mr-auto 2xl:ml-120 xl:ml-8  px-4 text-center">FEEL FREE TO CONTACT ME ON SOCIAL MEDIA</p>
  </div>

  <div className="bottom-0 align-bottom text-white text-center sm:mt-12 sm:text-sm text-xs mb-[-55px] ">
    <p>Made by ©René Durbák and @Peter Brunčík</p>
  </div>
</footer>


    </>

)
}



