import React from 'react';
import './ListMessage.scss';

const ListMessage = props => {
    return (
        <div className="list-message">
            <div className="list-message_header">
                <div className="list-message_title">Chats</div>
                <div className="list-message_input">
                    <input type="text" placeholder="Search messages" />
                </div>
            </div>
        </div>
    );
};


export default ListMessage;