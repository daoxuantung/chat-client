import { faTimes, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Overlay from '../Overlay/Overlay';
import './BoxFriend.scss';

const BoxFriend = () => {
    const history = useHistory();
    return (
        <>
            <div className="profile friends">
                <div className="profile_header">
                    <h2 className="profile_title">Friends</h2>
                    <div className="profile_group">
                        <div className="profile_btn profile_btn--edit btnShow">
                            <FontAwesomeIcon icon={faUserPlus} size="2x" />
                        </div>
                        <div className="profile_btn profile_btn--danger" onClick={() => history.push('/dashboard')}>
                            <FontAwesomeIcon icon={faTimes} size="2x" />
                        </div>
                    </div>
                </div>
                <div className="list-message_input friends_input">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="friends_body">
                </div>
                {/* <Overlay history={history} /> */}
            </div>
        </>
    );
};

export default BoxFriend;