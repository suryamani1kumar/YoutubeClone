import React from 'react'
import './youtubehomepage.css'
import Video from './Video';
import data from './Data'
import Sidebar from './Sidebar';
// import { Link } from 'react-router-dom';

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
        {/* <Link to='second'> */}

        {data.map((dates) => {
          const { Img, Timing, Title,ChannelImg, ChannelName, View, Uploadtiming, id } = dates
          return (
            <Video
              Img={Img}
              Timing={Timing}
              Title={Title}
              ChannelImg={ChannelImg}
              ChannelName={ChannelName}
              View={View}
              Uploadtiming={Uploadtiming}
              key={id}
            />
          )


        })}
        {/* </Link> */}



      </div>

      {/* </div> */}

    </div>
  )
}

export default Youtubehomepage