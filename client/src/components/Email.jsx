
import emailjs from 'emailjs-com'
import { useState } from 'react'


export default function Email(){
  const[email,setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")
  const [error,setError] = useState(false)
    
    function handleChange(e){
      e.preventDefault()
      setEmail(e.target.value)
    }



    function sendEmail(e){
      e.preventDefault()
      const rgExp = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/

      if(rgExp.test(email)){
        setMessage("Email is Valid")
        if(name.length == 0){
          setError(true)
        }else{
        emailjs.sendForm(
          'test123',
           'template_nbi58c7',
            e.target,
            '6Rv8j2Hq5xEQ8kKOX'
            ).then(res=>{
              console.log(res)
            }).catch(err=> console.error(err))
          }
      } else if(email === ""){
        setMessage("Please Enter email")
        if(name.length == 0){
          setError(true)
        }
      } else if(!rgExp.test(email)){
        setMessage("Email is not valid")
        if(name.length == 0){
          setError(true)
        }
      }else {
        setMessage("")
        if(name.length == 0){
          setError(true)
        }
      }
        
       
    }
    return(
        <>
        <div className="max-w-[1240px] mx-auto mb-[300px]"  id="Email">
            <div className='mx-2'>
            <h1 className="sm:text-4xl text-2xl font-bold text-center mb-8">Registration form</h1>
            </div>
  <form 
  className="bg-slate-300 border-black  shadow-2xl rounded-2xl lg:px-8 px-4 py-10 mb-4 md:mx-[150px] mx-[20px] sm:text-base text-sm"
  onSubmit={sendEmail}
  
  >
        <div className="lg:mx-[75px]">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Name
      </label>
      <input type="text" name="name" onChange={e=> setName(e.target.value)} className="shadow border duration-200 ease-in-out rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none mb-1 focus:shadow-xl outline-none" />
      {error&&name.length<=0? <label className="text-white font-bold lg:text-sm text-xs">Name can't be empty</label>:""}
    </div>


    <div className="mb-10">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        E-mail
      </label>
      <input type="email" name="user_Email" onChange={e=>setEmail(e.target.value)} className="shadow border duration-200 ease-in-out  rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-xl outline-none "/>
      <div className='text-white font-regular font-bold mt-1 lg:text-sm text-xs'>{message}</div>
    </div>


    <div className="mb-2">
        <label className="block text-gray-700 text-sm font-bold mb-2">Message</label> 
        <textarea rows={4} name="message" className="w-full duration-200 ease-in-out px-3 py-2 rounded shadow focus:shadow-md outline-none "/>
   <input type="submit" value="Send" className="flex  bg-gray-600 duration-200 ease-in-out py-1 px-3 mt-3 text-md  rounded-xl font-bold text-white hover:bg-gray-700 active:text-black"/>       
   </div>
   
   </div>
   

  </form>

       

  </div>

          </>

    )
}