import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showEditForm } from '../../actions/dropdownMenu';
import { getFriend } from '../../actions/request';
import Overlay from '../Overlay/Overlay';
import Notification from '../Notification/Notification';
import BtnGroup from '../BtnGroup/BtnGroup';

const Profile = ({ history, user, param }) => {
    const currentUser = useSelector(state => state.userReducer.user);
    const dispatch = useDispatch()

    const handleEdit = () => {
        dispatch(showEditForm(true))
    }

    const handleCloseProfile = () => {
        dispatch(getFriend(null));
        history.push('/dashboard');
    }

    return (
        <>
            <div className="profile">
                <div className="profile_header">
                    <h2 className="profile_title">Profile</h2>
                    <div className="profile_group">
                        <BtnGroup user={user} param={param} />
                        <div className={classNames("profile_btn profile_btn--edit", { btnShow: param === currentUser.username })} onClick={() => handleEdit()}>
                            <FontAwesomeIcon icon={faPencilAlt} size="2x" />
                        </div>
                        <div className="profile_btn profile_btn--danger" onClick={() => handleCloseProfile()}>
                            <FontAwesomeIcon icon={faTimes} size="2x" />
                        </div>
                    </div>
                </div>
                <div className="profile_body">
                    <div className="profile_avatar">
                        <img src={user.avatarUrl} alt="" width={100} height={100} />
                    </div>
                    <h5 className="profile_name">{user.name}</h5>

                    <ul className="profile_list">
                        <li className="profile_item">
                            <div className="profile_item-name">About</div>
                            {user.aboutMe.length ? <div className="profile_item-content">{user.aboutMe}</div> : <hr className="profile_item-content--hidden" />}
                        </li>
                        <li className="profile_item">
                            <div className="profile_item-name">Phone</div>
                            {user.phoneNumber.length ? <div className="profile_item-content">{user.phoneNumber}</div> : <hr className="profile_item-content--hidden" />}
                        </li>
                        <li className="profile_item">
                            <div className="profile_item-name">Email</div>
                            {user.email.length ? <div className="profile_item-content">{user.email}</div> : <hr className="profile_item-content--hidden" />}
                        </li>
                        <li className="profile_item">
                            <div className="profile_item-name">Website</div>
                            {user.webUrl.length ? <a className="profile_item-link profile_item-content" href={user.webUrl}>{user.webUrl.slice(8)}</a> : <hr className="profile_item-content--hidden" />}
                        </li>
                    </ul>
                </div>
            </div>
            <Overlay history={history} />
            < Notification username={currentUser.username} param={param} />
        </>
    );
};

export default Profile;