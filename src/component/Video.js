import React from 'react'
// import  data from './Data'
import { useContext } from 'react'
import { Globalcontext } from '../context/GlobalContext'


function Video({Img,Timing,Title,ChannelName,View,Uploadtiming,id}) {
    const{data,watching}=useContext(Globalcontext)
    
    const show=()=>{
        const send={Img:Img,
            Timing: Timing,
            Title: Title,
            ChannelName:ChannelName,
            View:View,
            Uploadtiming:Uploadtiming,
            id:id

        }
        watching(send)
        console.log(data)


    }
    return (
        <div className='homepage-video'>
            <img src={Img} alt='Thumbnails ' className='videoimage'  onClick={show}/>
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
                    <div style={{display:'none'}} className='block'>
                        xxx

                    </div>


                </div>
            </div>

        </div>
    )
}

export default Video