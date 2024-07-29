import React from 'react'
import './Product.css'
const Product = ({productItems, handleAddProduct}) => {
  return (
    <div className='products'>
        {productItems.map((productItem) => {
          return(
           
            <div className='card'>
                <div key={productItem.id} className='product-image'>
                   <img src={productItem.image} alt={productItem.name}/>
                </div>

                <div className='product-name'>
                  <h2>{productItem.name}</h2>
                </div>

                <div className='product-price'>
                  <h3>{productItem.price}</h3>
                </div>

                <div>
                  <button className='product-add-button' onClick={() => handleAddProduct(productItem)}>Add to Cart</button>
                </div>

            </div>
          
          )
          })}
    </div>
  )
}

export default Product