import requestConstants from '../constants/request';
const { GET_FRIEND, GET_USER, SET_FRIEND } = requestConstants;

const initUser = {
    user: null,
    friendsList: []
}

export const friendReducer = (state = initUser, action) => {
    switch (action.type) {
        case GET_USER:
            return { ...state, user: action.payload.user }
        case GET_FRIEND:
            return { ...state, friendsList: action.payload }
        case SET_FRIEND:
            return { ...state, friendsList: action.payload }
        default:
            return state;
    }
}