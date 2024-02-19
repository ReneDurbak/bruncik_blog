import {useState, useEffect} from 'react'
import AdminSidePanel from '../components/AdminSidePanel'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {io} from 'socket.io-client'


export default function AdminPushUps() {

  const [videos, setVideos] = useState([])
  const [urlLink, setUrlLink] = useState('')
  const [galleryUrlLink , setGalleryUrlLink] = useState('')
  const [isCreateVideo, setIsCreateVideo] = useState(false)
  const [isCreateVideoGallery, setIsCreateVideoGallery] = useState(false)


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


  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:4000');
    setSocket(newSocket);

    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, []);

  const sendToSocket = () => {
    if (socket) {
      const message = videos.length > 0
        ? `New video posted! On day count: ${videos.slice(-1)[0].day_count + 1}!`
        : 'New video posted! On day count: 1!';
      socket.emit('videoCreated', { message, createdAt: new Date() });
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

      sendToSocket()


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



  const [videoGallery, setVideoGallery] = useState([])


  const fetchVideoGalleries = async() => {
    try {
      const response = await axios.get("http://localhost:4000/admin/videoGalleries/getAllVideoGalleries")
      const fetchedVideoGalleries = response.data

      setVideoGallery(fetchedVideoGalleries)
    } catch (error) {
      console.error('Cannot fetch videos:', error)
    }
  }

  useEffect(()=>{
    fetchVideoGalleries()
  }, [])


  const createVideoGallery = async(e) => {
    e.preventDefault()
    
    try {
      const response = await axios.post("http://localhost:4000/admin/videoGalleries/createVideoGallery", {
        title:galleryUrlLink
      })
      fetchVideoGalleries()
      setGalleryUrlLink('')

 
    } catch (error) {
      console.error('Cannot create video gallery:', error)

    }
  }







  return (
    <div className='flex space-x-6'>
      <AdminSidePanel/>


       <div className="w-full mt-10 max-h-[1000px] overflow-y-auto">

        <div className="mt-10">
          <h1 className="mt-10 mb-2 text-3xl font-bold">Video galleries</h1>
          <div className="border-t-2 w-[20%] border-black" /> 

          <div className="flex space-x-6 max-w-[1000px] border-2 p-2 rounded-xl overflow-x-scroll mt-6">
            {
              videoGallery.map((videoGallery) => (
                <div key={videoGallery._id}> {videoGallery.title}</div>
              ))
            }
          </div>

          <button className={`${isCreateVideoGallery ? 'hidden' : 'block'} p-2 bg-green-400 hover:bg-green-600 ease-in-out duration-300 rounded-xl mt-4`} onClick={()=> setIsCreateVideoGallery(true)}>Add video gallery</button>
        
            <form onSubmit={createVideoGallery} className={`${isCreateVideoGallery ? 'block' : 'hidden'} flex justify-start mt-10 space-x-4`}>
            
            <div className='flex space-x-4'>
              <label className='my-auto'>video gallery name:</label>
            <input className='outline outline-2 px-2 rounded-md' onChange={(e) => setGalleryUrlLink(e.target.value)}/>
            </div>

            <div className='flex space-x-2'>
            <button className='p-2 rounded-xl bg-gray-300 hover:bg-gray-400 ease-in-out duration-300' onClick={()=> setIsCreateVideoGallery(false)}>back</button>
            <button type='submit' className='p-2 rounded-xl bg-green-400 hover:bg-green-500 ease-in-out duration-300' onClick={()=> setIsCreateVideoGallery(false)}>send</button>
            </div>

            </form>
           
        </div>





        <div className='mt-20'>
        
        <h1 className="mt-10 mb-2 text-3xl font-bold">Videos</h1>
        <div className="border-t-2 w-[20%] border-black" />

          <div className="flex space-x-6 max-w-[1000px] border-2 p-2 rounded-xl overflow-x-scroll mt-6">
          { videos &&
            videos.map((video)=> (
              <div className='relative rounded-lg bg-gray-200 p-4 min-h-[150px] max-w-[400px]' 
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

        <button className={`${isCreateVideo ? 'hidden' : 'block'} p-2 bg-green-400 hover:bg-green-600 ease-in-out duration-300 rounded-xl mt-4`} onClick={()=> setIsCreateVideo(true)}>Add video</button>

{
  isCreateVideo
  ?
  <>
    <form onSubmit={handleCreateVideo} className="flex space-x-4 mt-8">
      <label className='my-auto'>Url link:</label>
      <input  className='rounded-md' name="video_url" type='text' value={urlLink} onChange={(e)=>setUrlLink(e.target.value)} />
    

    <div className="flex space-x-2 mt-8">
      <button onClick={()=> {setIsCreateVideo(false); setUrlLink('')} } className="p-2 rounded-xl bg-gray-200">cancel</button>
      <button type='submit' className="p-2 rounded-xl bg-green-200">send</button>
    </div>
    </form>
  </>
  : null
}
        </div>



       </div>
    </div>
  )


}
