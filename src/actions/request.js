import requestConstants from '../constants/request';
const { GET_FRIEND, GET_USER } = requestConstants;

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