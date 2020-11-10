import userConstants from '../constants/user.constant';
const { REGISTER_REQUEST, LOGIN_REQUEST, GET_REQUEST } = userConstants

const initUser = {
    registered: false,
    loggedIn: false,
    user: null
}

export const userReducer = (state = initUser, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return { ...state, registered: action.payload };
        case LOGIN_REQUEST:
            return { ...state, loggedIn: action.payload };
        case GET_REQUEST:
            const { name, email, avatarUrl, aboutMe, phoneNumber, webUrl } = action.payload;
            return { ...state, user: { name, email, avatarUrl, aboutMe, phoneNumber, webUrl } };
        default:
            return state
    }
}