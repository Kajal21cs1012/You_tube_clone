import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import './ShowVideo.css'
function ShowVideo({vid}) {
  console.log(vid)
  return (
    <>
     <Link to={'/'}>

        <video 
        
        src={vid}
        className="video_ShowVideo"
        />
     </Link>
     <div className='video_description'>
        <div className='Chanel_logo_App'>
            <div className='fstChar_logo_App'>
                <>{vid?.Uploder?.charAt(0).toUpperCase()}</>
            </div>
        </div>
        <div className='video_details'>
            <p className='title_vid_ShowVideo'>{vid?.videoTitle}</p>
            <pre className='vid_views_UploadTime'>{vid?.Uploder}</pre>
            <pre className='vid_views_UploadTime'>
                {vid?.Views} views <div className="dot"></div> {moment(vid?.createdat).fromNow()}
            </pre>

        </div>
     </div>
    </>
  )
}

export default ShowVideo