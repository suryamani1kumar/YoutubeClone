import React from 'react'
// import  data from './Data'
import { useContext } from 'react'
import { Globalcontext } from '../context/GlobalContext'
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import './video.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreVert from '@mui/icons-material/MoreVert';


function Video({ Img, Timing, Title,ChannelImg, ChannelName, View, Uploadtiming, id }) {
    const { data, watching } = useContext(Globalcontext)

    const show = () => {
        const send = {
            Img: Img,
            Timing: Timing,
            Title: Title,
            ChannelName: ChannelName,
            View: View,
            Uploadtiming: Uploadtiming,
            id: id

        }
        watching(send)
        console.log(data)


    }
    return (
        <div className='homepage-video'>
            <div className='thumbnails'>
                <img src={Img} alt='Thumbnails ' className='videoimage' onClick={show} />
                <span className='timing'>{Timing}</span>
            </div>

            <div className='video-description'>

                <div className='account-channel'>
                    <img src={ChannelImg} alt='channel logo' className='account-img' />
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
            <div className='block'>

                <button className='video-button' style={{ marginTop: '30px' }}>
                    <WatchLaterOutlinedIcon style={{ width: '25px', height: '25px', color: '#606060', padding: '0 10px' }} />
                    <span>WATCH LATER</span>
                </button>
                <button className='video-button'>
                    <PlaylistPlayIcon style={{ width: '28px', height: '28px', color: '#606060', padding: '0 10px' }} />
                    <span>ADD TO QUEUE</span>

                </button>



            </div>

        </div>
    )
}

export default Video