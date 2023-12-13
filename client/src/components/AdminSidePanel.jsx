import React from 'react'
import { Link } from 'react-router-dom'


export default function AdminSidePanel() {
  return (
    <>
    <div className="flex flex-col justify-between h-screen bg-[#2A6CA5] px-6 text-white w-[16rem]">
        <ul className="flex flex-col items-start mt-8 space-y-4">
        <li className="text-xl font-bold">Admin Mode</li>
        <li><Link to="/admin/articles">Articles</Link></li>
        <li><Link to="/admin/push-ups">Push up videos</Link></li>
        </ul>


        <div>
        <div className="flex justify-between">
            <div>fotka</div>
            <div>Peter Bruncik</div>
            <div className="flex-end">od</div>
        </div>
        </div>
    </div>
      
    </>
  )
}
