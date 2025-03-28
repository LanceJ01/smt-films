import React from 'react';
import '../App.css';
import { Button1 } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/trailerfinal.mp4' autoPlay loop muted playsInline/>
        <h1>SMT FILMS</h1>
        <p>DIRECTED BY SCHYLER TOBIN</p>
        <div className='hero-btns'>
            <Button1 
            className='btns' 
            buttonStyle='btn--primary' 
            buttonSize='btn--large'
            >
                Watch <i className='far fa-play-circle' />
            </Button1>
        </div>
    </div>
  );
}

export default HeroSection;