import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showSearchForm } from '../../actions/dropdownMenu';
import { getUsers } from '../../actions/user';
import userService from '../../services/searchUser.service';
import Node from '../Node/Node';
import OverlayForm from '../Overlay/OverlayForm';
import './BoxSearch.scss';
import Item from './Item';

const BoxSearch = () => {
    const isShow = useSelector(state => state.dropdownReducer.showSearchForm);
    const user = useSelector(state => state.userReducer.user);
    const users = useSelector(state => state.userReducer.listUsers);
    const dispatch = useDispatch();
    const inputEl = useRef();
    const [text, setError] = useState('');

    const handleCloseForm = (e) => {
        dispatch(showSearchForm(false));
        inputEl.current.value = '';
        setError('');
        dispatch(getUsers(null));
    }

    const handleSearchForm = async (e) => {
        const { error, usersMatched } = (await userService.searchUser(e.target.value, user._id)).data;
        if (error) {
            setError(error);
            dispatch(getUsers(null));
            return;
        }
        setError('');
        dispatch(getUsers(usersMatched));
    }

    return (
        <div className={classNames('edit', { showEdit: isShow })}>
            <div className="edit_box search_box">
                <h2 className="edit_title profile_title">
                    <div className="edit_icon">
                        <i className="ri-edit-line ri-3x"></i>
                    </div>
                    Edit profile
                    <div className="profile_btn edit_btn profile_btn--danger" onClick={() => handleCloseForm()}>
                        <i className="ri-close-line ri-2x"></i>
                        <Node text="Close" />
                    </div>
                </h2>
                <div className="list-message_input friends_input">
                    <input ref={inputEl} type="text" placeholder="Search" onChange={(e) => handleSearchForm(e)} />
                </div>
                <div className="friends_body search_list ">
                    <ul>
                        {
                            users && users.length > 0 && users.map((user) =>
                                <li className="friends_item nav-item" key={user._id}>
                                    <Item user={user} handleCloseForm={handleCloseForm} />
                                </li>
                            )
                        }
                    </ul>
                    {text.length > 0 && <div className="search_text">{text}</div>}
                </div>
            </div>
            <OverlayForm handleCloseForm={handleCloseForm} />
        </div >
    );
};

export default BoxSearch;