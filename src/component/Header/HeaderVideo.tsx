import React from 'react'
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import SensorsIcon from '@mui/icons-material/Sensors';

function HeaderVideo() {
    return (
        <div style={{ position: 'absolute', top: '30px', width:'180px'}} className='bg-light'>
            <div>
                <SlideshowOutlinedIcon />
                <span>Upload video</span>
            </div>

            <div>
                <SensorsIcon />
                <span>GO live</span>
            </div>

        </div>
    )
}

export default HeaderVideo