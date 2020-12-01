import React from 'react';
import './Overlay.scss';

const Overlay = ({ history }) => {
    return (
        <div className="overlay" onClick={() => history.push('/dashboard')}>

        </div>
    );
};

export default Overlay;