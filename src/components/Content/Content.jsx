import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { showMenu } from '../../actions/dropdownMenu';
import './Content.scss';

const Content = ({ user, history, from }) => {
    const isShow = useSelector(state => state.dropdownReducer);
    const dispatch = useDispatch();
    const handleShowDropdown = () => {

        dispatch(showMenu(!isShow))
    }

    const logOut = () => {
        localStorage.removeItem("token");
        history.replace(from);
        dispatch(showMenu(false))
    }

    return (
        user && <section className="content">
            <div className="content_nav">
                <ul className="navbar-nav">
                    <li className="navbar-nav_item nav-item">
                        <button className="navbar-nav_link nav-link" >Profile</button>
                    </li>
                    <li className="navbar-nav_item nav-item">
                        <button className="navbar-nav_link nav-link" >Friends</button>
                    </li>
                    <li className="navbar-nav_item nav-item">
                        <button className="navbar-nav_link nav-link" >Favorites</button>
                    </li >
                    <li className="navbar-nav_item nav-item">
                        <button className="navbar-nav_link nav-link" >Archived</button>
                    </li>
                </ul>
                <div className="content_user">
                    <p className="content_user-name">{user.name}</p>
                    <div className="content_user-avatar" onClick={() => handleShowDropdown()}>
                        <img src={user.avatarUrl} alt="" />
                    </div>
                    <div className={classNames('content_dropdown', { show: isShow })}>
                        <div className="content_button">
                            Profile
                            </div>
                        <div className="content_line"></div>
                        <div className="content_button content_button--red" onClick={() => logOut()}>
                            Log out
                            </div>
                    </div>
                </div>
            </div>
            <div className="content_box">

            </div>
        </section >
    );
};

export default Content;