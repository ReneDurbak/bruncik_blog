import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'
import AdminSidePanel from '../components/AdminSidePanel'

export default function AdminUpdateVideo() {

    const { id } = useParams()
    const [video, setVideo] = useState({})
    const [urlLink, setUrlLink] = useState('')
    const navigate = useNavigate();


    const fetchVideo = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/admin/videos/getVideo/${id}`)
            const fetchedVideo = response.data

            setVideo(fetchedVideo)
            setUrlLink(fetchedVideo.url_link)
        } catch (error) {
            console.error('Cannot fetch a video:', error)
        }
    }

    const handleUpdateVideo = async(e) => {
            e.preventDefault()

        try {
            await axios.patch(`http://localhost:4000/admin/videos/patchVideo/${id}`, {
                url_link: urlLink
            })

            setUrlLink('')
            navigate('/admin/push-ups')
        } catch (error) {
            console.error('Cannot update video:', error)
        }
    }

    useEffect(()=> {
        fetchVideo()
    },[])


    return (
        <>
            <div className='flex space-x-6'>
                <AdminSidePanel />
                <div className='w-full mt-10'>
                <Link to="/admin/push-ups"><button className='p-2 rounded-xl bg-gray-200 duration-300 ease-in-out hover:bg-gray-400'>Back</button></Link>

                    <form onSubmit={handleUpdateVideo} className="flex space-x-4 mt-8">
                        <label className='my-auto'>Url link:</label>
                        <input className="w-[20%]" placeholder={video.url_link} name="video_url" type='text' value={urlLink} onChange={(e) => setUrlLink(e.target.value)} />


                        <div className="flex space-x-2 mt-8">
                            <button type='submit' className="p-2 rounded-xl bg-green-200">send</button>
                        </div>
                    </form>

                </div>

            </div>

        </>
    )
}
