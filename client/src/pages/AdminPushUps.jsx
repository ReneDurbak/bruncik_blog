import {useState, useEffect} from 'react'
import AdminSidePanel from '../components/AdminSidePanel'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function AdminPushUps() {

  const [videos, setVideos] = useState([])
  const [urlLink, setUrlLink] = useState('')
  const [isCreateVideo, setIsCreateVideo] = useState(false)


  const [videoHoverStates, setVideoHoverStates] = useState({});

  const handleVideoMouseEnter = (videoId) => {
    setVideoHoverStates(() => ({
      [videoId]: true,
    }));
  };

  const handleVideoMouseLeave = (videoId) => {
    setVideoHoverStates(() => ({
      [videoId]: false,
    }));
  };

  const fetchVideos = async() => {
    try {
      const response = await axios.get("http://localhost:4000/admin/videos/getAllVideos")
      const fetchedVideos = response.data

      setVideos(fetchedVideos)
    } catch (error) {
      console.error('Cannot fetch videos:', error)
    }
  }



  const handleCreateVideo = async(e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        'http://localhost:4000/admin/videos/postVideo', 
        {
          url_link: urlLink,
        }
      )


      fetchVideos()
      setUrlLink('')
      setIsCreateVideo(false)

    } catch (error) {
      console.error('Cannot create a video:', error)
    }
  }

  const deleteVideo = async(id) => {
    try {
      const deletedVideo = await axios.delete(`http://localhost:4000/admin/videos/deleteVideo/${id}`)
      fetchVideos()

    } catch (error) {
      console.error('Cannot delete video:', error)
    } 
  }



  useEffect(()=>{
    fetchVideos()
  }, [])



  return (
    <div className='flex space-x-6'>
      <AdminSidePanel/>
       <div className="w-full mt-10">

        <button className={`${isCreateVideo ? 'hidden' : 'block'} p-2 bg-green-400 rounded-xl`} onClick={()=> setIsCreateVideo(true)}>Add video</button>

        {
          isCreateVideo
          ?
          <>
            <form onSubmit={handleCreateVideo} className="flex space-x-4 mt-8">
              <label className='my-auto'>Url link:</label>
              <input name="video_url" type='text' value={urlLink} onChange={(e)=>setUrlLink(e.target.value)} />
            

            <div className="flex space-x-2 mt-8">
              <button onClick={()=> {setIsCreateVideo(false); setUrlLink('')} } className="p-2 rounded-xl bg-gray-200">cancel</button>
              <button type='submit' className="p-2 rounded-xl bg-green-200">send</button>
            </div>
            </form>
          </>
          : null
        }

        <div className='mt-10'>
          <h1>List of videos: </h1>
          <div className="flex space-x-6 max-w-[1000px] border-2 p-2 rounded-xl overflow-x-scroll">
          { videos &&
            videos.map((video)=> (
              <div className='relative rounded-lg bg-gray-200 p-4 min-h-[150px]' 
                key={video._id} 
                onMouseEnter={() => handleVideoMouseEnter(video._id)}
                onMouseLeave={() => handleVideoMouseLeave(video._id)}
              >
                <div><strong>video link:</strong> {video.url_link}</div>
                <p><strong>day count:</strong> {video.day_count}</p>
                
                <div className="flex space-x-4 mt-2">
                  {
                    videoHoverStates[video._id] && <Link to={`/admin/updateVideo/${video._id}`}><div className="p-2 cursor-pointer rounded-xl bg-green-200 duration-300 ease-in-out hover:bg-green-400">Update</div></Link> 
                  }
                  
                  {videos.slice(-1)[0]._id === video._id && videoHoverStates[video._id] && (
                  <div onClick={()=> deleteVideo(video._id)} className="p-2 cursor-pointer rounded-xl bg-red-200 duration-300 ease-in-out hover:bg-red-400">Delete</div>
                )}
                  </div>
                
                </div>
            ))
          }
        </div>
        </div>

       </div>
    </div>
  )


}
