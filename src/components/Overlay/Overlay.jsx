import React from 'react';
import './Overlay.scss';

const Overlay = ({ history }) => {
    return (
        <div className="overlay" onClick={() => history.push('/')}>

        </div>
    );
};

export default Overlay;