import React from 'react';
import OneItem from './OneItem';
import './Items.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1300 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1300, min: 1115 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1115, min: 580 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 580, min: 0 },
    items: 1,
  },
};
const Items = (props) => {
  if (
    props.Products.length === 0 ||
    (props.Searched.length === 0 && props.text)
  ) {
    return <h2 className='item-list__fallback'>Found no Products.</h2>;
  } else if (props.FilteredCat === '' && props.Searched.length === 0) {
    return (
      <Carousel className='items-list' responsive={responsive}>
        {props.Products.map((product) => (
          <OneItem
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            addProductToCart={props.addProductToCart}
            product={product}
          ></OneItem>
        ))}
      </Carousel>
    );
  } else if (props.Searched !== [] && props.text) {
    return (
      <Carousel className='items-list' responsive={responsive}>
        {props.Searched.map((product) => (
          <OneItem
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            addProductToCart={props.addProductToCart}
            product={product}
          />
        ))}
      </Carousel>
    );
  } else if (props.FilteredCat !== '') {
    return (
      <Carousel className='items-list' responsive={responsive}>
        {props.items.map((product) => (
          <OneItem
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            addProductToCart={props.addProductToCart}
            product={product}
          />
        ))}
      </Carousel>
    );
  }
};

export default Items;
