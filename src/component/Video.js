import React from 'react'
// import  data from './Data'


function Video({Img,Timing,Title,ChannelName,View,Uploadtiming}) {
    return (
        <div className='homepage-video'>
            <img src={Img} alt='Thumbnails ' className='videoimage' />
            <span className='timing'>{Timing}</span>
            <div className='video-description'>
                <div>
                    <div className='account-channel'>
                        <img src='../New folder/channellogo.jpg' alt='channel logo' className='account-img' />
                    </div>

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
                        <span>{Uploadtiming}</span>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Video