import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import './header.css';
// import Youtubehomepage from './youtubehomepage';

function Header() {
    return (
        <div className='header'>
            <div className='menu'>
                <div className='header-icon'>
                    <MenuIcon className='menuicon' style={{ width: '30px', height: '30px', color: '#606060' }} />
                </div>
                <img src='../New folder/YouTubelogo.jpg' alt='logo' className='youtubelogo' />
            </div>

            <div className='search'>
                <div className='searchinput'>
                    <input type='text' placeholder='Search' />
                    <SearchIcon className='searchicon' style={{ color: '#606060' }} />
                </div>
                <div className='header-icon bg-light'>
                    <KeyboardVoiceIcon className='voiceIcon' />

                </div>
            </div>

            <div className='header-right'>
                <div className='header-icon'>
                    <VideoCallOutlinedIcon className='videocall' style={{ width: '30px', height: '30px', color: '#606060' }} />
                </div>
                <div className='header-icon'>
                    <NotificationsNoneOutlinedIcon className='notification' style={{ width: '30px', height: '30px', color: '#606060' }} />
                </div>
                <div className='header-icon'>
                    <AccountCircleIcon className='account' style={{ width: '30px', height: '30px', color: '#606060' }} />
                </div>
            </div>
            {/* <Youtubehomepage/> */}
        </div>
    )
}

export default Header