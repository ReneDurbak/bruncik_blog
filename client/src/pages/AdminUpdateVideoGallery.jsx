import React, {useEffect, useState} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import AdminSidePanel from '../components/AdminSidePanel'
import {Select, MenuItem} from '@mui/material'
import axios from 'axios'

export default function AdminUpdateVideoGallery() {

    const {id} = useParams()
    const [videoGallery, setVideoGallery] = useState({})
    const [galleryTitle, setGalleryTitle] = useState('')
    const navigate = useNavigate();


    const fetchVideoGallery = async() => {
        try {
            const response = await axios.get(`http://localhost:4000/admin/videoGalleries/getVideoGallery/${id}`)
            const fetchedVideoGallery = response.data
            setVideoGallery(fetchedVideoGallery)
            setGalleryTitle(videoGallery.title)

        } catch (error) {
            console.error(`Error fetching video gallery: ${error.message}`)
        }
    }

    useEffect(() => {
        fetchVideoGallery()
    },[id])


    const handleUpdateVideoGallery = async(e) => {
        e.preventDefault()

        try {
            const response = await axios.patch(`http://localhost:4000/admin/videoGalleries/updateVideoGallery/${id}`, {
                title: galleryTitle
            })
            navigate('/admin/push-ups')
            
        } catch (error) {
            console.error(`Error updating video gallery: ${error.message}`)
        }
    }



  return (
    <div className='flex space-x-4'>
        <AdminSidePanel/>
        
        <div className='mt-8'>
            <Link to="/admin/push-ups">
                <button className='p-2 rounded-lg bg-gray-200 hover:bg-gray-400 duration-300 ease-in-out'>back</button>
            </Link>


            <form onSubmit={handleUpdateVideoGallery} className='flex flex-col items-start space-y-4 mt-8'>
                <div className='flex space-x-4'>
                    <div className='my-auto font-bold'>Gallery name:</div>
                    <input value={galleryTitle} onChange={(e)=> setGalleryTitle(e.target.value)} className='outline outline-1 rounded-md p-2' placeholder={videoGallery.title}/>
                </div>

                <button type='submit' className='p-2 rounded-lg bg-green-400 hover:bg-green-600 duration-300 ease-in-out'>send</button>
            </form>
        </div>

    </div>
    
  )
}
