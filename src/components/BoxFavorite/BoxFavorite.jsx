import React from 'react';
import { useHistory } from 'react-router-dom';
import Overlay from '../Overlay/Overlay';

const BoxFavorite = () => {
    const history = useHistory();
    return (
        <>
            <div>

            </div>
            <Overlay history={history} />
        </>
    );
};

export default BoxFavorite;