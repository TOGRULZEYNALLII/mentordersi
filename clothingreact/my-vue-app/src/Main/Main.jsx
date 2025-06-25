 import React from 'react';
import './main.css'; // Assuming you have a CSS file for styling
 import Mainimg from './assets/image 4(1).svg'; // Adjust the path as necessary
 import Button from "../Buttons/Button"


 function Main () {

  return (
    <div className='main-container'>
    
    <div className="main">
        <div className="text-container">
            <h1 className='main-title'>Discover your signature style with us</h1>
            <p className='main-description'>Embrace Fashion That Speaks to Your Unique Personality and Confidence. Explore Our Collection Today!</p>
        </div>
        <div className='gap'>
            <button id='b' className='explore-button'>Explore</button>
           <Button />
        </div>

        <div>
            <p className='curated-collections'>Your Next Great Look Awaits in Our Curated Collections </p>
        </div>
     
    </div>


    <div className='image-container'>
        <img src={Mainimg} alt="Main" />
    </div>
    </div>
    
  );
}   
export default Main;