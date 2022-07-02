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
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='left'>
                <div className='main-list'>
                    <HomeIcon />
                    <span className='list'>Home</span>
                </div>
                <div className='main-list  '>
                    <ExploreOutlinedIcon />
                    <span className='list'>Explore</span>
                </div>
                <div className='main-list'>
                    <FavoriteBorderOutlinedIcon />
                    <span className='list'>Shorts</span>
                </div>
                <div className='main-list underline'>
                    <SubscriptionsOutlinedIcon />
                    <span className='list'>Subscription</span>
                </div>
                <div className='main-list'>
                    <VideoLibraryOutlinedIcon />
                    <span className='list'>Library</span>
                </div>
                <div className='main-list'>
                    <RestoreRoundedIcon />
                    <span className='list'>History</span>
                </div>

                <div className='main-list'>
                    <ThumbUpOutlinedIcon />
                    <span className='list'>Liked videos</span>
                </div>
                <div className='main-list'>
                    <WatchLaterOutlinedIcon />
                    <span className='list'>Watch Later</span>
                </div>
                <div className='main-list'>
                    <SlideshowOutlinedIcon />
                    <span className='list'>Your videos</span>
                </div>
                <div className='main-list underline'>
                    <PlaylistPlayIcon />
                    <span className='list'>Song</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar