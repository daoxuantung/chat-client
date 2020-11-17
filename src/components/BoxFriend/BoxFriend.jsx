import React from 'react';
import { useHistory } from 'react-router-dom';
import Overlay from '../Overlay/Overlay';

const BoxFriend = () => {
    const history = useHistory();
    return (
        <>
            <div>

            </div>
            <Overlay history={history} />
        </>
    );
};

export default BoxFriend;