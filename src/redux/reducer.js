import { createStore } from 'redux'


export const initialstate = {
    showHomeMenu: false,
    showCreateViedo: false,
    showNotifications: false,
    showAccount: false,
    showSetting: false,
    data: []

}


export function createreducer(state = initialstate, action) {
    switch (action.type) {
        case 'SHOWMENU': return {
            ...state,
            showHomeMenu: !state.showHomeMenu

        }
        case 'SHOWVIEDO': return {
            ...state,
            showCreateViedo: !state.showCreateViedo

        }
        case 'SHOWNOTIFICATION': return {
            ...state,
            showNotifications: !state.showNotifications

        }
        case 'SHOWACCOUNT': return {
            ...state,
            showAccount: !state.showAccount

        }
        // case SHOWVIDEO: return {
        //     ...state,
        //     video: state.data.push({
        //         Titles: action.payload.titles,
        //         imgs: action.payload.imgs,
        //         ChannelImgs:action.payload.ChannelImgs,
        //         ChannelNames:action.payload.ChannelNames,
        //         Views:action.payload.Views,
        //         Uploadtiming:action.payload.Uploadtiming
        //     })
        // }
        case 'SETVIDEO': return {
            data: action.payload
        }

        case 'SHOWSETTING': return {
            ...state,
            showSetting: !state.showSetting
        }

        default: return state
    }

}



const store = createStore(createreducer)
export default store
