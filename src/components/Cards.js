import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Storage Solutions</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/'
              text='Simple cataloging of Existing Storage'
              label='Available'
              path='/services'
            />
            <CardItem
              src='/'
              text='Cataloging and Management'
              label='Available'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/'
              text='Full service Storage and Management'
              label='COMING SOON'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;