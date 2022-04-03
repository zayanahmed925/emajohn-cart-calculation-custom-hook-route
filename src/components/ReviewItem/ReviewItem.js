import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';
const ReviewItem = (props) => {
    const { handleRemoveProduct, product } = props
    // console.log(props)
    const { name, img, price, shipping, quantity } = product
    return (
        <div className="review-item-container">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="item-details">
                    <p className='title' title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</p>
                    <p>Price: ${price}</p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="dlt-btn-container">
                    <button onClick={() => handleRemoveProduct(product)} className='dlt-button'>
                        <FontAwesomeIcon className='btn-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;