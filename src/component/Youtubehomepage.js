import React, { useEffect } from 'react'
import './youtubehomepage.css'
import Video from './Video';
// import data from './Data'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setvideo } from '../redux/action'




function Youtubehomepage() {
  const daata = useSelector((state) => state.data)
  const dispatch = useDispatch()
  const getvideo = () => {
    axios.get('http://localhost:3001/video')
      .then(data => dispatch((setvideo(data.data.data))))
  }
  useEffect(() => {
    getvideo();

  }, [])

  return (
    <div className='youtubehome'>
      <div className='youtube-left'>
        {/* <Sidebar /> */}
      </div>


      <div className='youtube-right'>


        <div className={'youtube-right'}>
          {daata.map((dates) => {
            const { Img,
              Timing,
              Title,
              ChannelImg,
              ChannelName,
              View,
              Uploadtiming,
              id } = dates
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
        </div>

      </div>

    </div>
  )
}


export default Youtubehomepage