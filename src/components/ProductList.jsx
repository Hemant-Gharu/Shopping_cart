// src/components/ProductList.js

import React from 'react';
import { useCart } from '../context/Context';

const ProductList = () => {
   const { state, dispatch } = useCart();

   const addToCart = (id) => {
      dispatch({ type: 'ADD_TO_CART', payload: id });
   };

   return (
      <div className="product-list">
         {state.products.map(product => (
            <div key={product.id} className="product">
               <img src={product.images[0]} height={200} width={150} />
               <h3>{product.title}</h3>
               <p>{product.description}</p>
               <p>${product.price}</p>
               <button onClick={() => addToCart(product.id)}>Add to Cart</button>
            </div>
         ))}
      </div>
   );
};

export default ProductList;
