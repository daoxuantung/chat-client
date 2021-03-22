import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames'
import { Link } from 'react-router-dom';
import friendService from '../../services/friend.service';
import { useDispatch, useSelector } from 'react-redux';
import { getFriend } from '../../actions/request';

const Friend = ({ friend }) => {
    const { avatarUrl, name, username } = friend;
    const friends = useSelector(state => state.friendReducer.friendsList);
    const dispatch = useDispatch()
    const token = localStorage.getItem('token');
    const [isShow, setIsShow] = useState(false);
    const divEl = useRef(null)
    const showDropdown = () => {
        setIsShow(!isShow)
    }

    const handleUnfriend = async () => {
        const check = friends.findIndex(friend => friend.username === username);

        if (check >= 0) {
            const newItems = [...friends.slice(0, check), ...friends.slice(check + 1)];
            dispatch(getFriend(newItems));
            await friendService.deleteFriend(token, friend);
        }

    }

    useEffect(() => {
        const handleHiddenDropdown = (e) => {
            if (divEl.current && !divEl.current.contains(e.target)) {
                setIsShow(false);
            }
        }
        document.addEventListener('click', handleHiddenDropdown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => {
            document.removeEventListener("click", handleHiddenDropdown);
        };
    }, [])

    return (
        <div className="friend">
            <div className="friend_avatar">
                <img src={avatarUrl} alt="" width="100%" height="100%" />
            </div>
            <div className="friend_name">
                {name}
            </div>
            <div ref={divEl} className="friend_icon" onClick={() => showDropdown()}>
                <i className="ri-more-2-line ri-2x"></i>
                <div className={classNames('friend_dropdown content_dropdown', { show: isShow })} >
                    <Link className="content_button friend_btn" to={`/dashboard/${username}`}>
                        View Profile
                        <i className="ri-user-2-line ri-lg"></i>
                    </Link>
                    <div className="content_line"></div>
                    <div className="content_button friend_btn" onClick={() => handleUnfriend(username)}>
                        Unfiend
                        <i className="ri-user-unfollow-line ri-lg"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Friend;