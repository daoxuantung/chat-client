import requestConstants from '../constants/request';
const { GET_FRIEND, GET_USER, SET_FRIEND } = requestConstants;

export const getFriend = (list) => {
    return {
        type: GET_FRIEND,
        payload: list
    }
}

export const getUser = (user) => {
    return {
        type: GET_USER,
        payload: user
    }
}

export const setFriend = (user) => {
    return {
        type: SET_FRIEND,
        payload: user
    }
}