import React from 'react';
import BtnGroup from '../BtnGroup/BtnGroup';
// import {useRouteMatch } from 'react-router-dom';

const Item = ({ user }) => {
    // const { url } = useRouteMatch();
    return (
        <div className="friend">
            <div className="friend_avatar">
                <img src={user.avatarUrl} alt="" />
            </div>
            <div className="friend_name">
                {user.name}
                <div className="friend_job">Project Manager</div>
            </div>
            <BtnGroup user={user} param={user.username} />
        </div >
    );
};

export default Item;