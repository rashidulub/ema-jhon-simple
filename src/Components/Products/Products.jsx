import React from 'react';
import './Products.css'

const Products = (props) => {
    const { img, name, seller, ratings, price } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'> {name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} Stars</p>
            </div>

            <button className='cart-btn'>Add To Cart</button>
        </div>
        
    );
};

export default Products;