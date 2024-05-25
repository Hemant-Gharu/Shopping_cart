import React from 'react';
import { useCart } from '../context/Context';

const ShoppingCart = () => {
   const { cart, removeFromCart } = useCart();

   return (
      <div>
         <h1>Shopping Cart</h1>
         <div className="cart-list">
            {cart.map(item => (
               <div key={item.id} className="cart-item">
                  <h2>{item.title}</h2>
                  <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
               </div>
            ))}
         </div>
      </div>
   );
};

export default ShoppingCart;
