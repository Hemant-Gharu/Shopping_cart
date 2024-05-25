import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../shoppigcart/ProductCard';
import { useCart } from '../context/Context';

const ProductList = () => {
   const [products, setProducts] = useState([]);
   const { addToCart } = useCart();

   useEffect(() => {
      axios.get('https://dummyjson.com/products')
         .then(response => setProducts(response.data.products))
         .catch(error => console.error('Error fetching products:', error));
   }, []);

   return (
      <div className="product-list">
         {products.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
         ))}
      </div>
   );
};

export default ProductList;
