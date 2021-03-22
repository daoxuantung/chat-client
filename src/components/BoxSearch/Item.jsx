import React from 'react';
import BtnGroup from '../BtnGroup/BtnGroup';

const Item = ({ user }) => {
    return (
        <div className="friend">
            <div className="friend_avatar">
                <img src={user.avatarUrl} alt="" />
            </div>
            <div className="friend_name">
                {user.name}
            </div>
            <div className="item_btn">
                <BtnGroup user={user} param={user.username} />
            </div>
        </div >
    );
};

export default Item;