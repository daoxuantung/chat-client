import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { showEditForm } from '../../actions/dropdownMenu';
import Overlay from '../Overlay/Overlay';
import './BoxProfile.scss';

const BoxProfile = () => {
    const history = useHistory();
    const user = useSelector(state => state.userReducer.user);
    const dispatch = useDispatch();
    const { name, avatarUrl, phoneNumber, email, webUrl, aboutMe } = user;

    const handleEdit = () => {
        dispatch(showEditForm(true))
    }

    return (
        <>
            <div className="profile">
                <div className="profile_header">
                    <h2 className="profile_title">Profile</h2>
                    <div className="profile_group">
                        <div className="profile_btn" onClick={() => handleEdit()}>
                            <FontAwesomeIcon icon={faPencilAlt} size="2x" />
                        </div>
                        <div className="profile_btn profile_btn--danger" onClick={() => history.push('/home')}>
                            <FontAwesomeIcon icon={faTimes} size="2x" />
                        </div>
                    </div>
                </div>
                <div className="profile_body">
                    <div className="profile_avatar">
                        <img src={avatarUrl} alt="" width={100} height={100} />
                    </div>
                    <h5 className="profile_name">{name}</h5>

                    <ul className="profile_list">
                        <li className="profile_item">
                            <div className="profile_item-name">About</div>
                            {aboutMe.length ? <div className="profile_item-content">{aboutMe}</div> : <hr className="profile_item-content--hidden" />}
                        </li>
                        <li className="profile_item">
                            <div className="profile_item-name">Phone</div>
                            {phoneNumber.length ? <div className="profile_item-content">{phoneNumber}</div> : <hr className="profile_item-content--hidden" />}
                        </li>
                        <li className="profile_item">
                            <div className="profile_item-name">Email</div>
                            {email.length ? <div className="profile_item-content">{email}</div> : <hr className="profile_item-content--hidden" />}
                        </li>
                        <li className="profile_item">
                            <div className="profile_item-name">Website</div>
                            {webUrl.length ? <a className="profile_item-link profile_item-content" href={webUrl}>{webUrl.slice(8)}</a> : <hr className="profile_item-content--hidden" />}
                        </li>
                    </ul>
                </div>
            </div>
            <Overlay history={history} />
        </>
    );
};

export default BoxProfile;