import dropdownMenu from '../constants/dropdownMenu';
const { SHOW_MENU, SHOW_EDIT_FORM, SHOW_NOTIFICATION, SHOW_SEARCH_FORM } = dropdownMenu;


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

export const showSearchForm = (boolean) => {
    return {
        type: SHOW_SEARCH_FORM,
        payload: boolean
    }
}

export const showNotification = (boolean) => {
    return {
        type: SHOW_NOTIFICATION,
        payload: boolean
    }
}