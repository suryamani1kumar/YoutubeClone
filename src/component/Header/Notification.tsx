import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';


function Notification() {
    return (
        <div
            style={{ position: 'absolute', top: '30px', right: '-10px', width: '480px',height:'650px' }}
            className='bg-light'
        >
            <div
            className='d-flex  justify-content-between'
            >
                <span>Notification</span>
                <SettingsIcon />
            </div>
        </div>
    )
}

export default Notification