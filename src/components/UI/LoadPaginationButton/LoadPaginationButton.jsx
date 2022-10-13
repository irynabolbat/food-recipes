import React from 'react';
import "./LoadPaginationButton.css"
import {ArrowClockwise} from "react-bootstrap-icons";

const LoadPaginationButton = ({onClick, numberOfItems, setNumberOfItems}) => {
    const addItems = 6

    const loadMore = () => {
        setNumberOfItems(numberOfItems + addItems)
    }

    return (
        <div className="load_pagination_wrapper" onClick={loadMore}>
            <button className="load_pagination" onClick={onClick}>
                <ArrowClockwise className="load_icon"/>
                <span>Load More...</span>
                <ArrowClockwise className="load_icon"/>
            </button>
        </div>
    );
};

export default LoadPaginationButton;