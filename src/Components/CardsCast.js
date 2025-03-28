import React from 'react';
import CardItem from './CardItem';

function CardsCast() {
  return (
    <div className='cards'>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='images/schyler-img.jpg'
                    text='Schyler'
                    label='Director'
                    path='/'
                    />
                    <CardItem
                    src='images/lance-img.jpg'
                    text='Lance'
                    label='Actor/Developer'
                    path='/'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='images/jimmy-img.jpg'
                    text='Jimmy'
                    label='Actor'
                    path='/'
                    />
                    <CardItem
                    src='images/julia-img.jpg'
                    text='Julia'
                    label='Actress'
                    path='/'
                    />
                    <CardItem
                    src='images/sairy-img.jpg'
                    text='Sairy'
                    label='Actress'
                    path='/'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default CardsCast