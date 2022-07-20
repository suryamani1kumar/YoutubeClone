import React, { Component } from 'react';
// import { connect } from 'react-redux';
import styled from 'styled-components';
import { Tooltip } from '@mui/material';
import { FullscreenRounded, CropLandscapeRounded, Settings, SkipNext, VolumeUp, InfoOutlined } from '@mui/icons-material';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import PictureInPictureAltIcon from '@mui/icons-material/PictureInPictureAlt';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import Slider from '@mui/material/Slider';
import LeftSideVideo from './LeftSideVideo';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

// import { showSettingToggle } from '../../redux/action';



class RightSideVideo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showSetting: false,
            volumeButton: true,
            playButton: false,
            commentInput: "",
            fullscreen: {
                color: '#fff',
                fontSize: '35px'
            },
        }

        this.handleInput = this.handleInput.bind(this)
        this.settingHandle = this.settingHandle.bind(this)
        this.volumehandle = this.volumehandle.bind(this)
        this.playButtonhandle = this.playButtonhandle.bind(this)

    }

    handleInput = (event) => {
        this.setState({ commentInput: event.target.value })

    }

    settingHandle = () => {
        this.setState({
            showSetting: !this.state.showSetting
        })
    }

    volumehandle = () => {
        this.setState({
            volumeButton: !this.state.volumeButton
        })
    }
    playButtonhandle() {
        this.setState({
            playButton: !this.state.playButton
        })
    }



    render() {

        return (
            <>
                <Watchv>
                    <img src='https://th.bing.com/th/id/R.6afc61b50aabe45a2e6c68eae2c217ba?rik=L2W0YWncfjZBVA&riu=http%3a%2f%2fwww.shutterstock.com%2fblog%2fwp-content%2fuploads%2fsites%2f5%2f2016%2f03%2ffall-trees-road-1.jpg&ehk=KA%2bzFrmYoWsdK4k7v%2fgfNkd1T2rdnNtpF5ICdLIxAeM%3d&risl=&pid=ImgRaw&r=0' alt='imageofthemnail'/>
                    <MediaControl>
                        <div>
                            <button onClick={this.playButtonhandle}>
                                <Tooltip
                                    title=''
                                    placement="top"
                                >
                                    {this.state.playButton ?
                                        <PauseIcon sx={{ color: '#fff', fontSize: '25px' }} /> :
                                        <PlayArrowIcon sx={{ color: '#fff', fontSize: '25px' }} />}


                                    {/* <SkipPreviousIcon sx={{ color: '#fff', fontSize: '30px' }} /> */}
                                </Tooltip>

                            </button>
                            <button>
                                <Tooltip
                                    title={<LeftSideVideo />}
                                    placement="top"
                                >
                                    <SkipNext sx={{ color: '#fff', fontSize: '30px' }} />
                                </Tooltip>
                            </button>
                            <button onClick={this.volumehandle}>
                                <Tooltip title='Mute (m)' placement="top" >
                                    {this.state.volumeButton ?
                                        <VolumeUp sx={{ color: '#fff', fontSize: '25px' }} />
                                        : <VolumeOffIcon sx={{ color: '#fff', fontSize: '25px' }} />
                                    }
                                </Tooltip>


                            </button>
                            <span>
                                <Slider />
                            </span>


                        </div>
                        <div>
                            <button>
                                <Tooltip
                                    title='abcd'
                                    placement="top"
                                >
                                    <InfoOutlined sx={{ color: '#fff', fontSize: '22px' }} />
                                </Tooltip>
                            </button>
                            <button>
                                <Tooltip
                                    title='Auto-play is on'
                                    placement="top"
                                >
                                    <ToggleOffOutlinedIcon sx={{ color: '#fff', fontSize: '28px' }} />
                                </Tooltip>
                            </button>
                            <button>
                                <Tooltip
                                    title='Subtitles /close caption unavailable'
                                    placement="top"
                                >
                                    <SubtitlesIcon sx={{ color: '#fff', }} />
                                </Tooltip>
                            </button>
                            <button onClick={this.settingHandle} >
                                <Tooltip
                                    title='Settings'
                                    placement="top">
                                    <Settings sx={{ color: '#fff', fontSize: '25px' }} />
                                </Tooltip>
                                {this.state.showSetting
                                    ? null
                                    : <Setting />}
                            </button>

                            <button>
                                <Tooltip
                                    title='MiniPlayer (M)'
                                    placement="top"
                                >
                                    <PictureInPictureAltIcon sx={{ color: '#fff', }} />
                                </Tooltip>
                            </button>
                            <button>
                                <Tooltip
                                    title='Cinema mode (t)'
                                    placement="top"
                                >
                                    <CropLandscapeRounded sx={{ color: '#fff', fontSize: '28px' }} />
                                </Tooltip>
                            </button>
                            <button>
                                <Tooltip
                                    title='Full Screen (f)'
                                    placement="top"
                                >
                                    <FullscreenRounded sx={this.state.fullscreen} />
                                </Tooltip>
                            </button>
                        </div>
                    </MediaControl>

                </Watchv>
                <Comment>
                    <input
                        type='text'
                        placeholder='Add a comment...'
                        value={this.state.commentInput}
                        onChange={this.handleInput}
                    />
                </Comment>

            </>
        )
    }
}
class Setting extends Component {
    render() {
        return (
            <Settingcontainer>
                <button>
                    <span>Annotations</span>
                    <span>

                    </span>
                </button>
                <button>
                    <span>
                        playBack speed
                    </span>
                    <span>
                        Normal
                        <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                </button>
                <button>
                    <span>
                        Quality
                    </span>
                    <span>
                        Auto
                        <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                </button>
            </Settingcontainer>
        )
    }
}

const Watchv = styled.div`
position:relative;
img{
    width:100%;
}
`

const MediaControl = styled.div`
position:absolute;
bottom:10px;
left:0;
width:100%;
div{
    float:left;
    padding:0 10px;
    button{
        border:none;
        background:transparent;
    }
    &:last-child{
        float:right;
    }
    
    }

`
const Comment = styled.div`
margin-top:12px;
input{
    width:100%;
    
}
`
const Settingcontainer = styled.div`
position:absolute;
bottom:0;
right:0;
width:250px;
height:150px;
background:black;
opacity:.7;

button{
    color:white;
}
`

// const mapStateToProps = (state) => {
//     return {
//         showSetting: state.showSetting
//     }
// }

// const mapDispatchToProps = () => {
//     return {
//         showSettingToggle: showSettingToggle
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(RightSideVideo);
export default RightSideVideo;