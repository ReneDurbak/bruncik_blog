import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Spinner } from 'flowbite-react';
import { toast, ToastContainer } from 'react-toastify'
import { setCredentials } from '../slices/user/authSlice'
import { useUpdateUserMutation} from '../slices/user/usersApiSlice'
import Navbar from "./Navbar";
import Footer from "./Footer";




export default function Profile(){

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.auth)

  const [updateProfile, {isLoading}] =  useUpdateUserMutation()

  useEffect(() => {
    setName(userInfo.name)
    setEmail(userInfo.email)

  }, [userInfo.name, userInfo.email])

  const handleUpdateProfile = async(e) => {
    e.preventDefault()
    if(password !== confirmPassword){
      toast.error('Passwords do not match')
    }else{
      try {
        const res = await updateProfile({
            _id: userInfo._id,
            name,
            email,
            password
        }).unwrap()
        dispatch(setCredentials({...res}))
        toast.success('Profile updated')
      } catch (error) {
        toast.error(error?.data?.message || error.error)
      }
    }
  }

    return(
        <>
            <Navbar/>
            <ToastContainer/>
            <div className="font-poppins flex justify-center items-center h-screen px-6 bg-gradient-to-br from-red-100 via-yellow-200 to-purple-300">
            <div className="flex flex-col  px-10 py-6 rounded-[30px] w-[40rem] outline outline-[1px] shadow-[0px_0px_70px_10px_#f7fafc]">
              <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mt-8">Update profile</h1>
              <form onSubmit={ handleUpdateProfile }>
                <div className="flex justify-center flex-col space-y-4 mt-14">
                  <div className="flex flex-col justify-center">
                    <p className="lg:text-base sm:text-sm text-xs">Name</p>
                    <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} className="rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out" />
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="lg:text-base sm:text-sm text-xs">E-mail</p>
                    <input id="email" type="text" value={email} onChange={e => setEmail(e.target.value)} className="rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out" />
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="lg:text-base sm:text-sm text-xs">Password</p>
                    <input id="password" type="password" onChange={e => setPassword(e.target.value)} className="rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out" />
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="lg:text-base sm:text-sm text-xs">Confirm password</p>
                    <input id="confirmPassword" type="password" onChange={e => setConfirmPassword(e.target.value)} className="rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out" />
                  </div>
                </div>

                <div className="flex justify-end mt-10">
                 
                  {isLoading && <Spinner className='mr-4' color="pink" aria-label="Large Pink spinner example" size="lg" />}
                  <button type="submit" className="md:py-2 py-1 md:px-4 px-3 text-sm lg:text-base rounded-[16px] bg-black hover:bg-white text-white hover:text-black shadow-lg hover:shadow-xl outline-0 outline duration-300 ease-out">
                    update profile
                  </button>
                </div>
              </form>
            </div>
          </div>
          <Footer/>
        </>
    )
}