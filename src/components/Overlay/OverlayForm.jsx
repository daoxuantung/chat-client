import React from 'react';
import './Overlay.scss';

const OverlayForm = ({ handleCloseForm }) => {
    return (
        <div className="overlay overlay--top" onClick={() => handleCloseForm()}>

        </div>
    );
};

export default OverlayForm;