
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getFriend } from '../../actions/request';
import authService from '../../services/auth.service';
import './BoxProfile.scss';
import Profile from './Profile';

const BoxProfile = ({ socket }) => {
    const history = useHistory();
    const { userID } = useParams();
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const user = useSelector(state => state.friendReducer.user);

    useEffect(() => {
        const getUser = async () => {
            const userMatched = (await authService.getUser(token, userID)).data;
            if (userMatched) {
                dispatch(getFriend(userMatched))
            }
        }

        getUser();


    }, [dispatch, token, userID])

    return (
        user && <>
            <Profile history={history} user={user} socket={socket} param={userID} token={token} />
        </>
    );
};

export default BoxProfile;