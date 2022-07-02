import React, { Component } from 'react'
import styled from 'styled-components';
import { Tooltip } from '@mui/material';
import { FullscreenRounded, CropLandscapeRounded, Settings, SkipNext, VolumeUp, InfoOutlined } from '@mui/icons-material';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';

class RightSideVideo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullscreen: {
                color: '#fff',
                fontSize: '35px'
            }
        }

    }
    render() {
        return (
            <Watchv>
                <img src='https://th.bing.com/th/id/R.6afc61b50aabe45a2e6c68eae2c217ba?rik=L2W0YWncfjZBVA&riu=http%3a%2f%2fwww.shutterstock.com%2fblog%2fwp-content%2fuploads%2fsites%2f5%2f2016%2f03%2ffall-trees-road-1.jpg&ehk=KA%2bzFrmYoWsdK4k7v%2fgfNkd1T2rdnNtpF5ICdLIxAeM%3d&risl=&pid=ImgRaw&r=0' />
                <MediaControl>
                    <div>

                        <Tooltip
                            title='Mute (m)'
                            placement="top"
                        >
                            <VolumeUp sx={{ color: '#fff', fontSize: '25px' }} />
                        </Tooltip>

                        <Tooltip
                            title=''
                            placement="top"
                        >
                            <SkipNext sx={{ color: '#fff', fontSize: '30px' }} />
                        </Tooltip>
                    </div>
                    <div>
                        <Tooltip
                            title='abcd'
                            placement="top"
                        >
                            <InfoOutlined sx={{ color: '#fff', fontSize: '22px' }} />
                        </Tooltip>
                        <Tooltip
                            title='Auto-play is on'
                            placement="top"
                        >
                            <ToggleOffOutlinedIcon sx={{ color: '#fff', fontSize: '28px' }} />
                        </Tooltip>
                        <Tooltip
                            title='Full Screen (f)'
                            placement="top"
                        >
                            <FullscreenRounded sx={this.state.fullscreen} />
                        </Tooltip>
                        <Tooltip
                            title='Cinema mode (t)'
                            placement="top"
                        >
                            <CropLandscapeRounded sx={{ color: '#fff', fontSize: '28px' }} />
                        </Tooltip>
                        <Settings sx={{ color: '#fff', fontSize: '25px' }} />
                    </div>




                </MediaControl>
            </Watchv>
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
display:flex;
justify-content: space-around;;

`


export default RightSideVideo;