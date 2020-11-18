import React from 'react';
import './Overlay.scss';

const Overlay = ({ history }) => {
    return (
        <div className="overlay" onClick={() => history.goBack()}>

        </div>
    );
};

export default Overlay;