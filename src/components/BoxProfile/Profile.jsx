import { faPencilAlt, faTimes, faUser, faUserCheck, faUserPlus, faUserTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showEditForm } from '../../actions/dropdownMenu';
import { checkRequest, receive, send } from '../../actions/request';
import Overlay from '../Overlay/Overlay';
import friendService from '../../services/friend.service';

const Profile = ({ history, user, param, token }) => {
    const currentUser = useSelector(state => state.userReducer.user);
    const { sended, received, isFriend } = useSelector(state => state.friendReducer);

    const dispatch = useDispatch()
    const handleEdit = () => {
        dispatch(showEditForm(true))
    }

    const handleAddFriend = async () => {
        dispatch(send(true));
        await friendService.addRequest(token, user)
    }

    const handleCancelRequest = async () => {
        dispatch(send(false));
        await friendService.deleteRequest(token, user)
    }

    const handleAcceptRequest = async () => {
        dispatch(checkRequest(true));
        dispatch(receive(false));
        await friendService.acceptRequest(token, user);
    }

    const handleDeleteFriend = async () => {
        dispatch(checkRequest(false));
        await friendService.deleteFriend(token, user);
    }

    useEffect(() => {
        const isSend = currentUser.sentRequest.findIndex(request =>
            request.username === param
        );

        const isReceive = currentUser.request.findIndex(request =>
            request.username === param
        );

        const check = currentUser.friendsList.findIndex(friend =>
            friend.friendName === param
        );

        if (isSend >= 0) {
            dispatch(send(true));
        }

        if (isReceive >= 0) {
            dispatch(receive(true));
        }

        if (check >= 0) {
            dispatch(checkRequest(true));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, param])

    return (
        <>
            <div className="profile">
                <div className="profile_header">
                    <h2 className="profile_title">Profile</h2>
                    <div className="profile_group">
                        <div className={classNames("profile_group-btn", { btnShow: param !== currentUser.username })}>
                            <div className={classNames("profile_btn profile_btn--icon", { btnShow: !sended && !received && !isFriend })} onClick={() => handleAddFriend(user)}>
                                <FontAwesomeIcon icon={faUserPlus} size="2x" />
                            </div>
                            <div className={classNames("profile_btn profile_btn--icon", { btnShow: sended })} onClick={() => handleCancelRequest(user)}>
                                <FontAwesomeIcon icon={faUserTimes} size="2x" />
                            </div>
                            <div className={classNames("profile_btn profile_btn--icon", { btnShow: param !== currentUser.username && received })} onClick={() => handleAcceptRequest(user)}>
                                <FontAwesomeIcon icon={faUserCheck} size="2x" />
                            </div>
                            <div className={classNames("profile_btn profile_btn--edit", { btnShow: param !== currentUser.username && isFriend })} onClick={() => handleDeleteFriend(user)}>
                                <FontAwesomeIcon icon={faUser} size="2x" />
                            </div>
                        </div>
                        <div className={classNames("profile_btn profile_btn--edit", { btnShow: param === currentUser.username })} onClick={() => handleEdit()}>
                            <FontAwesomeIcon icon={faPencilAlt} size="2x" />
                        </div>
                        <div className="profile_btn profile_btn--danger" onClick={() => history.push('/dashboard')}>
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
        </>
    );
};

export default Profile;