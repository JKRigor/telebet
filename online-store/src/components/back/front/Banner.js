import React from 'react'
import {Link} from 'react-router-dom'
import './Banner.css'
const Banner = ({cartItems}) => {
  return (
    <header className='header'>
      <div>
          <h1>
            <Link to="/" className='logo'>
              Telebet
            </Link>
          </h1>
      </div>
      <div className='header-links'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
          <li>
            <Link to="/cart" className='cart'><i class="bi bi-cart-check-fill"/>
              <span className='cart-length'>{cartItems.length === 0 ? "" : cartItems.length}</span>
              </Link>
          </li>
        </ul>
      </div>

    </header>
  )
}

export default Banner