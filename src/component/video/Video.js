import React from 'react'
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import './video.css'
import MoreVert from '@mui/icons-material/MoreVert';
// import { useDispatch } from 'react-redux';
// import { showVideo } from '../redux/action'
import { Link } from 'react-router-dom';



function Video({ Img, Timing, Title, ChannelImg, ChannelName, View, Uploadtiming, }) {



    // const dispatch = useDispatch()
    const videoHandle = () => {

        // dispatch(showVideo(Img, Title, ChannelImg, ChannelName, View, Uploadtiming,))
    }
    return (
        <div className='homepage-video'>
            {/* <Link to='/' style={{ textDecoration: 'none' }}> */}
            <div onClick={videoHandle}>
                <div className='thumbnails' >
                    <img
                        src={Img}
                        alt='Thumbnails '
                        className='videoimage'
                    />
                    <span
                        className='timing'>{Timing}</span>
                </div>
                <div className='video-description'>
                    <div className='account-channel'>
                        <img
                            src={ChannelImg}
                            alt='channel logo'
                            className='account-img'
                        />
                    </div>
                    <div className='description'>
                        <div className='title'>
                            <p>{Title}</p>
                        </div>
                        < div className='channel-name'>
                            <span>
                                {ChannelName}
                            </span>
                        </div>
                        <div className='view'>
                            <span>{View}</span>
                            <span className='dot'>.</span>
                            <span >{Uploadtiming}</span>
                        </div>
                        <div className="vertical">
                            <MoreVert />
                        </div>
                    </div>
                </div>
            </div>
            {/* </Link> */}
            <div className='block'>
                <button
                    className='video-button'
                    style={{ marginTop: '30px' }}>
                    <WatchLaterOutlinedIcon />
                    <span>WATCH LATER</span>
                </button>
                <button className='video-button'>
                    <PlaylistPlayIcon />
                    <span>ADD TO QUEUE</span>
                </button>
            </div>
        </div >
    )
}

export default Video