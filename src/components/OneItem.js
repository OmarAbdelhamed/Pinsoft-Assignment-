import React from 'react';
import './OneItem.css';

const OneItem = (props) => {
  return (
    <div className='Card'>
      <div className='img-box'>
        <img src={props.image} alt='' />
      </div>
      <div className='title'>
        <h4>{props.title}</h4>
        <h3 className='price'>${props.price}</h3>
        <button
          className='buy'
          onClick={() => {
            props.addProductToCart(props.product);
          }}
        >
          Add To Basket
        </button>
      </div>
    </div>
  );
};

export default OneItem;
