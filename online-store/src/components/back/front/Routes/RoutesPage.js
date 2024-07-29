import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../Products/Product'
import SigningUp from '../SignUp/SigningUp'
import Cart from '../Cart/Cart'

const RoutesPage = ({productItems, cartItems, handleAddProduct, handleRemoveProduct}) => {
  return (
    <div>
      <Routes>
        <Route path="/" 
        element={<Product productItems={productItems} 
        handleAddProduct={handleAddProduct}/>}/>
        <Route path="/sign-up" element={<SigningUp/>}/>
        <Route path="/cart" element={<Cart cartItems={cartItems} 
        handleAddProduct={handleAddProduct}
        handleRemoveProduct={handleRemoveProduct}/>}/>
      </Routes>
    </div>
  )
}

export default RoutesPage