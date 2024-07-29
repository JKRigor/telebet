import './App.css';
import data from './components/back/Data/data';
import Banner from './components/back/front/Banner';
import {BrowserRouter as Router,} from "react-router-dom"
import RoutesPage from './components/back/front/Routes/RoutesPage';
import React, {useState} from 'react';


function App() {
  const {productItems} = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist){
      setCartItems(cartItems.map((item) => item.id === product.id ? 
      {...ProductExist, quantity: ProductExist.quantity + 1} : item));
    }
    else{
      setCartItems([...cartItems, {...product, quantity: 1}])
    }

  }

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
    else{
      setCartItems(
        cartItems.map((item) => item.id === product.id ? {...ProductExist,
           quantity: ProductExist.quantity - 1} : item)
      );
    }
  }
  return (
    <div className="App">
    <Router>
        <Banner cartItems={cartItems}/>
        <RoutesPage 
        productItems={productItems} 
        cartItems={cartItems} 
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}
        />
    </Router>
    </div>
  );
}

export default App;
