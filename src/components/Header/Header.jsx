import React from 'react';
import Images from '../../constants/image';
import ListMessage from '../ListMessage/ListMessage';
import './Header.scss';

const { Icon } = Images;

const Header = props => {
    return (
        <header className="header">
            <div className="header_navbar">
                <div className="navbar-brand">
                    <a className="navbar-brand_link nav-link" href="/home">
                        <img src={Icon} width="24" height="24" alt="" />
                        ChitChat
                </a>
                </div>
            </div>
            <ListMessage />
        </header >
    );
};

export default Header;