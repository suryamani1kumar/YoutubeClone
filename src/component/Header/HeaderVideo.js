import React from 'react'
import { SlideshowOutlined, Sensors } from '@mui/icons-material';
import styled from "styled-components";

function HeaderVideo() {
    return (
        <Videocreatecontainer>
            <Uploadvideo>
                <div>
                    <SlideshowOutlined />
                    <span>Upload video</span>
                </div>
            </Uploadvideo>

            <GOlive>
                <div>
                    <Sensors />
                    <span>GO live</span>
                </div>
            </GOlive>

        </Videocreatecontainer>
    )
}

export default HeaderVideo

const Videocreatecontainer = styled.div`
width:180px;
position:absolute;
top:30px;
border-left:1px solid #606060;
border-bottom:1px solid #606060;
height:96px
padding:7px 0;

`
const Uploadvideo = styled.div`
padding:0 36px 0 16px;
// border:1px solid transparent;
div{
height:40px;
}
&:hover{
    border:1px solid red;
}
`
const GOlive = styled(Uploadvideo)`
`