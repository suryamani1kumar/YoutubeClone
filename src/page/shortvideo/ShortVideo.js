import React, { useState } from 'react'
import './shortvideo.scss'
import { ThumbDown, ThumbUp, InsertComment } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons'
import MoreVert from '@mui/icons-material/MoreVert';
import { IconButton } from '@mui/material';
import { Tooltip } from '@mui/material';
import Popover from '@mui/material/Popover';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import { VolumeOff, VolumeUp, PlayArrow, Pause } from '@mui/icons-material';


function ShortVideo() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [Volume, setVolume] = useState(false)
    const [pause, setpause] = useState(true)
    const [subcribe, setSubcribe] = useState(true)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = anchorEl ? 'simple-popover' : undefined;

    return (
        <div className='shortvideopage'>
            <div className='shortvideocontainer'>
                <div className='shortvideo'>
                    <div>
                        <IconButton onClick={() => setVolume(!Volume)}>
                            {Volume ? <VolumeOff /> : <VolumeUp />}
                        </IconButton>

                        <IconButton onClick={() => setpause(!pause)}>
                            {pause ? <Pause /> : <PlayArrow />}
                        </IconButton>
                    </div>
                    <img src='https://picsum.photos/352/626' />
                    <div>
                        <div>

                        </div>
                        <div>
                            <div>
                                <a href=''>
                                    <img src='https://picsum.photos/352/626' alt='channel-img' width='35px' height='35px' />
                                </a>
                                <a href=''>Random Text channel</a>
                            </div>
                            <button style={subcribe ? { background: 'red' } : { background: 'gray' }}
                                onClick={() => { setSubcribe(!subcribe) }}
                            >SUBCRIBE</button>
                        </div>
                    </div>

                </div>
                <div className='shortvideobutton'>
                    <div style={{ height: '303px' }}>
                        <IconButton onClick={handleClick}>
                            <MoreVert />

                        </IconButton>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <div style={{ width: '185px', height: '124px' }}>
                                <div

                                >
                                    <FormatAlignLeftIcon />
                                    <span>Description</span>
                                </div>
                                <div>
                                    <OutlinedFlagIcon />
                                    <span>Report</span>
                                </div>
                                <div>
                                    <AnnouncementOutlinedIcon />
                                    <span>Send Feedback</span>
                                </div>
                            </div>
                        </Popover>

                    </div>

                    <div style={{ height: '161px' }}>
                        <Tooltip title='I like this' placement='left'>
                            <IconButton>
                                <ThumbUp />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='I dislike this' placement='left'>
                            <IconButton >
                                <ThumbDown />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <div style={{ height: '80px' }}>
                        <Tooltip title='Comments' placement='left'>
                            <IconButton >
                                <InsertComment />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <div style={{ height: '80px' }}>
                        <Tooltip title='Share' placement='left'>
                            <IconButton >
                                <FontAwesomeIcon icon={faShare} />

                            </IconButton>

                        </Tooltip>
                        share
                    </div>






                </div>

            </div>
        </div>
    )
}

export default ShortVideo