
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import BoxEdit from '../BoxEdit/BoxEdit';
import './BoxProfile.scss';
import Profile from './Profile';

const BoxProfile = () => {
    const history = useHistory();
    const { userID } = useParams();

    return (
        <>
            <Profile history={history} param={userID} />
            <BoxEdit />
        </>
    );
};

export default BoxProfile;