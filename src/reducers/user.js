import userConstants from '../constants/user.constant';
const { REGISTER_REQUEST, LOGIN_REQUEST, GET_REQUEST, GET_USERS, CHANGE_ABOUT, CHANGE_AVATAR, SET_DEFAULT, CHANGE_NAME, CHANGE_NUMBER, CHANGE_WEB, CHANGE_WORK } = userConstants;

const initUser = {
    registered: false,
    loggedIn: false,
    user: null,
    listUsers: null,
    userEdited: null
}

export const userReducer = (state = initUser, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return { ...state, registered: action.payload };
        case LOGIN_REQUEST:
            return { ...state, loggedIn: action.payload };
        case GET_REQUEST:
            return { ...state, user: action.payload.user, userEdited: action.payload.user };
        case SET_DEFAULT:
            return { ...state, userEdited: action.payload };
        case GET_USERS:
            return { ...state, listUsers: action.payload };
        case CHANGE_ABOUT:
            return { ...state, userEdited: { ...state.userEdited, aboutMe: action.payload } };
        case CHANGE_NAME:
            return { ...state, userEdited: { ...state.userEdited, name: action.payload } };
        case CHANGE_AVATAR:
            return { ...state, userEdited: { ...state.userEdited, avatarUrl: action.payload } };
        case CHANGE_NUMBER:
            return { ...state, userEdited: { ...state.userEdited, phoneNumber: action.payload } };
        case CHANGE_WEB:
            return { ...state, userEdited: { ...state.userEdited, webUrl: action.payload } };
        case CHANGE_WORK:
            return { ...state, userEdited: { ...state.userEdited, work: action.payload } };
        default:
            return state;
    }
}