import React from 'react';
import { SiSinglestore } from 'react-icons/si';
import { BsCart4 } from 'react-icons/bs';
import './Header.css';
import search from './images/search.png';
import { useState } from 'react';
import ShoppingCart from './ShoppingCart';

const Header = (props) => {
  const [cartsVisibility, setCartVisible] = useState(false);

  return (
    <div>
      <ShoppingCart
        visibility={cartsVisibility}
        products={props.productsInCart}
        onClose={() => setCartVisible(false)}
        onQuantityChange={props.onQuantityChange}
        onProductRemove={props.onProductRemove}
        Products={props.Products}
      />
      <div className='Header'>
        <div className='search-bar'>
          <input
            type='text'
            placeholder='Search'
            value={props.text}
            onChange={(event) => props.TextUpdate(event.target.value)}
          />
          <button type='submit'>
            <img src={search} alt='' />
          </button>
        </div>
        <h1>
          <SiSinglestore className='icon' /> Pinsoft Store
        </h1>
        <button
          className='btn shopping-cart-btn'
          onClick={() => setCartVisible(true)}
        >
          <BsCart4 size={24} />
          {props.productsInCart.length > 0 && (
            <span className='product-count'>{props.productsInCart.length}</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
