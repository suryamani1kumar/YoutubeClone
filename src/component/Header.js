import React, {
    useRef,
    useEffect,
    useState
} from 'react'
import {
    Menu,
    Search,
    KeyboardVoice,
    VideoCallOutlined,
    NotificationsNoneOutlined,
    AccountCircle
} from '@mui/icons-material';
import './header.css';
import youtubeLogo from '../assets/YouTubelogo.png';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from './Sidebar';
import {
    showHomeMenuToggle,
    showCreateViedoToggle,
    showNotificationsToggle,
    showAccountToggle
} from '../redux/action'
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HeaderVideo from './Header/HeaderVideo.js';
import Notification from './Header/Notification.tsx';
import Account from './Header/Account.js';
import { Tooltip, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';



function Header() {
    const [searchValue, setSearchValue] = useState('')
    const [Notifications, setNotifications] = useState(false)
    const setHomeMenutoggle = useSelector((state) => state.showHomeMenu)
    const setCreateViedotoggle = useSelector((state) => state.showCreateViedo)
    // const setNotificationstoggle = useSelector((state) => state.showNotifications)
    const setAccounttoggle = useSelector((state) => state.showAccount)
    const dispatch = useDispatch()
    let Notificationref = useRef()
    const handleMenu = () => {
        dispatch(showHomeMenuToggle())
    }
    const handleVideo = () => {
        dispatch(showCreateViedoToggle())
    }

    const handleNotification = () => {
        // dispatch(showNotificationsToggle())
        setNotifications(!Notifications)

    }
    const handleAccount = () => {
        dispatch(showAccountToggle())
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (Notificationref.current && Notifications && !Notificationref.current.contains(e.target)) {
                setNotifications(false)

            }
        }
        document.addEventListener('mousedown', handleClickOutside)
    }, [Notifications])
    
    return (
        <div className='header'>
            <div className='menu'>
                <div className='header-icon' style={{ padding: '8px' }}>
                    <IconButton
                        onClick={handleMenu}
                    >
                        <Menu />
                    </IconButton>
                    {/* {
                        setHomeMenutoggle ?
                            <Minsidebar />
                            :

                            <Sidebar />

                    } */}
                </div>
                <div style={{ padding: '18px 14px 18px 16px' }}>
                    <Link to='/'>
                        <img
                            src={youtubeLogo}
                            alt='logo'
                            className='youtubelogo'
                        />
                    </Link>
                </div>
            </div>
            <div className='search'>
                <div className='searchinput'>
                    <input
                        type='text'
                        placeholder='Search'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <Tooltip title='Search'>
                        <Search />
                    </Tooltip>
                </div>
                <div className='header-icon bg-light'>
                    <Tooltip title='Search with your voice'>
                        <IconButton>
                            <KeyboardVoice />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
            <div className='header-right'>
                <div className='header-icon' >
                    <Tooltip title='Create'>
                        <IconButton
                            onClick={handleVideo}
                        >
                            <VideoCallOutlined />
                        </IconButton>
                    </Tooltip>
                    {setCreateViedotoggle ?
                        <HeaderVideo />
                        : null
                    }
                </div>
                <div className='header-icon' ref={Notificationref}>
                    <Tooltip title='Notification'>
                        <IconButton
                            onClick={handleNotification}
                        >
                            <NotificationsNoneOutlined />
                        </IconButton>
                    </Tooltip>
                    {Notifications ?
                        <Notification /> :
                        null
                    }
                </div>
                <div className='header-icon '>
                    <Tooltip title='Account'>
                        <IconButton
                            onClick={handleAccount}
                        >
                            <AccountCircle />
                        </IconButton>
                    </Tooltip>
                    {setAccounttoggle ?
                        <Account /> :
                        null
                    }
                </div>
            </div>
        </div>
    )
}

const Minsidebar = () => {
    return (
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
    )
}
export default Header