import React, { useContext } from 'react'
import { Globalcontext } from '../context/GlobalContext'
import './second.css'
import Video from './Video'



function Second() {
  const{data}=useContext(Globalcontext)
   
    
  return (
    <div className='second'>
      
      {
        data.map((aaray)=>{
          const{Img,Timing,Title,ChannelName,View,Uploadtiming}=aaray
          return(
            <Video
          Img={Img}
          Timing={Timing}
          Title={Title}
          ChannelName={ChannelName}
          View={View}
          Uploadtiming={Uploadtiming}
          />
          )
          
        })
      }

        
    </div>
  )
}

export default Second