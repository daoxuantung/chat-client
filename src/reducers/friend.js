import requestConstants from '../constants/request';
const { CHECK_REQUEST, SEND_REQUEST, RECEIVE_REQUSET, GET_FRIEND } = requestConstants;

const initUser = {
    isFriend: false,
    sended: false,
    received: false,
    user: null
}

export const friendReducer = (state = initUser, action) => {
    switch (action.type) {
        case CHECK_REQUEST:
            return { ...state, isFriend: action.payload };
        case SEND_REQUEST:
            return { ...state, sended: action.payload };
        case RECEIVE_REQUSET:
            return { ...state, received: action.payload };
        case GET_FRIEND:
            return { ...state, user: action.payload.user }
        default:
            return state;
    }
}