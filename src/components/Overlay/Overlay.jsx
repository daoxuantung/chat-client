import React from 'react';
import './Overlay.scss';

const Overlay = ({ handleCloseProfile }) => {
    return (
        <div className="overlay" onClick={() => handleCloseProfile()}>

        </div >
    );
};

export default Overlay;