import React from 'react';
import "./ButtonToTop.css"
import {ArrowUpCircleFill} from "react-bootstrap-icons";

const ButtonToTop = () => {
    return (
        <div className="btn_top_wrapper">
            <button className="btn_top" onClick={() => window.scrollTo(0, 0)}>
                <ArrowUpCircleFill className="btn_top_icon"/>
            </button>
        </div>
    );
};

export default ButtonToTop;