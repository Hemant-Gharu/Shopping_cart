import './App.css'
import ShoppingCart from './shoppigcart/ShoppingCart';
import ProductList from './shoppigcart/ProductList';

function App() {

   return (
      <div className="App">
         <h1>Shopping Cart Example</h1>
         <ProductList />
         <ShoppingCart />
      </div>
   );
}

export default App;
