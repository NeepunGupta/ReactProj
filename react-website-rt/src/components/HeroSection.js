import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>
        NEEPUN'S PAGE
      </h1>
      <p>
        Hello!
      </p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            START UP
        </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
            WATCH TRAILER <i className='far fa-play-circle'/>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
