import React from 'react'
import './Cart.css'
const Cart = ({cartItems, handleAddProduct, handleRemoveProduct}) => {
  
  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)
  return (
    <div className='cart-items'>
        <div className='cart-items-header'>Cart</div>

        {cartItems.length === 0 && (
         <div className='cart-items-empty'>No items are added</div>
         )}

         <div>
            {cartItems.map((item) => {
                return(
                <div key={item.id} className='cart-items-list'>
                    <img className='cart-items-image' src={item.image} alt={item.name}/>
                    <div className='cart-item-name'>{item.name}</div>
                    <div className='cart-items-function'>
                      <button className='cart-items-add' 
                      onClick={() => handleAddProduct(item)}>+</button>
                      <button className='cart-items-remove' 
                      onClick={() => handleRemoveProduct(item)}>-</button>
                    </div>
                    <div className='cart-items-price'>
                        {item.quantity} ${item.price}
                    </div>
                </div>
                )
            })}

            <div className='cart-items-total'>
              Total Price:
              <div className='cart-items-total-price'>${totalPrice}</div>
            </div>
         </div>
    </div>
  )
}

export default Cart