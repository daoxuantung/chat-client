import userConstants from '../constants/user.constant';
const { REGISTER_REQUEST, LOGIN_REQUEST, SET_DEFAULT, GET_REQUEST, GET_USERS, CHANGE_ABOUT, CHANGE_AVATAR, CHANGE_NAME, CHANGE_NUMBER, CHANGE_WEB, CHANGE_WORK } = userConstants;

export const registerUser = (user) => {
    return {
        type: REGISTER_REQUEST,
        payload: user
    }
}

export const loginUser = (user) => {
    return {
        type: LOGIN_REQUEST,
        payload: user
    }
}

export const getCurrentUser = (user) => {
    return {
        type: GET_REQUEST,
        payload: user
    }
}

export const getUsers = (users) => {
    return {
        type: GET_USERS,
        payload: users
    }
}

export const changeName = (name) => {
    return {
        type: CHANGE_NAME,
        payload: name
    }
}

export const changeAvatar = (url) => {
    return {
        type: CHANGE_AVATAR,
        payload: url
    }
}
export const changeAbout = (content) => {
    return {
        type: CHANGE_ABOUT,
        payload: content
    }
}
export const changeWork = (text) => {
    return {
        type: CHANGE_WORK,
        payload: text
    }
}

export const changeNumber = (number) => {
    return {
        type: CHANGE_NUMBER,
        payload: parseInt(number)
    }
}


export const changeWebUrl = (url) => {
    return {
        type: CHANGE_WEB,
        payload: url
    }
}

export const setDefault = (user) => {
    return {
        type: SET_DEFAULT,
        payload: user
    }
}