

export const SHOWVIDEO = 'SHOWVIDEO'

export function showHomeMenuToggle() {
    return {
        type: 'SHOWMENU'
    }
}

export function showCreateViedoToggle() {
    return {
        type: 'SHOWVIEDO'
    }
}

export function showNotificationsToggle() {
    return {
        type: 'SHOWNOTIFICATION'
    }
}

export function showAccountToggle() {
    return {
        type: 'SHOWACCOUNT'
    }
}

// export function showVideo(imgs, titles, ChannelImgs, ChannelNames, Views, Uploadtiming) {
//     return {
//         type: SHOWVIDEO,
//         payload: {
//             imgs,
//             titles,
//             ChannelImgs,
//             ChannelNames,
//             Views,
//             Uploadtiming
//         }
//     }
// }
export function setvideo(value) {
    return {
        type: 'SETVIDEO',
        payload: value
    }
}
