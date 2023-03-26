import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]= useState([])
    useEffect(()=>{
        fetch ('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleAddToCart =(product)=>{
        console.log(product)
    }

    return (
        <div className='Shop-container'>
            <div className="Product-container">
                {
                    products.map(product=> <Products
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Products>)
                    
                }

            </div>
            <div className="Card-container">
                <h3>hello vai</h3>

            </div>
            
        </div>
    );
};

export default Shop;