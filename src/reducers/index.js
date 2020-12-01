import { combineReducers } from 'redux';
import { userReducer } from './user';
import { friendReducer } from './friend';
import { dropdownReducer } from './dropdownMenu';

export default combineReducers({
    userReducer,
    dropdownReducer,
    friendReducer
})