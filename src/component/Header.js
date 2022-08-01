import React, { useRef, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import './header.css';
import youtubeLogo from '../assets/YouTubelogo.png';
import { useSelector, useDispatch } from 'react-redux';
// import Sidebar from './Sidebar';
import {
    showHomeMenuToggle,
    showCreateViedoToggle,
    showNotificationsToggle,
    showAccountToggle
} from '../redux/action'
// import HomeIcon from '@mui/icons-material/Home';
// import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
// import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HeaderVideo from './Header/HeaderVideo.js';
import Notification from './Header/Notification.tsx';
import Account from './Header/Account.js';
import { Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';



function Header() {
    // const setHomeMenutoggle = useSelector((state) => state.showHomeMenu)
    const setCreateViedotoggle = useSelector((state) => state.showCreateViedo)
    const setNotificationstoggle = useSelector((state) => state.showNotifications)
    const setAccounttoggle = useSelector((state) => state.showAccount)
    const dispatch = useDispatch()
    const ref = useRef()
    const handleMenu = () => {
        dispatch(showHomeMenuToggle())
    }
    const handleVideo = () => {
        dispatch(showCreateViedoToggle())
    }

    const handleNotification = () => {
        dispatch(showNotificationsToggle())
    }
    const handleAccount = () => {
        dispatch(showAccountToggle())
    }
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                alert("You clicked outside of me!");
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);


    return (
        <div className='header'>
            <div className='menu'>
                <div className='header-icon'>
                    <MenuIcon
                        onClick={handleMenu}
                    />
                </div>
                <Link to='/'>
                    <img
                        src={youtubeLogo}
                        alt='logo'
                        className='youtubelogo' />
                    <p className='hidden'>YouTube Home</p>
                </Link>
                {/* {setHomeMenutoggle ?
                    <div style={{ position: 'absolute', top: "50px" }}>
                        <div
                            className='d-flex flex-column mb-1'>
                            <HomeIcon />
                            <span>Home</span>
                        </div>
                        <div
                            className='d-flex flex-column mb-1'>
                            <ExploreOutlinedIcon />
                            <span>Explore</span>
                        </div>
                        <div
                            className='d-flex flex-column mb-1'>
                            <FavoriteBorderOutlinedIcon />
                            <span>Shorts</span>
                        </div>
                        <div
                            className='d-flex flex-column mb-1'>
                            <SubscriptionsOutlinedIcon />
                            <span>Subscriptions</span>
                        </div>
                        <div
                            className='d-flex flex-column mb-1'>
                            <VideoLibraryOutlinedIcon />
                            <span>Library</span>
                        </div>
                    </div>
                    :
                    <div style={{ position: 'absolute', top: "50px",}}>
                        <Sidebar />
                    </div>
                } */}
            </div>
            <div className='search'>
                <div className='searchinput'>
                    <input type='text' placeholder='Search' />
                    <SearchIcon
                    />
                    <p className='hidden'>Search</p>
                </div>
                <div className='header-icon bg-light'>
                    <KeyboardVoiceIcon
                        className='voiceIcon' />
                    <p className='hidden'>Search with your voice</p>

                </div>
            </div>
            <div className='header-right'>
                {/* <div className='header-icon'
                >
                    <VideoCallOutlinedIcon
                        onClick={handleVideo}
                    />
                    {setCreateViedotoggle ?
                        <HeaderVideo />
                        : null
                    }
                    <p
                        className='hidden'
                        style={{ width: '70px', position: "absolute", left: "-18px" }}
                    >Create</p>
                </div> */}
                <div className='header-icon'>
                    <Tooltip title='Create'>
                        <VideoCallOutlinedIcon
                            onClick={handleVideo}
                        />


                    </Tooltip>
                    {setCreateViedotoggle ?
                        <HeaderVideo />
                        : null
                    }

                </div>

                <div className='header-icon'>
                    <NotificationsNoneOutlinedIcon
                        onClick={handleNotification} />
                    <p
                        className='hidden'
                        style={{ width: '100px', position: "absolute", left: '-28px' }}
                    >Notifications</p>
                    {setNotificationstoggle ?
                        <Notification /> :
                        null
                    }
                </div>
                <div className='header-icon '>
                    <AccountCircleIcon
                        onClick={handleAccount} />
                    {
                        setAccounttoggle ?
                            <Account /> :
                            null
                    }
                </div>
            </div>

        </div>
    )
}

export default Header