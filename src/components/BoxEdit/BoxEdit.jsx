import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showEditForm } from '../../actions/dropdownMenu';
import OverlayForm from '../Overlay/OverlayForm';
import './BoxEdit.scss';

const BoxEdit = ({ user }) => {
    const { name, avatarUrl, phoneNumber, email, webUrl, aboutMe } = user;
    const isShow = useSelector(state => state.dropdownReducer.showEditForm);
    const dispatch = useDispatch();

    const handleCloseForm = () => {
        dispatch(showEditForm(false))
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
                            <div className="profile_item-name">About</div>
                            {
                                aboutMe.length ? <textarea className="profile_item-content textarea textarea--height">
                                    {aboutMe}
                                </textarea>
                                    : <hr className="profile_item-content--hidden" />
                            }
                        </li>
                        <li className="profile_item">
                            <div className="profile_item-name">Phone</div>
                            {phoneNumber.length ? <textarea className="profile_item-content textarea">{phoneNumber}</textarea> : <hr className="profile_item-content--hidden" />}
                        </li>
                        <li className="profile_item">
                            <div className="profile_item-name">Email</div>
                            {email.length ? <textarea className="profile_item-content textarea">{email}</textarea> : <hr className="profile_item-content--hidden" />}
                        </li>
                        <li className="profile_item">
                            <div className="profile_item-name">Website</div>
                            {
                                webUrl.length ?
                                    <textarea className="profile_item-content textarea">
                                        {webUrl.slice(8)}
                                    </textarea>
                                    : <hr className="profile_item-content--hidden" />
                            }
                        </li>
                    </ul>
                </div>
            </div>
            <OverlayForm handleCloseForm={handleCloseForm} />
        </div >
    );
};

export default BoxEdit;