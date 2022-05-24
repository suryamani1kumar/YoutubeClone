import React from 'react'
import './youtubehomepage.css'
import Video from './Video';
import data from './Data'
import Sidebar from './Sidebar';

function Youtubehomepage() {
  return (
    <div className='youtubehome'>
      <div className='youtube-left'>
        <Sidebar />
      </div>
      {/* <div className='video-section'> */}
        {/* <div className='home-list' >
          <span className='items'>All</span>
          <span className='items'>Music</span>
          <span className='items'>Live</span>
          <span className='items'>T-series</span>
          <span className='items'>Arijit Singh</span>
          <span className='items'>Love Song</span>
          <span className='items'>Sitcoms</span>
          <span className='items'>Yesh</span>
          <span className='items'>Comedies</span>
          <span className='items'>Tamil Cinema</span>
          <span className='items'>Gaming</span>
          <span className='items'>Trailers</span>
          <span className='items'>Cricket</span>
          <span className='items'>Mantras</span>
        </div> */}
        <div className='youtube-right'>

          {data.map((dates) => {
            const { Img, Timing, Title, ChannelName, View, Uploadtiming } = dates
            return (
              <Video
                Img={Img}
                Timing={Timing}
                Title={Title}
                ChannelName={ChannelName}
                View={View}
                Uploadtiming={Uploadtiming}
              />
            )


          })}



        </div>

      {/* </div> */}

    </div>
  )
}

export default Youtubehomepage