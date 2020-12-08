import React from 'react';
import './Content.scss';
import ContentBox from './ContentBox';
import ContentNav from './ContentNav';

const Content = ({ history, from }) => {
    return (
        <section className="content">
            <ContentNav history={history} from={from} />
            <div className="content_box">
                <ContentBox />
            </div>
        </section >
    );
};

export default Content;