import { faTimes, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showSearchForm } from '../../actions/dropdownMenu';
import userService from '../../services/searchUser.service';
import OverlayForm from '../Overlay/OverlayForm';
import Item from './Item';
import './BoxSearch.scss';
import { getUsers } from '../../actions/user';

const BoxSearch = ({ user }) => {
    const isShow = useSelector(state => state.dropdownReducer.showSearchForm);
    const users = useSelector(state => state.userReducer.listUsers);
    const dispatch = useDispatch();
    const inputEl = useRef();
    const [text, setError] = useState('');

    const handleCloseForm = (e) => {
        dispatch(showSearchForm(false));
        inputEl.current.value = '';
        dispatch(getUsers(null))
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
                        <FontAwesomeIcon icon={faUserPlus} size="2x" />
                    </div>
                    Add Friends
                    <div className="edit_btn" onClick={() => handleCloseForm()}>
                        <FontAwesomeIcon icon={faTimes} size="3x" />
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
                        {text.length > 0 && <div className="search_text">{text}</div>}
                    </ul>
                </div>
            </div>
            <OverlayForm handleCloseForm={handleCloseForm} />
        </div >
    );
};

export default BoxSearch;