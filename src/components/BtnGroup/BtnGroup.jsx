import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import friendService from '../../services/friend.service';
import { useState } from 'react';
import Node from '../Node/Node';

const BtnGroup = ({ user, param }) => {
    const currentUser = useSelector(state => state.userReducer.user);
    const [state, setState] = useState({ sended: false, received: false, checked: false });
    const token = localStorage.getItem('token');

    const handleAddFriend = async () => {
        setState({ ...state, sended: true });
        await friendService.addRequest(token, user)
    }

    const handleCancelRequest = async () => {
        setState({ ...state, sended: false });
        await friendService.deleteRequest(token, user)

    }

    const handleAcceptRequest = async () => {
        setState({ ...state, received: false, checked: true });
        await friendService.acceptRequest(token, user);

    }

    const handleDeleteFriend = async () => {
        setState({ ...state, checked: false });
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
            setState({ ...state, sended: true });
        }

        if (isReceive >= 0) {
            setState({ ...state, received: true });
        }

        if (check >= 0) {
            setState({ ...state, checked: true });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={classNames("profile_group-btn", { btnShow: param !== currentUser.username })}>
            <div className={classNames("profile_btn profile_btn--icon", { btnShow: !state.sended && !state.received && !state.checked })} onClick={() => handleAddFriend(user)}>
                <i className="ri-user-add-line ri-2x"></i>
                <Node text="Add" />
            </div>
            <div className={classNames("profile_btn profile_btn--icon", { btnShow: state.sended })} onClick={() => handleCancelRequest(user)}>
                <i className="ri-user-unfollow-line ri-2x"></i>
                <Node text="Cancel" />
            </div>
            <div className={classNames("profile_btn profile_btn--icon", { btnShow: param !== currentUser.username && state.received })} onClick={() => handleAcceptRequest(user)}>
                <i className="ri-user-follow-line ri-2x"></i>
                <Node text="Respond" />
            </div>
            <div className={classNames("profile_btn profile_btn--edit", { btnShow: param !== currentUser.username && state.checked })} onClick={() => handleDeleteFriend(user)}>
                <i className="ri-user-line ri-2x"></i>
                <Node text="Friend" />
            </div>
        </div>
    );
};

export default BtnGroup;