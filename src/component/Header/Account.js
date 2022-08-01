import React, { useState } from 'react'
import {
    Maincontainer,
    Accountcontainer,
    PersonalAccountcontainer,
    Membershipscontainer,
    LoactionContainer,
    Sittingcontainer,
    Helpcontainer
} from './styles'
import {
    AccountCircle,
    MonetizationOnOutlined,
    SwitchAccountOutlined,
    AccountBoxOutlined,
    SettingsOutlined,
    TranslateOutlined,
    KeyboardOutlined,
    HelpOutline,
    FeedbackOutlined,
    Brightness2Outlined,
    AddModeratorOutlined,
    LanguageOutlined
} from '@mui/icons-material';
import { faArrowRightToBracket, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Account = () => {
    const [appearance, setAppearance] = useState(false)
    const [set, setSet] = useState(true)

    const handleAppearance = () => {
        setAppearance(!appearance)
        setSet(!set)
    }

    return (
        <Maincontainer>
            <Accountcontainer>
                <AccountCircle style={{ marginRight: '16px' }} />
                <div>
                    <span>Suryamani Kumar</span>
                    <span>Manage your Google Account</span>
                </div>
            </Accountcontainer>
            <PersonalAccountcontainer>
                <div>
                    <AccountBoxOutlined style={{ marginRight: '16px' }} />
                    <span>Your Channel</span>
                </div>
                <div>
                    <SettingsOutlined style={{ marginRight: '16px' }} />
                    <span>YouTube Studio</span>
                </div>
                <div>
                    <SwitchAccountOutlined style={{ marginRight: '16px' }} />
                    <span>Switch account</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faArrowRightToBracket} style={{ marginRight: '20px' }} />
                    <span>Sign out</span>
                </div>
            </PersonalAccountcontainer>
            <Membershipscontainer>
                <div className='div'>
                    <MonetizationOnOutlined style={{ marginRight: '16px' }} />
                    <span>Purchases and membership</span>
                </div>
                <div className='div'>
                    <AddModeratorOutlined style={{ marginRight: '16px' }} />
                    <span>Your data in YouTube</span>
                </div>
            </Membershipscontainer>
            <LoactionContainer>
                <div onClick={handleAppearance}>
                    <Brightness2Outlined style={{ marginRight: '16px' }} />
                    <span>Appearance: Device theme</span>

                    <FontAwesomeIcon icon={faAngleRight} />

                    {appearance ?
                        <div style={{ position: 'absolute', top: "50px", }}>
                            abcd
                        </div> :
                        null}
                </div>
                <div>
                    <TranslateOutlined style={{ marginRight: '16px' }} />
                    <span>Language:British English</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div>
                    <AddModeratorOutlined style={{ marginRight: '16px' }} />
                    <span>Restricted Mode: Off</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
                <div>
                    <LanguageOutlined style={{ marginRight: '16px' }} />
                    <span>Location:India</span>
                    <span><FontAwesomeIcon icon={faAngleRight} /></span>

                </div>
                <div>
                    <KeyboardOutlined style={{ marginRight: '16px' }} />
                    <span>Keyword shortcuts</span>
                </div>
            </LoactionContainer>
            <Sittingcontainer>
                <div>
                    <SettingsOutlined style={{ marginRight: '16px' }} />
                    <span>Setting</span>
                </div>
            </Sittingcontainer>
            <Helpcontainer>
                <div>
                    < HelpOutline style={{ marginRight: '16px' }} />
                    <span>Help</span>
                </div>
                <div>
                    <FeedbackOutlined style={{ marginRight: '16px' }} />
                    <span>Send feedback</span>
                </div>
            </Helpcontainer>

        </Maincontainer>

    )
}

export default Account


