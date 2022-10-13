import React from 'react';
import "./Item.css"

const Item = ({children, onClick, extraClassName = null}) => {
    const className = !extraClassName ? "item" : `item ${extraClassName}`

    return (
        <li className={className} onClick={onClick}>
            {children}
        </li>
    );
};

export default Item;