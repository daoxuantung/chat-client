import userConstants from '../constants/user.constant';
const { REGISTER_REQUEST, LOGIN_REQUEST, GET_REQUEST, GET_USERS } = userConstants

const initUser = {
    registered: false,
    loggedIn: false,
    user: null,
    listUsers: null
}

export const userReducer = (state = initUser, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return { ...state, registered: action.payload };
        case LOGIN_REQUEST:
            return { ...state, loggedIn: action.payload };
        case GET_REQUEST:
            return { ...state, user: action.payload.user };
        case GET_USERS:
            return { ...state, listUsers: action.payload };
        default:
            return state;
    }
}