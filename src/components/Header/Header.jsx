import React from 'react';
import Images from '../../constants/image';
import ListMessage from '../ListMessage/ListMessage';
import './Header.scss';

const { Logo } = Images;

const Header = () => {
    return (
        <header className="header">
            <div className="header_navbar">
                <div className="navbar-brand">
                    <a className="navbar-brand_link nav-link" href="/">
                        <img src={Logo} width="24" height="24" alt="" />
                        ChitChat
                </a>
                </div>
            </div>
            <ListMessage />
        </header >
    );
};

export default Header;