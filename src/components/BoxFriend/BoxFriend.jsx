import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Overlay from '../Overlay/Overlay';
import './BoxFriend.scss';
import Friend from './Friend';
import friendService from '../../services/friend.service';
import { getFriend, setFriend } from '../../actions/request';
import { showSearchForm } from '../../actions/dropdownMenu';
import classNames from 'classnames';
import Node from '../Node/Node';

const BoxFriend = () => {
    const history = useHistory();
    const user = useSelector(state => state.userReducer.user);
    const token = localStorage.getItem('token');
    const dispatch = useDispatch();
    const friends = useSelector(state => state.friendReducer.friendsList);
    const [isShow, setIsShow] = useState(false);

    const handleShowForm = () => {
        dispatch(showSearchForm(true))
    }

    const handleCloseProfile = () => {
        setIsShow(true);
        setTimeout(() => {
            history.push('/dashboard');
        }, 300)
    }

    const searchFriends = async (e) => {
        const { value } = e.target;
        const friendsList = (await friendService.getFriends(token, user, value)).data;
        dispatch(setFriend(friendsList));
    }

    useEffect(() => {
        const fetchListUsers = async () => {
            const friendsList = (await friendService.getFriends(token, user)).data;

            dispatch(getFriend(friendsList));
        }

        fetchListUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        friends && <>
            <div className={classNames("profile friends", { profileIsShow: isShow })}>
                <div className="profile_header">
                    <h2 className="profile_title">Friends</h2>
                    <div className="profile_group">
                        <div className="profile_btn profile_btn--edit btnShow" onClick={() => handleShowForm()}>
                            <i className="ri-user-add-line ri-2x"></i>
                            <Node text="Add" />
                        </div>
                        <div className="profile_btn profile_btn--danger" onClick={() => handleCloseProfile()}>
                            <i className="ri-close-line ri-2x"></i>
                            <Node text="Close" />
                        </div>
                    </div>
                </div>
                <div className="list-message_input friends_input">
                    <input type="text" placeholder="Search friends" onChange={(e) => searchFriends(e)} />
                </div>
                {
                    friends.length ? <div className="friends_body">
                        <div className="friends_list">
                            <ul>
                                {
                                    friends.map((friend) =>
                                        <li key={friend._id} className="friends_item nav-item">
                                            <Friend friend={friend} />
                                        </li>)
                                }
                            </ul>
                        </div>
                    </div> : <div className="friends_body friends_text">No friends at all </div>
                }
            </div>
            <Overlay handleCloseProfile={handleCloseProfile} />
        </>
    );
};

export default BoxFriend;