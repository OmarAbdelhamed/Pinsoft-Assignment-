import React from 'react';
import './Catagories.css';
import Electronics from './images/3.jpg';
import jewelry from './images/1.jpg';
import Men from './images/clothing-rack-with-floral-hawaiian-shirts-hangers-hat.jpg';
import Women from './images/young-pretty-woman-choosing-trying-model-shoes-shop.jpg';

const Catagories = (props) => {
  const ChangeHandler = function (Cat) {
    props.onChangeHandler(Cat);
  };

  

  return (
    <div className='categories-container'>
      <h4>Catagories</h4>
      <div className='categories-list'>
        <button
          className='single-category'
          value='electronics'
          onClick={() => {
            ChangeHandler('electronics');
          }}
        >
          <img src={Electronics} alt='' />
          <div className='category-title'>Electronics</div>
        </button>

        <button
          className='single-category'
          value="men's clothing"
          onClick={() => {
            ChangeHandler("men's clothing");
          }}
        >
          <img src={Men} alt='' />
          <div className='category-title'>Men's Clothing</div>
        </button>

        <button
          className='single-category'
          value="women's clothing"
          onClick={() => {
            ChangeHandler("women's clothing");
          }}
        >
          <img src={Women} alt='' />
          <div className='category-title'>women's Clothing</div>
        </button>

        <button
          className='single-category full-width'
          value='jewelery'
          onClick={() => {
            ChangeHandler('jewelery');
          }}
        >
          <img src={jewelry} alt='' />
          <div className='category-title'>jewelry</div>
        </button>
      </div>
    </div>
  );
};

export default Catagories;
