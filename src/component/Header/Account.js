import React, { useState } from 'react'
import { Maincontainer, Firstcontainer, Secondcontainer } from './styles'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { faArrowRightToBracket, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import Brightness2OutlinedIcon from '@mui/icons-material/Brightness2Outlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import AddModeratorOutlinedIcon from '@mui/icons-material/AddModeratorOutlined';


const Account = () => {
    const [appearance, setAppearance] = useState(false)
    const [set,setSet]=useState(true)

    const handleAppearance = () => {
        setAppearance(!appearance)
        setSet(!set)
        

        
    }
    // console.log( setAppearance(!appearance))

    return (
        <Maincontainer>
            <Firstcontainer>
                <AccountCircleIcon />
                <div>
                    <span>Suryamani Kumar</span>
                    <span>Manage your Google Account</span>
                </div>
            </Firstcontainer>
            <Secondcontainer>
                <div>
                    <AccountBoxOutlinedIcon />
                    <span>Your Channel</span>
                </div>
                <div>
                    <SettingsOutlinedIcon />
                    <span>YouTube Studio</span>
                </div>
                <div>
                    <SwitchAccountOutlinedIcon />
                    <span>Switch account</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faArrowRightToBracket} />
                    <span>Sign out</span>

                </div>
                <hr />
                <div>
                    <MonetizationOnOutlinedIcon />
                    <span>Purchases and membership</span>
                </div>
                <div>
                    <AddModeratorOutlinedIcon />
                    <span>Your data in YouTube</span>

                </div>
                <hr />
                <div onClick={handleAppearance}>
                    <Brightness2OutlinedIcon />
                    <span>Appearance: Device theme</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                    {appearance ?
                        <div style={{position: 'absolute', top: "50px",}}>
                            abcd
                        </div> :
                        null}
                </div>
                <div>
                    <TranslateOutlinedIcon />
                    <span>Language:British English</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div>
                    <AddModeratorOutlinedIcon />
                    <span>Restricted Mode: Off</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div>
                    <LanguageOutlinedIcon />
                    <span>Location:India</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div>
                    <KeyboardOutlinedIcon />
                    <span>Keyword shortcuts</span>
                </div>
                <hr />
                <div>
                    <SettingsOutlinedIcon />
                    <span>Setting</span>
                </div>
                <hr />
                <div>
                    < HelpOutlineIcon />
                    <span>Help</span>
                </div>
                <div>
                    <FeedbackOutlinedIcon />
                    <span>Send feedback</span>
                </div>
            </Secondcontainer>

        </Maincontainer>

    )
}

export default Account


