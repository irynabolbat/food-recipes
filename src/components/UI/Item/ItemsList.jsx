import React from 'react';
import "./Item.css"

const ItemsList = ({children, extraClassName = null}) => {
    const className = !extraClassName ? "items_list_container" : `items_list_container ${extraClassName}`
    return (
        <ul className={className}>
            {children}
        </ul>
    );
};

export default ItemsList;