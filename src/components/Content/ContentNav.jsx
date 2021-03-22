import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Switch, useRouteMatch } from 'react-router-dom';
import PrivateRouter from '../../routes/privateRouter';
import BoxFriend from '../BoxFriend/BoxFriend';
import BoxProfile from '../BoxProfile/BoxProfile';
import Node from '../Node/Node';

const ContentNav = ({ history, from }) => {
    const [isShow, setIsShow] = useState(false);
    const user = useSelector(state => state.userReducer.user);
    const divEL = useRef(null);

    const handleDropdown = (e) => {
        e.stopPropagation();
        setIsShow(!isShow)
    }

    const handleToProfile = (username) => {
        history.replace('/');
        history.replace(`dashboard/${username}`);
    }

    const logOut = () => {
        localStorage.removeItem("token");
        history.replace(from);
    }

    const { path, url } = useRouteMatch();

    useEffect(() => {
        const handleHiddenDropdown = (e) => {
            if (divEL.current && !divEL.current.contains(e.target)) {
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
        <>
            <div className="content_nav">
                <ul className="navbar-nav">
                    <li className="navbar-nav_item nav-item">
                        <NavLink exact to={`${url}/${user.username}`} activeClassName="selected" className="navbar-nav_link nav-link" >
                            <i className="ri-user-2-line ri-xl"></i>
                            <Node text="Profile" />
                        </NavLink>
                    </li>
                    <li className="navbar-nav_item nav-item">
                        <NavLink exact to={`${url}/${user.username}/friends`} activeClassName="selected" className="navbar-nav_link nav-link" >
                            <i className="ri-contacts-line ri-xl"></i>
                            <Node text="Friends" />
                        </NavLink>
                    </li>
                    <li className="navbar-nav_item nav-item">
                        <NavLink exact to={`${url}/${user.username}/favorites`} activeClassName="selected" className="navbar-nav_link nav-link" >
                            <i className="ri-star-s-line ri-xl"></i>
                            <Node text="Favorites" />
                        </NavLink>
                    </li >
                    <li className="navbar-nav_item nav-item">
                        <NavLink exact to={`${url}/${user.username}/archived`} activeClassName="selected" className="navbar-nav_link nav-link" >
                            <i className="ri-inbox-archive-line ri-xl"></i>
                            <Node text="Archived" />
                        </NavLink>
                    </li>
                </ul>
                <div ref={divEL} className={classNames('content_menu', { selected: isShow })} onClick={(e) => handleDropdown(e)} >
                    <div className="content_user-avatar" >
                        <img src={user.avatarUrl} alt="" />
                    </div>
                    <div className={classNames('content_dropdown', { show: isShow })} >
                        <div className="content_button" onClick={(e) => handleToProfile(user.username)}>
                            Profile
                            <i className="ri-profile-line ri-lg"></i>
                        </div>
                        <div className="content_line"></div>
                        <div className="content_button content_button--red" onClick={() => logOut()}>
                            Log out
                            <i className="ri-logout-circle-r-line ri-lg"></i>
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

