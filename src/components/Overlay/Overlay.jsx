import React from 'react';
import { useDispatch } from 'react-redux';
import { getFriend } from '../../actions/request';
import './Overlay.scss';

const Overlay = ({ history }) => {
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(getFriend(null));
        history.push('/dashboard')
    }

    return (
        <div className="overlay" onClick={() => handleClose()}>

        </div >
    );
};

export default Overlay;