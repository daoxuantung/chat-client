import classNames from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Switch, useRouteMatch } from 'react-router-dom';
import { showMenu } from '../../actions/dropdownMenu';
import PrivateRouter from '../../routes/privateRouter';
import BoxFriend from '../BoxFriend/BoxFriend';
// import BoxArchived from '../BoxArchived/BoxArchived';
// import BoxFavorite from '../BoxFavorite/BoxFavorite';
// import BoxFriend from '../BoxFriend/BoxFriend';
import BoxProfile from '../BoxProfile/BoxProfile';


const ContentNav = ({ history, from, handleHidden, socket }) => {
    const isShow = useSelector(state => state.dropdownReducer.showMenu);
    const user = useSelector(state => state.userReducer.user);
    const dispatch = useDispatch();

    const handleShowDropdown = () => {
        dispatch(showMenu(!isShow))
    }

    const handleToProfile = (username) => {
        dispatch(showMenu(!isShow));
        history.replace('/');
        history.replace(`dashboard/${username}`);
    }

    const logOut = () => {
        localStorage.removeItem("token");
        history.replace(from);
        dispatch(showMenu(false));
    }

    const { path, url } = useRouteMatch();

    return (
        <>
            <div className="content_nav">
                <ul className="navbar-nav" onClick={() => handleHidden()}>
                    <li className="navbar-nav_item nav-item">
                        <NavLink exact to={`${url}/${user.username}`} activeClassName="selected" className="navbar-nav_link nav-link" >Profile</NavLink>
                    </li>
                    <li className="navbar-nav_item nav-item">
                        <NavLink to={`${url}/${user.username}/friends`} activeClassName="selected" className="navbar-nav_link nav-link" >Friends</NavLink>
                    </li>
                    <li className="navbar-nav_item nav-item">
                        <NavLink to={`${url}/${user.username}/favorites`} activeClassName="selected" className="navbar-nav_link nav-link" >Favorites</NavLink>
                    </li >
                    <li className="navbar-nav_item nav-item">
                        <NavLink to={`${url}/${user.username}/archived`} activeClassName="selected" className="navbar-nav_link nav-link" >Archived</NavLink>
                    </li>
                </ul>
                <div className="content_user">
                    <p className="content_user-space" onClick={() => handleHidden()}></p>
                    <p className="content_user-name" onClick={() => handleShowDropdown()}>{user.name}</p>
                    <div className="content_user-avatar" onClick={() => handleShowDropdown()}>
                        <img src={user.avatarUrl} alt="" />
                    </div>
                    <div className={classNames('content_dropdown', { show: isShow })}>
                        <div className="content_button" onClick={() => handleToProfile(user.username)}>
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
                    <BoxProfile socket={socket} />
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

