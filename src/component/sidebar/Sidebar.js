import React, { useState } from 'react'
import {
    Home,
    ExploreOutlined,
    FavoriteBorderOutlined,
    SubscriptionsOutlined,
    KeyboardArrowDown,
    KeyboardArrowUp,
    VideoLibraryOutlined,
    SlideshowOutlined,
    RestoreRounded,
    PlaylistPlay,
    WatchLaterOutlined,
    ThumbUpOutlined,
    Sensors
} from '@mui/icons-material';

// import AddRoadIcon from '@mui/icons-material/AddRoad';
// import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
// import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
// import YouTubeIcon from '@mui/icons-material/YouTube';
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
                    <Home style={{ 'marginRight': "24px" }} />

                    <span className='list'>Home</span>
                </div>
                <div className='main-list  '>
                    <ExploreOutlined
                        style={{ 'marginRight': "24px" }}
                    />
                    <span className='list'>Explore</span>
                </div>
                <div className='main-list'>
                    <FavoriteBorderOutlined
                        style={{ 'marginRight': "24px" }}
                    />
                    <span className='list'>Shorts</span>
                </div>
                <div className='main-list underline'>
                    <SubscriptionsOutlined
                        style={{ 'marginRight': "24px" }}
                    />
                    <span className='list'>Subscription</span>
                </div>
                <Divider style={{ 'marginTop': '12px', 'marginBottom': '12px' }} />
                <div className='main-list'>
                    <VideoLibraryOutlined
                        style={{ 'marginRight': "24px" }}
                    />
                    <span className='list'>Library</span>
                </div>
                <div className='main-list'>
                    <RestoreRounded
                        style={{ 'marginRight': "24px" }}
                    />
                    <span className='list'>History</span>
                </div>
                <div className='main-list'>
                    <SlideshowOutlined
                        style={{ 'marginRight': "24px" }}
                    />
                    <span className='list'>Your videos</span>
                </div>
                <div className='main-list'>
                    <WatchLaterOutlined
                        style={{ 'marginRight': "24px" }}
                    />
                    <span className='list'>Watch Later</span>
                </div>
                <div className='main-list'>
                    <ThumbUpOutlined
                        style={{ 'marginRight': "24px" }}
                    />
                    <span className='list'>Liked videos</span>
                </div>

                <div className='main-list'
                    onClick={showmorecontent}

                >
                    {showMore ?
                        <><PlaylistPlay
                            style={{ 'marginRight': "24px" }}
                        />
                            <span className='list'>Liked videos</span></> :
                        <>
                            <KeyboardArrowDown
                                style={{ 'marginRight': "24px" }}
                            />
                            <span className='list'>Show more</span>
                        </>
                    }
                </div>

                {showMore ?
                    <>
                        <div className='main-list'>
                            <PlaylistPlay
                                style={{ 'marginRight': "24px" }} />
                            <span className='list'>Liked videos</span>
                        </div>
                        <div className='main-list' onClick={() => setShowMore(false)}>
                            <KeyboardArrowUp style={{ 'marginRight': "24px" }} />
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
                    <KeyboardArrowUp style={{ 'marginRight': "24px" }} />
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
                    <Sensors style={{ 'marginRight': "24px" }} />
                    <span className='list'>Live</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar