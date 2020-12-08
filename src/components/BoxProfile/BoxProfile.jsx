
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getUser } from '../../actions/request';
import authService from '../../services/auth.service';
import './BoxProfile.scss';
import Profile from './Profile';

const BoxProfile = ({ currentUser }) => {
    const history = useHistory();
    const { userID } = useParams();
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const user = useSelector(state => state.friendReducer.user);

    useEffect(() => {
        const fetchApi = async () => {
            const userMatched = (await authService.getUser(token, userID)).data;
            if (userMatched) {
                dispatch(getUser(userMatched))
            }
        }

        fetchApi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userID])

    return (
        user && <>
            <Profile history={history} user={user} param={userID} token={token} />
        </>
    );
};

export default BoxProfile;