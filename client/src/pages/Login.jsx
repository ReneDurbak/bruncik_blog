import {useState} from 'react'
import {Link} from 'react-router-dom'

export default function Login() {

    const [inputName, setInputName] = useState('')
    const [inputPass, setInputPass] = useState('')


  return (
    <>
    { 
    

<div className="flex justify-center items-center h-screen bg-gradient-to-br from-red-100 via-yellow-200 to-purple-300 px-6">
            <div className="flex flex-col  px-10 py-6 rounded-[30px] w-[40rem] outline outline-[1px] shadow-2xl">
              <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mt-8">Login into an account</h1>
              <form>
                <div className="flex justify-center flex-col space-y-4 mt-14">
                  <div className="flex flex-col justify-center">
                    <p className="lg:text-base sm:text-sm text-xs">E-mail</p>
                    <input id="name" type="text" onChange={e => setInputName(e.target.value)} className="rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out" required />
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="lg:text-base sm:text-sm text-xs">Password</p>
                    <input id="password" type="password" onChange={e => setInputPass(e.target.value)} className="rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out" required />
                  </div>
                </div>

                <div className="flex justify-end mt-10">
                <div className='mr-4 my-auto duration-300 ease-in-out hover:text-gray-600 hover:cursor-pointer'>
                <Link to="/register">
                    Not registered yet?
                    </Link>
                </div>
                  
                  <button type="submit" className="md:py-2 py-1 md:px-4 px-3 text-sm lg:text-base rounded-[16px] bg-black hover:bg-white text-white hover:text-black shadow-lg hover:shadow-xl outline-0 outline duration-300 ease-out">
                    login
                  </button>
                </div>

                
              </form>
            </div>
          </div>

}
    </>
  )
}
