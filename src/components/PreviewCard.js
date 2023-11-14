import React from 'react';
import './Cardstyles.css';
import SedanIcon from '../images/icon-sedans.svg';
import SUVsIcon from '../images/icon-suvs.svg';
import LuxuryIcon from '../images/icon-luxury.svg';



const PreviewCard = () => {
  return (
    <div className='preview-card'>
        <div className='card-section' id='sedan-preview'>
            <img src={SedanIcon} alt='Sedan' width='30' height='30' />
            <h1>SEDANS</h1>
            <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
  or on your next road trip.</p>
            <button className="learn-more-button">Learn More</button>
        </div>

        <div className='card-section' id='suvs-preview'>
            <img src={SUVsIcon} alt='SUVs' width='30' height='30' />
            <h1>SUVS</h1>
            <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
  and off-road adventures.</p>
            <button className="learn-more-button">Learn More</button>
        </div>

        <div className='card-section' id='luxury-preview'>
            <img src={LuxuryIcon} alt='Luxury' width='30' height='30' />
            <h1>LUXURY</h1>
            <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
  rental and arrive in style.</p>
            <button className="learn-more-button">Learn More</button>
        </div>
    </div>
  )
}

export default PreviewCard
