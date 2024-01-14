import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'



export default function AdminPrivateRoutes() {
    const isAuthenticated = useSelector((state) => state.adminAuth.isAuthenticated);
    
    return (
    isAuthenticated ? <Outlet/> : <Navigate to='/admin'/>
  )
}
