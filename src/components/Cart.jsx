// src/components/Cart.js

import React from 'react';
import { useCart } from '../context/Context';

const Cart = () => {
   const { state, dispatch } = useCart();

   const removeFromCart = (id) => {
      dispatch({ type: 'REMOVE_FROM_CART', payload: id });
   };

   const updateQty = (id, qty) => {
      dispatch({ type: 'UPDATE_QTY', payload: { id, qty: Number(qty) } });
   };

   return (
      <div className="cart">
         {state.cart.map(item => (
            <div key={item.id} className="cart-item">
               <img src={item.images[0]} height={200} width={150} />
               <h3>{item.title}</h3>
               <p>${item.price}</p>
               <input
                  type="number"
                  value={item.qty}
                  onChange={(e) => updateQty(item.id, e.target.value)}
               />
               <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
         ))}
      </div>
   );
};

export default Cart;
