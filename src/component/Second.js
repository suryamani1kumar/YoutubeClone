import React from 'react'
// import { Globalcontext } from '../context/GlobalContext'
import './second.css'
import Video from './Video'
import data from './Data'



function Second() {
  // const{data}=useContext(Globalcontext)


  return (
    <div className='second'>
      {/* {watching} */}

      {
        data.map((aaray) => {
          const { Img, Timing, Title, ChannelName, View, Uploadtiming, id } = aaray
          return (
            <Video
              Img={Img}
              Timing={Timing}
              Title={Title}
              ChannelName={ChannelName}
              View={View}
              Uploadtiming={Uploadtiming}
              key={id}
            />
          )

        })
      }


    </div>
  )
}

export default Second