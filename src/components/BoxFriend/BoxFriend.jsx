import { faTimes, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Overlay from '../Overlay/Overlay';
import './BoxFriend.scss';
import Friend from './Friend';
import friendService from '../../services/friend.service';
import { getFriend } from '../../actions/request';
import { showSearchForm } from '../../actions/dropdownMenu';

const BoxFriend = () => {
    const history = useHistory();
    const user = useSelector(state => state.userReducer.user);
    const token = localStorage.getItem('token');
    const dispatch = useDispatch();
    const friendsList = useSelector(state => state.friendReducer.friendsList);

    const handleShowForm = () => {
        dispatch(showSearchForm(true))
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
        <>
            <div className="profile friends">
                <div className="profile_header">
                    <h2 className="profile_title">Friends</h2>
                    <div className="profile_group">
                        <div className="profile_btn profile_btn--edit btnShow" onClick={() => handleShowForm()}>
                            <FontAwesomeIcon icon={faUserPlus} size="2x" />
                        </div>
                        <div className="profile_btn profile_btn--danger" onClick={() => history.push('/dashboard')}>
                            <FontAwesomeIcon icon={faTimes} size="2x" />
                        </div>
                    </div>
                </div>
                {
                    friendsList && friendsList.length ? <div className="list-message_input friends_input">
                        <input type="text" placeholder="Search" />
                    </div> : <span></span>
                }
                {
                    friendsList && friendsList.length ? <div className="friends_body">
                        <div className="friends_number">96 Friends</div>
                        <div className="friends_list">
                            <ul>
                                {
                                    friendsList.map((friend) =>
                                        <li key={friend._id} className="friends_item nav-item">
                                            <Friend friend={friend} />
                                        </li>)
                                }
                            </ul>
                        </div>
                    </div> : <div className="friends_body friends_text">No friends at all </div>
                }
            </div>
            <Overlay history={history} />
        </>
    );
};

export default BoxFriend;