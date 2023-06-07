import React from 'react';
import Catagories from './Catagories';
import Items from './Items';
import Header from './Header';
import { useState, useEffect } from 'react';
import './Home.css';

const SearchArray = (text, props) => {
  const Array = props.Products.filter((product) =>
    product.title
      .toString()
      .toLowerCase()
      .includes(text.toString().toLowerCase())
  );
  return Array;
};

const Home = (props) => {
  const [FilteredCat, setFilteredCat] = useState('');
  const [text, setText] = useState('');
  const [Searched, setSearched] = useState([]);

  const [productsInCart, setProducts] = useState(
    JSON.parse(localStorage.getItem('shopping-cart')) || []
  );

  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(productsInCart));
  }, [productsInCart]);
  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    };
    setProducts([...productsInCart, newProduct]);
  };

  const onQuantityChange = (productId, count) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productId);
      if (productsIndex !== -1) {
        oldState[productsIndex].count = count;
      }
      return [...oldState];
    });
  };

  const onProductRemove = (product) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex(
        (item) => item.id === product.id
      );
      if (productsIndex !== -1) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState];
    });
  };

  const TextUpdate = (TheTxt) => {
    setText(TheTxt);
    // if (text.trim() === '') {
    //   setSearched(props.Products);
    // }
  };

  useEffect(() => {
    let active = true;

    if (text) {
      const data = SearchArray(text, props);
      if (data.error) {
        setSearched([]);
      } else {
        if (active) {
          setSearched(data);
        }
      }
      return () => {
        active = false;
        setSearched([]);
      };
    }
  }, [text, props]);

  const onChangeHandler = (selectedCat) => {
    setFilteredCat(selectedCat);
    // setSearched(filteredList);
  };

  const filteredList = props.Products.filter((product) => {
    if (FilteredCat === '') {
      return FilteredCat;
    } else return product.category === FilteredCat;
  });

  return (
    <div>
      <Header
        TextUpdate={TextUpdate}
        text={text}
        onQuantityChange={onQuantityChange}
        onProductRemove={onProductRemove}
        productsInCart={productsInCart}
        Products={props.Products}
      />
      <div className='Main'>
        <Catagories Selected={FilteredCat} onChangeHandler={onChangeHandler} />
        <Items
          Products={props.Products}
          items={filteredList}
          FilteredCat={FilteredCat}
          Searched={Searched}
          text={text}
          addProductToCart={addProductToCart}
        />
      </div>
    </div>
  );
};

export default Home;
