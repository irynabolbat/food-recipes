import React from 'react';
import "./Item.css"

const ItemImg = ({imgSrc, imgAlt, extraClassName=null}) => {
    const className = !extraClassName ? "item_img" : `item_img ${extraClassName}`
    return (
        <img src={imgSrc} alt={imgAlt} className={className} />
    );
};

export default ItemImg;