import dropdownMenu from '../constants/dropdownMenu';
const { SHOW_EDIT_FORM, SHOW_SEARCH_FORM } = dropdownMenu;

const initShowMenu = {
    showMenu: false,
    showEditForm: false,
    showSearchForm: false
};

export const dropdownReducer = (state = initShowMenu, action) => {
    switch (action.type) {
        case SHOW_EDIT_FORM:
            return { ...state, showEditForm: action.payload };
        case SHOW_SEARCH_FORM:
            return { ...state, showSearchForm: action.payload };
        default:
            return state
    }
}