import dropdownMenu from '../constants/dropdownMenu';
const { SHOW_MENU, SHOW_EDIT_FORM } = dropdownMenu;


export const showMenu = (boolean) => {
    return {
        type: SHOW_MENU,
        payload: boolean
    }
}

export const showEditForm = (boolean) => {
    return {
        type: SHOW_EDIT_FORM,
        payload: boolean
    }
}