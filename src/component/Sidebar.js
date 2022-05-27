import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import RestoreRoundedIcon from '@mui/icons-material/RestoreRounded';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

function Sidebar() {
    return (
        <div className='youtube-left'>
            <div className='main-list'>
                <HomeIcon style={{ width: '30px', height: '30px', color: '#606060', padding: '0 10px' }} />
                <span className='list'>Home</span>
            </div>
            <div className='main-list  '>
                <ExploreOutlinedIcon style={{ width: '30px', height: '30px', color: '#606060', padding: '0 10px' }} />
                <span className='list'>Explore</span>
            </div>
            <div className='main-list'>
                <FavoriteBorderOutlinedIcon style={{ width: '30px', height: '30px', color: '#606060', padding: '0 10px' }} />
                <span className='list'>Shorts</span>
            </div>
            <div className='main-list underline'>
                <SubscriptionsOutlinedIcon style={{ width: '30px', height: '30px', color: '#606060', padding: '0 10px' }} />
                <span className='list'>Subscription</span>
            </div>
            <div className='main-list'>
                <VideoLibraryOutlinedIcon style={{ width: '30px', height: '30px', color: '#606060', padding: '0 10px' }} />
                <span className='list'>Library</span>
            </div>
            <div className='main-list'>
                <RestoreRoundedIcon style={{ width: '30px', height: '30px', color: '#606060', padding: '0 10px' }} />
                <span className='list'>History</span>
            </div>

            <div className='main-list'>
                <ThumbUpOutlinedIcon style={{ width: '30px', height: '30px', color: '#606060', padding: '0 10px ' }} />
                <span className='list'>Liked videos</span>
            </div>
            <div className='main-list'>
                <WatchLaterOutlinedIcon style={{ width: '30px', height: '30px', color: '#606060', padding: '0 10px' }} />
                <span className='list'>Watch Later</span>
            </div>
            <div className='main-list'>
                <SlideshowOutlinedIcon style={{ width: '30px', height: '30px', color: '#606060', padding: '0 10px' }} />
                <span className='list'>Your videos</span>
            </div>
            <div className='main-list underline'>
                <PlaylistPlayIcon style={{ width: '30px', height: '30px', color: '#606060', padding: '0 10px' }} />
                <span className='list'>Song</span>
            </div>
            <div className='subscrition'>
                <span>Subscription</span>

                <div className='subs-channel'>
                    <img src='../New folder/Tarak.jpg' alt='channel' className='sidebar-channel' />
                    <span className='channelName'>Name of channel</span>
                </div>
                <div className='subs-channel'>
                    <img src='../New folder/Tarak.jpg' alt='channel' className='sidebar-channel' />
                    <span className='channelName'>Name of channel</span>
                </div>
                <div className='subs-channel'>
                    <img src='../New folder/Tarak.jpg' alt='channel' className='sidebar-channel' />
                    <span className='channelName'>Name of channel</span>
                </div>
                <div className='subs-channel'>
                    <img src='../New folder/Tarak.jpg' alt='channel' className='sidebar-channel' />
                    <span className='channelName'>Name of channel</span>
                </div>
                <div className='subs-channel'>
                    <KeyboardArrowDownOutlinedIcon/>
                    <span className='channelName'>Show 21 mores</span>
                </div>

            </div>
        </div>
    )
}

export default Sidebar