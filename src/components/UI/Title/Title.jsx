import React from 'react';
import "./Title.css"

const Title = ({title}) => {
    return (
        <div className="title_wrapper">
            <h1>{title}</h1>
        </div>
    );
};

export default Title;