import React, { useContext, useEffect } from 'react';
import classNames from 'classnames';
import { SocketContext } from '../../contexts/socket';
import './Notification.scss';

const Notification = ({ username, param }) => {
    const socket = useContext(SocketContext)

    useEffect(() => {
        socket.on('message', message => console.log(message));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [socket])

    return (
        <div className={classNames("notification")}>
        </div>
    );
};

export default Notification;