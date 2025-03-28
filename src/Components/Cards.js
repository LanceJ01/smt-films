import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
        <h1>Films</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='images/trailer-img.jpg'
                    text='Film #1'
                    label='Thriller'
                    path='/films'
                    />
                    {/* 
                    Add in new films here
                    <CardItem 
                    src='images/img-9.jpg'
                    text='Movie #1'
                    label='Thriller'
                    path='/films'
                    /> 
                    */}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards