
import emailjs from 'emailjs-com'
import { useState } from 'react'


export default function Email(){
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
              //console.log(res)
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
        <div className="max-w-[1240px] mx-auto mb-[450px]"  id="Email">
            <div className='mx-2'>
            <h1 className="sm:text-4xl text-2xl font-bold text-center mb-8">Registration form</h1>
            </div>
  <form 
  className="bg-slate-300 border-black  shadow-2xl rounded-2xl  lg:px-0 px-10 py-8 mb-4 lg:mx-[200px] mx-[50px] sm:text-base text-sm"
  onSubmit={sendEmail}
  
  >
        <div className="lg:mx-[75px]">


    <div className="">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        E-mail
      </label>
      <input type="email" name="user_Email" onChange={e=>setEmail(e.target.value)} className="shadow border duration-200 ease-in-out  rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-lg outline-none "/>
      <div className={error? 'text-red-400 font-regular font-bold mt-1 lg:text-sm text-xs' : 'text-emerald-600 font-regular font-bold mt-1 lg:text-sm text-xs'}>{message}</div>
    </div>


    <div className="mt-4">
   <input type="submit" value="Send" className="flex  bg-gray-600 duration-200 ease-in-out py-1 px-3 mt-3 text-md  rounded-xl font-bold text-white hover:bg-gray-700 active:text-black"/>       
   </div>
   
   </div>
   

  </form>

       

  </div>

          </>

    )
}