import { faBell, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Switch, useRouteMatch } from 'react-router-dom';
import { showMenu, showNotification } from '../../actions/dropdownMenu';
import PrivateRouter from '../../routes/privateRouter';
import BoxFriend from '../BoxFriend/BoxFriend';
import BoxProfile from '../BoxProfile/BoxProfile';
import Notification from '../Notification/Notification';


const ContentNav = ({ history, from }) => {
    const isShow = useSelector(state => state.dropdownReducer.showMenu);
    const isShowNotification = useSelector(state => state.dropdownReducer.showNotification);
    const user = useSelector(state => state.userReducer.user);
    const dispatch = useDispatch();
    const divEL = useRef();

    const handleDropdown = (e) => {
        e.stopPropagation();
        dispatch(showMenu(!isShow))
        dispatch(showNotification(false))
    }

    const handleShowNotification = (e) => {
        e.stopPropagation();
        dispatch(showNotification(!isShowNotification))
        dispatch(showMenu(false))
    }

    const handleToProfile = (username, e) => {
        e.stopPopagation();
        dispatch(showMenu(false));
        history.replace('/');
        history.replace(`dashboard/${username}`);
    }

    const logOut = () => {
        dispatch(showMenu(false));
        localStorage.removeItem("token");
        history.replace(from);
    }

    const { path, url } = useRouteMatch();

    useEffect(() => {
        const handleHiddenDropdown = (e) => {
            if (divEL.current && !divEL.current.contains(e.target)) {
                dispatch(showMenu(false));
                dispatch(showNotification(false))
            }
        }
        document.addEventListener('click', handleHiddenDropdown);
    }, [dispatch])

    return (
        <>
            <div className="content_nav">
                <ul className="navbar-nav">
                    <li className="navbar-nav_item nav-item">
                        <NavLink exact to={`${url}/${user.username}`} activeClassName="selected" className="navbar-nav_link nav-link" >Profile</NavLink>
                    </li>
                    <li className="navbar-nav_item nav-item">
                        <NavLink exact to={`${url}/${user.username}/friends`} activeClassName="selected" className="navbar-nav_link nav-link" >Friends</NavLink>
                    </li>
                    <li className="navbar-nav_item nav-item">
                        <NavLink exact to={`${url}/${user.username}/favorites`} activeClassName="selected" className="navbar-nav_link nav-link" >Favorites</NavLink>
                    </li >
                    <li className="navbar-nav_item nav-item">
                        <NavLink exact to={`${url}/${user.username}/archived`} activeClassName="selected" className="navbar-nav_link nav-link" >Archived</NavLink>
                    </li>
                </ul>
                <NavLink exact className="content_user" to={`${url}/${user.username}`} activeClassName="selected">
                    <div className="content_user-avatar">
                        <img src={user.avatarUrl} alt="" />
                    </div>
                    <p className="content_user-name">{user.name}</p>
                </NavLink>
                <div ref={divEL} className="content_menu" onClick={(e) => handleShowNotification(e)} >
                    <FontAwesomeIcon icon={faBell} />
                    <div className={classNames('content_dropdown content_notification', { show: isShowNotification })} >
                        <Notification />
                    </div>
                </div>
                <div ref={divEL} className="content_menu" onClick={(e) => handleDropdown(e)} >
                    <FontAwesomeIcon icon={faSortDown} />
                    <div className={classNames('content_dropdown', { show: isShow })} >
                        <div className="content_button" onClick={(e) => handleToProfile(user.username, e)}>
                            Profile
                        </div>
                        <div className="content_line"></div>
                        <div className="content_button content_button--red" onClick={() => logOut()}>
                            Log out
                        </div>
                    </div>
                </div>
            </div>
            <Switch>
                <PrivateRouter exact path={`${path}/:userID`} >
                    <BoxProfile currentUser={user} />
                </PrivateRouter>
                <PrivateRouter exact path={`${path}/${user.username}/friends`} >
                    <BoxFriend />
                </PrivateRouter>
                <PrivateRouter exact path={`${path}/${user.username}/favorites`} >
                    <BoxFriend />
                </PrivateRouter>
                <PrivateRouter exact path={`${path}/${user.username}/archived`} >
                    <BoxFriend />
                </PrivateRouter>
            </Switch>
        </>
    );
};

export default ContentNav;

