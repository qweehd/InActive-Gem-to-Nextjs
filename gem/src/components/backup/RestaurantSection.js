import React, { useState } from 'react';
import Grid from './Grid1';
import stores from '../../data';

const Restaurants = () => {
  const [storeItems, setStoreItems] = useState(stores);
  return (
    <section className='restaurants'>
      <div className='section__header__container'>
        <div className='section__header'>
          <h2>
            <span style={{ fontSize: '50px' }}>🍣</span>&nbsp;인기 맛집들을
            한눈에!
          </h2>
        </div>
        <div className='section__desc'>원쥴랭 추천 맛집</div>
      </div>
      <Grid stores={storeItems} />
    </section>
  );
};

export default Restaurants;
