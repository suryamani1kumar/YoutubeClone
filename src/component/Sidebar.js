import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import RestoreRoundedIcon from '@mui/icons-material/RestoreRounded';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SensorsIcon from '@mui/icons-material/Sensors';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './sidebar.css'
import { Divider } from '@mui/material';

function Sidebar() {
    const [showMore, setShowMore] = useState(false)
    const [subscription, setSubscription] = useState(false)

    const showmorecontent = () => {
        setShowMore(!showMore)
    }
    const showmoresubscription = () => {
        setSubscription(!subscription)
    }
    return (
        <div className='sidebar'>
            <div className='sidebarContainer'>
                <div className='main-list'>
                    <HomeIcon style={{ 'marginRight': "24px" }} />

                    <span className='list'>Home</span>
                </div>
                <div className='main-list  '>
                    <ExploreOutlinedIcon
                        style={{ 'marginRight': "24px" }}
                    />
                    <span className='list'>Explore</span>
                </div>
                <div className='main-list'>
                    <FavoriteBorderOutlinedIcon
                        style={{ 'marginRight': "24px" }}
                    />
                    <span className='list'>Shorts</span>
                </div>
                <div className='main-list underline'>
                    <SubscriptionsOutlinedIcon
                        style={{ 'marginRight': "24px" }}
                    />
                    <span className='list'>Subscription</span>
                </div>
                <Divider style={{ 'marginTop': '12px', 'marginBottom': '12px' }} />
                <div className='main-list'>
                    <VideoLibraryOutlinedIcon
                        style={{ 'marginRight': "24px" }}
                    />
                    <span className='list'>Library</span>
                </div>
                <div className='main-list'>
                    <RestoreRoundedIcon
                        style={{ 'marginRight': "24px" }}
                    />
                    <span className='list'>History</span>
                </div>
                <div className='main-list'>
                    <SlideshowOutlinedIcon
                        style={{ 'marginRight': "24px" }}
                    />
                    <span className='list'>Your videos</span>
                </div>
                <div className='main-list'>
                    <WatchLaterOutlinedIcon
                        style={{ 'marginRight': "24px" }}
                    />
                    <span className='list'>Watch Later</span>
                </div>
                <div className='main-list'>
                    <ThumbUpOutlinedIcon
                        style={{ 'marginRight': "24px" }}
                    />
                    <span className='list'>Liked videos</span>
                </div>

                <div className='main-list'
                    onClick={showmorecontent}

                >
                    {showMore ?
                        <><PlaylistPlayIcon
                            style={{ 'marginRight': "24px" }}
                        />
                            <span className='list'>Liked videos</span></> :
                        <>
                            <KeyboardArrowDownIcon
                                style={{ 'marginRight': "24px" }}
                            />
                            <span className='list'>Show more</span>
                        </>
                    }
                </div>

                {showMore ?
                    <>
                        <div className='main-list'>
                            <PlaylistPlayIcon
                                style={{ 'marginRight': "24px" }} />
                            <span className='list'>Liked videos</span>
                        </div>
                        <div className='main-list' onClick={() => setShowMore(false)}>
                            <KeyboardArrowUpIcon style={{ 'marginRight': "24px" }} />
                            <span className='list'>Show fewer</span>
                        </div>
                    </>
                    : null
                }
                <Divider style={{ 'marginTop': '12px', 'marginBottom': '12px' }} />

                <h6 style={{ paddingLeft: '30px', }}>SUBSCRIPTION</h6>
                <div className='main-list'>
                    <img
                        src='https://picsum.photos/24/24'
                        alt='subcription'
                        style={{ marginRight: "24px", borderRadius: '50%' }}
                    />
                    <span className='list'>Channel Name</span>
                </div>
                <div className='main-list'>
                    <img
                        src='https://picsum.photos/24/24'
                        alt='subcription'
                        style={{ marginRight: "24px", borderRadius: '50%' }}
                    />
                    <span className='list'>Channel Name</span>
                </div>
                <div className='main-list'>
                    <img
                        src='https://picsum.photos/24/24'
                        alt='subcription'
                        style={{ marginRight: "24px", borderRadius: '50%' }}
                    />
                    <span className='list'>Channel Name</span>
                </div>
                <div className='main-list'>
                    <img
                        src='https://picsum.photos/24/24'
                        alt='subcription'
                        style={{ marginRight: "24px", borderRadius: '50%' }}
                    />
                    <span className='list'>Channel Name</span>
                </div>
                <div className='main-list'>
                    <img
                        src='https://picsum.photos/24/24'
                        alt='subcription'
                        style={{ marginRight: "24px", borderRadius: '50%' }}
                    />
                    <span className='list'>Channel Name</span>
                </div>
                <div className='main-list'>
                    <img
                        src='https://picsum.photos/24/24'
                        alt='subcription'
                        style={{ marginRight: "24px", borderRadius: '50%' }}
                    />
                    <span className='list'>Channel Name</span>
                </div>
                <div className='main-list'>
                    <img
                        src='https://picsum.photos/24/24'
                        alt='subcription'
                        style={{ marginRight: "24px", borderRadius: '50%' }}
                    />
                    <span className='list'>Channel Name</span>
                </div>
                <div className='main-list' onClick={showmoresubscription}>
                    <KeyboardArrowUpIcon style={{ 'marginRight': "24px" }} />
                    <span className='list'>Show 9 more</span>
                </div>
                {subscription ?
                    <div className='main-list'>
                        <img
                            src='https://picsum.photos/24/24'
                            alt='subcription'
                            style={{ marginRight: "24px", borderRadius: '50%' }}
                        />
                        <span className='list'>Channel Name</span>
                    </div>
                    : null
                }
                <Divider style={{ 'marginTop': '12px', 'marginBottom': '12px' }} />

                <div className='main-list' >
                    <SensorsIcon style={{ 'marginRight': "24px" }} />
                    <span className='list'>Live</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar