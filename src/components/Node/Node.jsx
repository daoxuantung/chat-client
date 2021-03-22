import React from 'react';
import './Node.scss';

const Node = ({ text }) => {
    return (
        <div className={`node node_${text} `}>
            {text}
        </div>
    );
};

Node.propTypes = {

};

export default Node;