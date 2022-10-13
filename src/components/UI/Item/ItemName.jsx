import React from 'react';
import "./Item.css"

const ItemName = ({itemName}) => {
    return (
        <p>
            {itemName}
        </p>
    );
};

export default ItemName;