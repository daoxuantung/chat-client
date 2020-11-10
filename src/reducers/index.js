import { combineReducers } from 'redux';
import { userReducer } from './user';
import { dropdownReducer } from './dropdownMenu';

export default combineReducers({
    userReducer,
    dropdownReducer
})