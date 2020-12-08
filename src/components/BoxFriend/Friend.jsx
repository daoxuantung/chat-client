import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Friend = ({ friend }) => {
    const { avatarUrl, name } = friend;
    return (
        <div className="friend">
            <div className="friend_avatar">
                <img src={avatarUrl} alt="" width="100%" height="100%" />
            </div>
            <div className="friend_name">
                {name}
                <div className="friend_job">
                    Project Manager
                </div>
            </div>
            <div className="friend_icon">
                <FontAwesomeIcon icon={faEllipsisH} size="2x" />
            </div>
        </div>
    );
};

export default Friend;