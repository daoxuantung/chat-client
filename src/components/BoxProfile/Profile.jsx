import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showEditForm } from '../../actions/dropdownMenu';
import Overlay from '../Overlay/Overlay';
import BtnGroup from '../BtnGroup/BtnGroup';
import authService from '../../services/auth.service';
import { getFriend, getUser } from '../../actions/request';
import Node from '../Node/Node';

const Profile = ({ history, param }) => {
    const user = useSelector(state => state.friendReducer.user);
    const token = localStorage.getItem('token');
    const currentUser = useSelector(state => state.userReducer.user);
    const [isShow, setIsShow] = useState(false);
    const dispatch = useDispatch()

    const handleEdit = () => {
        dispatch(showEditForm(true))
    }

    const handleCloseProfile = () => {
        setIsShow(true);
        setTimeout(() => {
            history.push('/dashboard');
        }, 300)
    }

    useEffect(() => {
        const fetchApi = async () => {
            const userMatched = (await authService.getUser(token, param)).data;
            if (userMatched) {
                dispatch(getUser(userMatched))
            }
        }

        fetchApi();
        return () => {
            dispatch(getFriend(null));
            dispatch(showEditForm(false));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        user && <>
            <div className={classNames("profile", { profileIsShow: isShow })}>
                <div className="profile_header">
                    <h2 className="profile_title">Profile</h2>
                    <div className="profile_group">
                        <BtnGroup user={user} param={param} />
                        <div className={classNames("profile_btn profile_btn--edit", { btnShow: param === currentUser.username })} onClick={() => handleEdit()}>
                            <i className="ri-edit-line ri-2x"></i>
                            <Node text="Edit" />
                        </div>
                        <div className="profile_btn profile_btn--danger" onClick={() => handleCloseProfile()}>
                            <i className="ri-close-line ri-2x"></i>
                            <Node text="Close" />
                        </div>
                    </div>
                </div>
                <div className="profile_body">
                    <div className="profile_avatar">
                        <img src={user.avatarUrl} alt="" width={100} height={100} />
                    </div>
                    <h5 className="profile_name">{user.name}</h5>
                    {user.aboutMe.length ? <div className="profile_sayHi">{user.aboutMe}</div> : <hr className="profile_item-content--hidden" />}
                    <div className="profile_box">
                        <div className="profile_box-title">
                            <i className="ri-user-2-line ri-1x"></i>
                            About
                        </div>
                        <ul className="profile_list">
                            <li className="profile_item">
                                <div className="profile_item-name">Work</div>
                                {user.work.length ? <div className="profile_item-content">{user.work}</div> : <hr className="profile_item-content--hidden" />}
                            </li>
                            <li className="profile_item">
                                <div className="profile_item-name">Phone</div>
                                {user.phoneNumber.length ? <div className="profile_item-content">{user.phoneNumber}</div> : <hr className="profile_item-content--hidden" />}
                            </li>
                            <li className="profile_item">
                                <div className="profile_item-name">Email</div>
                                {user.email.length ? <div className="profile_item-content">{user.email}</div> : <hr className="profile_item-content--hidden" />}
                            </li>
                            <li className="profile_item">
                                <div className="profile_item-name">Website</div>
                                {user.webUrl.length ?
                                    <div className="profile_item-content">
                                        <a className="profile_item-link" href={user.webUrl}>{user.webUrl}</a>
                                    </div> : <hr className="profile_item-content--hidden" />}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Overlay handleCloseProfile={handleCloseProfile} />
        </>
    );
};

export default Profile;