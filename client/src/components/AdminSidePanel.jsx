import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { useLogoutMutation } from '../slices/admin/adminsApiSlice'
import { adminLogout } from '../slices/admin/adminAuthSlice'
import { useNavigate } from 'react-router-dom'
import { IoLogOutOutline } from "react-icons/io5";




export default function AdminSidePanel() {

  //const selector = useSelector()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [adminLogoutApiCall] = useLogoutMutation()

  const adminLogoutHandler = async() => {
    try {
      await adminLogoutApiCall()
      console.log(adminLogoutApiCall())
      console.log(adminLogoutApiCall().unwrap())
      dispatch(adminLogout())
      navigate('/admin')

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
    <div className="font-poppins fixed left-0 top-0 h-full flex flex-col justify-between h-screen bg-[#2A6CA5] px-6 text-white w-[16rem]">
        <ul className="flex flex-col items-start mt-8 space-y-4">
        <li className="text-xl font-bold">Admin Mode</li>
        <li><Link to="/admin/articles">Articles</Link></li>
        <li><Link to="/admin/push-ups">Push-ups gallery</Link></li>
        </ul>


        <div>
        <div className="flex justify-between items-end  mb-2">
            <div>Admin</div>
            <IoLogOutOutline size={26} className="flex-end hover:cursor-pointer" onClick={() => adminLogoutHandler()}>od</IoLogOutOutline>
        </div>
        </div>
  
    </div>
      
    </>
  )
}
