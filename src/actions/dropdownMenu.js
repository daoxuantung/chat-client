import dropdownMenu from '../constants/dropdownMenu';
const { SHOW_MENU } = dropdownMenu;


export const showMenu = (boolean) => {
    return {
        type: SHOW_MENU,
        payload: boolean
    }
}