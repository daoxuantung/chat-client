import dropdownMenu from '../constants/dropdownMenu';
const { SHOW_MENU } = dropdownMenu;

const initShowMenu = false; 

export const dropdownReducer = (state = initShowMenu, action) => {
    switch (action.type) {
        case SHOW_MENU:
            return action.payload;
        default:
            return state
    }
}