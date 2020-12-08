import dropdownMenu from '../constants/dropdownMenu';
const { SHOW_MENU, SHOW_EDIT_FORM, SHOW_NOTIFICATION, SHOW_SEARCH_FORM } = dropdownMenu;

const initShowMenu = {
    showMenu: false,
    showEditForm: false,
    showNotification: false,
    showSearchForm: false
};

export const dropdownReducer = (state = initShowMenu, action) => {
    switch (action.type) {
        case SHOW_MENU:
            return { ...state, showMenu: action.payload };
        case SHOW_EDIT_FORM:
            return { ...state, showEditForm: action.payload };
        case SHOW_NOTIFICATION:
            return { ...state, showNotification: action.payload };
        case SHOW_SEARCH_FORM:
            return { ...state, showSearchForm: action.payload };
        default:
            return state
    }
}