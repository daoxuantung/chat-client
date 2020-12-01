import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showEditForm } from '../../actions/dropdownMenu';
import OverlayForm from '../Overlay/OverlayForm';
import './BoxEdit.scss';

import AuthService from "../../services/auth.service";

const BoxEdit = ({ user }) => {
    const { name, avatarUrl, phoneNumber, email, webUrl, aboutMe } = user;
    const isShow = useSelector(state => state.dropdownReducer.showEditForm);
    const dispatch = useDispatch();
    const inputNameEl = useRef(null);
    const inputAboutEl = useRef(null);
    const inputPhoneEl = useRef(null);
    const inputWebUrlEl = useRef(null);
    const token = localStorage.getItem('token');

    const handleCloseForm = () => {
        inputNameEl.current.value = '';
        inputAboutEl.current.value = '';
        inputPhoneEl.current.value = '';
        inputWebUrlEl.current.value = '';
        dispatch(showEditForm(false));
    }

    const handleEditUser = (e) => {
        e.preventDefault();
        const userEdited = {
            name: inputNameEl.current.value,
            aboutMe: inputAboutEl.current.value,
            phoneNumber: inputPhoneEl.current.value,
            webUrl: inputWebUrlEl.current.value
        }

        AuthService.editUser(token, userEdited);
        window.location.reload();
    }

    return (
        <div className={classNames('edit', { showEdit: isShow })}>
            <div className="edit_box">
                <h2 className="edit_title profile_title">
                    <div className="edit_icon">
                        <FontAwesomeIcon icon={faPencilAlt} size="2x" />
                    </div>
                    Edit profile
                    <div className="edit_btn" onClick={() => handleCloseForm()}>
                        <FontAwesomeIcon icon={faTimes} size="3x" />
                    </div>
                </h2>
                <div className="edit_content">
                    <div className="profile_avatar">
                        <img src={avatarUrl} alt="" width={100} height={100} />
                    </div>
                    <ul className="profile_list edit_list">
                        <li className="profile_item">
                            <div className="profile_item-name">Fullname</div>
                            <textarea ref={inputNameEl} placeholder={name} className="profile_item-content textarea" />
                        </li>
                        <li className="profile_item">
                            <div className="profile_item-name">About</div>
                            <textarea ref={inputAboutEl} placeholder={aboutMe} className="profile_item-content textarea textarea--height" />
                        </li>
                        <li className="profile_item">
                            <div className="profile_item-name">Phone</div>
                            <textarea ref={inputPhoneEl} className="profile_item-content textarea" placeholder={phoneNumber} />
                        </li>
                        <li className="profile_item">
                            <div className="profile_item-name">Email</div>
                            <textarea className="profile_item-content textarea" placeholder={email} disabled />
                        </li>
                        <li className="profile_item">
                            <div className="profile_item-name">Website</div>
                            <textarea ref={inputWebUrlEl} className="profile_item-content textarea" placeholder={webUrl.slice(8)} />
                        </li>
                    </ul>
                </div>
                <form className="edit_button" onSubmit={(e) => handleEditUser(e)}>
                    <button type="submit" className="edit_btn--green profile_btn">Save</button>
                </form>
            </div>
            <OverlayForm handleCloseForm={handleCloseForm} />
        </div >
    );
};

export default BoxEdit;