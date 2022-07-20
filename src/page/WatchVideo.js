import React, { Component } from 'react'
import styled from 'styled-components';
import LeftSideVideo from './component/LeftSideVideo';
import RightSideVideo from './component/RightSideVideo';
// import axios from 'axios'



class WatchVideo extends Component {
    // componentDidMount() {
    //     axios.get('http://localhost:3001/watch')
    //       .then(data => console.log(data.data.data))
    //   }


    render() {
        return (
            <WatchMaincontainer>
                <Watchfirstcontainer>
                    <RightSideVideo />
                </Watchfirstcontainer>
                <Watchsecondcontainer>
                    <LeftSideVideo />
                    {/* <LeftSideVideo /> */}
                </Watchsecondcontainer>
            </WatchMaincontainer>
        )
    }
}

const WatchMaincontainer = styled.div`
margin:0 50px;
display:flex;

`
const Watchfirstcontainer = styled.div`
padding:24px 24px 0 24px;
width:960px;

`
const Watchsecondcontainer = styled.div`
padding:24px 24px 0 0;
width:430px;

`


export default WatchVideo;

