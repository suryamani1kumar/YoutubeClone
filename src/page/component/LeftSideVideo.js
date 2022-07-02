import React, { Component } from 'react'
import styled from 'styled-components';
import { Tooltip } from '@mui/material';

class LeftSideVideo extends Component {
    render() {
        return (
            <Videocontainer>
                <Thumbnails>
                    <img src='https://th.bing.com/th/id/R.6afc61b50aabe45a2e6c68eae2c217ba?rik=L2W0YWncfjZBVA&riu=http%3a%2f%2fwww.shutterstock.com%2fblog%2fwp-content%2fuploads%2fsites%2f5%2f2016%2f03%2ffall-trees-road-1.jpg&ehk=KA%2bzFrmYoWsdK4k7v%2fgfNkd1T2rdnNtpF5ICdLIxAeM%3d&risl=&pid=ImgRaw&r=0' />
                </Thumbnails>
                <Descriptionvideo>
                    <span>Arijit Singh Live MTV India Tour
                        | Mumbai Highlight | 1080...
                    </span>
                    <Tooltip
                        title='Aniruddha Takle'
                        placement="top"
                    >
                        <span>Aniruddha Takle</span>
                    </Tooltip>

                    <div>
                        <span>30M .</span>
                        <span>4 years ago</span>
                    </div>
                </Descriptionvideo>
            </Videocontainer>
        )
    }
}

const Videocontainer = styled.div`
display:flex;
margin-bottom:8px;

`
const Thumbnails = styled.div`
width:170px;
height:95px;
img{
    width:170px;
    height:95px;
}

`
const Descriptionvideo = styled.div`
padding-left:10px;
display:flex;
flex-direction:column;

`

export default LeftSideVideo;