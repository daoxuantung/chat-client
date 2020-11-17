import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { showMenu } from '../../actions/dropdownMenu';
import './Content.scss';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import BoxProfile from '../BoxProfile/BoxProfile';
import BoxFriend from '../BoxFriend/BoxFriend';
import BoxFavorite from '../BoxFavorite/BoxFavorite';
import BoxArchived from '../BoxArchived/BoxArchived';

const Content = ({ user, history, from }) => {
    const isShow = useSelector(state => state.dropdownReducer);
    const dispatch = useDispatch();
    const handleShowDropdown = () => {

        dispatch(showMenu(!isShow))
    }

    const logOut = () => {
        localStorage.removeItem("token");
        history.replace(from);
        dispatch(showMenu(false));
    }

    const { path, url } = useRouteMatch({ path: '/home', url: '/' });

    return (
        user && <section className="content">
            <div className="content_nav">
                <ul className="navbar-nav">
                    <li className="navbar-nav_item nav-item">
                        <Link to={`${url}/profile`} className="navbar-nav_link nav-link" >Profile</Link>
                    </li>
                    <li className="navbar-nav_item nav-item">
                        <Link to={`${url}/friends`} className="navbar-nav_link nav-link" >Friends</Link>
                    </li>
                    <li className="navbar-nav_item nav-item">
                        <Link to={`${url}/favorites`} className="navbar-nav_link nav-link" >Favorites</Link>
                    </li >
                    <li className="navbar-nav_item nav-item">
                        <Link to={`${url}/archived`} className="navbar-nav_link nav-link" >Archived</Link>
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
            <Switch>
                <Route exact path={`${path}/profile`}>
                    <BoxProfile />
                </Route>
                <Route exact path={`${path}/friends`}>
                    <BoxFriend />
                </Route>
                <Route exact path={`${path}/favorites`}>
                    <BoxFavorite />
                </Route>
                <Route exact path={`${path}/archived`}>
                    <BoxArchived />
                </Route>
            </Switch>
        </section >
    );
};

export default Content;