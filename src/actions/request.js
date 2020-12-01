import requestConstants from '../constants/request';
const { SEND_REQUEST, CHECK_REQUEST, RECEIVE_REQUSET, GET_FRIEND } = requestConstants;


export const send = (boolean) => {
    return {
        type: SEND_REQUEST,
        payload: boolean
    }
}

export const checkRequest = (boolean) => {
    return {
        type: CHECK_REQUEST,
        payload: boolean
    }
}
export const receive = (boolean) => {
    return {
        type: RECEIVE_REQUSET,
        payload: boolean
    }
}


export const getFriend = (user) => {
    return {
        type: GET_FRIEND,
        payload: user
    }
}