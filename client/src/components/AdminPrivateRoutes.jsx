import React, { useId } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function PrivateRoute() {
  const {adminInfo} = useSelector((state)=> state.adminAuth)
  return adminInfo ? <Outlet/> : <Navigate to ='/admin' replace/>
  
    return (
    <div>
      
    </div>
  )
}
