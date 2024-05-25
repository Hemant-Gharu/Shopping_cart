import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
