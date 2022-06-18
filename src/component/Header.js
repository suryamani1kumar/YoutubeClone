import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import './header.css';
// import Youtubehomepage from './youtubehomepage';
import Sidebar from './Sidebar';

function Header() {
    const [toggle, setToggle] = useState(false)
    const [toggle1, setToggle1] = useState(false)

    return (
        <div className='header'>
            <div className='menu'>
                <div className='header-icon'>
                    <MenuIcon className='menuicon' style={{ width: '25px', height: '25px', color: '#606060' }} onClick={() => setToggle(!toggle)} />

                </div>
                <img src='../New folder/YouTubelogo.jpg' alt='logo' className='youtubelogo' />
                <p className='hidden'>YouTube Home</p>
                {
                    toggle ? <div className='toogle'>xxx</div> : <Sidebar/>
                }

            </div>

            <div className='search'>
                <div className='searchinput'>
                    <input type='text' placeholder='Search' />
                    <SearchIcon className='searchicon' style={{ color: '#606060' }} />
                    <p className='hidden'>Search</p>
                </div>
                <div className='header-icon bg-light'>
                    <KeyboardVoiceIcon className='voiceIcon' />
                    <p className='hidden'>Search with your voice</p>

                </div>
            </div>

            <div className='header-right'>
                <div className='header-icon'>
                    <VideoCallOutlinedIcon className='videocall' style={{ width: '25px', height: '25px', color: '#606060' }} onClick={() => setToggle1(!toggle1)} />
                    <p className='hidden' style={{ width: '80px', position: "absolute", left: "-18px" }} >Create</p>
                    {toggle1 ? <div>ddd</div> : null}
                </div>
                <div className='header-icon'>
                    <NotificationsNoneOutlinedIcon className='notification' style={{ width: '25px', height: '25px', color: '#606060' }} />
                    <p className='hidden' style={{ width: '100px', position: "absolute", left: '-28px' }}>Notifications</p>
                </div>
                <div className='header-icon'>
                    <AccountCircleIcon className='account' style={{ width: '25px', height: '25px', color: '#606060' }} />
                </div>
            </div>
            {/* <Youtubehomepage/> */}
        </div>
    )
}

export default Header