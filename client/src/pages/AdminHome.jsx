import React from 'react'
import AdminSidePanel from '../components/AdminSidePanel'

export default function AdminHome() {
  return (
    <div className='flex space-x-6'>
        <AdminSidePanel/>
        <div>
            Welcome Admin!
        </div>
    </div>
  )
}
