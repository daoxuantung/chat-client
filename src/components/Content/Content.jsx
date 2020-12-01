import React from 'react';
import './Content.scss';
import ContentBox from './ContentBox';
import ContentNav from './ContentNav';

const Content = ({ history, from, handleHidden, socket }) => {
    return (
        <section className="content">
            <ContentNav history={history} from={from} handleHidden={handleHidden} socket={socket} />
            <div className="content_box" onClick={() => handleHidden()}>
                <ContentBox />
            </div>
        </section >
    );
};

export default Content;