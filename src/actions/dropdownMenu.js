import dropdownMenu from '../constants/dropdownMenu';
const { SHOW_EDIT_FORM, SHOW_SEARCH_FORM } = dropdownMenu;


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
