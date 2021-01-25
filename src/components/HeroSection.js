import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
           <h1>JOIN THE STORAGE REVOLUTION</h1>
           <p>What are you waiting for?</p>
           <div className="hero-btn">
               <Button 
               className='btn' 
               buttonStyle='btn--outline'
               buttonSize='btn--large'
               >
                   GET STARTED
                   </Button>
                <Button 
                to='/how-it-works'
               className='btn' 
               buttonStyle='btn--outline'
               buttonSize='btn--large'
               >
                   LEARN MORE
                   </Button>
           </div>
        </div>
    )
}

export default HeroSection;
