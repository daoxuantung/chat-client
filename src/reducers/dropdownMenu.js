import dropdownMenu from '../constants/dropdownMenu';
const { SHOW_MENU, SHOW_EDIT_FORM } = dropdownMenu;

const initShowMenu = {
    showMenu: false,
    showEditForm: false
};

export const dropdownReducer = (state = initShowMenu, action) => {
    switch (action.type) {
        case SHOW_MENU:
            return { ...state, showMenu: action.payload };
        case SHOW_EDIT_FORM:
            return { ...state, showEditForm: action.payload };
        default:
            return state
    }
}