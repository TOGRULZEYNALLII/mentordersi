import img1 from './assets/image 2.svg';
import img2 from './assets/image 9.png';
import img3 from './assets/image 10.svg';
import './imagessection.css'
import img4 from './assets/image 5.svg';
import img5 from './assets/image 6.svg';
import img6 from './assets/image 8.svg';
import Button from "../Buttons/Button"
function SectionImages (x){
    return(
    <>
        <div className='section-images'>
                <img className='img1' src={img1} alt="Main" />
                <img className='img2' src={img2} alt="Main" />
                <img className='img3' src={img3} alt="Main" />
        </div>
        <div className='step'>
            <p className='section-title'>STEP INTO STYLE</p>
        </div>
        <div className='section-images'>
            <img className='img1' src={img4} alt="Main" />
                <img className='img2' src={img5} alt="Main" />
                <img className='img3' src={img6} alt="Main" /> 
        </div>
        <div className='flex'>
       <button className='button-shopnow'>Shop Now</button>

        </div>
     
    </>)
}

export default SectionImages;