import React, { Component } from 'react'
import './searchvideo.scss'
import TuneIcon from '@mui/icons-material/Tune';
import Button from '@mui/material/Button';

class SearchVideo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: false,


    }
    this.filterhandle = this.filterhandle.bind(this)
  }

  filterhandle() {
    this.setState({ filter: !this.state.filter })
  }

  render() {
    return (
      <div className='searchfilter'>
        <div className='filter'>
          <Button
            onClick={this.filterhandle}
            color="primary"
          >
            <TuneIcon />
            <span>FILTERS</span>
          </Button>
          {this.state.filter ?
            <div className='filter-item'>
              <div className='filter-uploaddate'>
                <h6>UPLOAD DATE</h6>
                <span>Last hour</span>
                <span>Today</span>
                <span>This week</span>
                <span>This month</span>
                <span>This year</span>

              </div>
              <div className='filter-type'>
                <h6>TYPE</h6>
                <span>Video</span>
                <span>Channel</span>
                <span>Playlist</span>
                <span>Film</span>

              </div>
              <div className='filter-duration'>
                <h6>DURATION</h6>
                <span>Under 4 minutes</span>
                <span>4-20 minutes</span>
                <span>Over 20 minutes</span>

              </div>
              <div className='filter-feature'>
                <h6>FEATURES</h6>
                <span>Live</span>
                <span>4K</span>
                <span>HD</span>
                <span>Subtitles/CC</span>
                <span>Creative Commons</span>
                <span>360</span>
                <span>VR180</span>
                <span>3D</span>
                <span>HDR</span>
                <span>Location</span>
                <span>Purchased</span>

              </div>
              <div className='filter-sort'>
                <h6>SORT BY</h6>
                <span>Relevance</span>
                <span>Upload date</span>
                <span>View count</span>
                <span>Rating</span>

              </div>
            </div>
            : null}
        </div>
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    )
  }
}

const Video = () => {
  return (
    <div className='searchcontainer'>
      <div className='searchvideo'>
        <div className='searchThemnail'>
          <img src='https://th.bing.com/th/id/R.6afc61b50aabe45a2e6c68eae2c217ba?rik=L2W0YWncfjZBVA&riu=http%3a%2f%2fwww.shutterstock.com%2fblog%2fwp-content%2fuploads%2fsites%2f5%2f2016%2f03%2ffall-trees-road-1.jpg&ehk=KA%2bzFrmYoWsdK4k7v%2fgfNkd1T2rdnNtpF5ICdLIxAeM%3d&risl=&pid=ImgRaw&r=0' alt='imageofthemnail' />
        </div>
        <div className='searchDescription'>
          <div className='searchtitle'>
            <a href=''>Imagine Dragons - Bad Liar (Lyric Video)</a>
            <div className='searchview'>

              <span>54M</span>
              <span>.</span>
              <span>4 days ago</span>

            </div>
          </div>
          <div className='searchchannel'>
            <img src='https://th.bing.com/th/id/R.6afc61b50aabe45a2e6c68eae2c217ba?rik=L2W0YWncfjZBVA&riu=http%3a%2f%2fwww.shutterstock.com%2fblog%2fwp-content%2fuploads%2fsites%2f5%2f2016%2f03%2ffall-trees-road-1.jpg&ehk=KA%2bzFrmYoWsdK4k7v%2fgfNkd1T2rdnNtpF5ICdLIxAeM%3d&risl=&pid=ImgRaw&r=0' alt='imageofthemnail' />
            <a href=''>T-Series</a>
          </div>
          <div>
            <span>rijit Singh Live MTV India Tour</span>
          </div>
          <div>
            <span>4K</span>
          </div>
        </div>
      </div>
    </div>

  )
}
export default SearchVideo