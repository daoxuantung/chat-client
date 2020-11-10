import userConstants from '../constants/user.constant';
const { REGISTER_REQUEST, LOGIN_REQUEST, GET_REQUEST } = userConstants;


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