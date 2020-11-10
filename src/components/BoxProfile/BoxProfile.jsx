import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import './BoxProfile.scss';

const BoxProfile = () => {
    const { name, avatarUrl, phoneNumber, email, webUrl, aboutMe } = useSelector(state => state.userReducer.user);
    return (
        <div className="profile">
            <div className="profile_header">
                <h2 className="profile_title">Profile</h2>
                <div className="profile_group">
                    <div className="profile_btn">
                        <FontAwesomeIcon icon={faPencilAlt} size="2x" />
                    </div>
                    <div className="profile_btn profile_btn--danger">
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
                        <div className="profile_item-content">{aboutMe}</div>
                    </li>
                    <li className="profile_item">
                        <div className="profile_item-name">Phone</div>
                        <div className="profile_item-content">{phoneNumber}</div>
                    </li>
                    <li className="profile_item">
                        <div className="profile_item-name">Email</div>
                        <div className="profile_item-content">{email}</div>
                    </li>
                    <li className="profile_item">
                        <div className="profile_item-name">Website</div>
                        <a className="profile_item-link profile_item-content" href={webUrl}>{webUrl}</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BoxProfile;