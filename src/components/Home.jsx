import { CartState } from "../context/Context"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => setItems(res.data.products));
  }, []);

  const addToCart = (item) => {
    const existingItem = cart.find(i => i.id === item.id);
    if (existingItem) {
      setCart(cart.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    setCart(cart.filter(i => i.id !== item.id));
  };

  return (
    <div>
      {items.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.price}</p>
          <button onClick={() => addToCart(item)}>Add to cart</button>
        </div>
      ))}
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      <h3>Total: {cart.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
    </div>
  );
};

export default Home;