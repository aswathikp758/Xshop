import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import b1 from '../../assets/frontend/img/b11.webp';
import b2 from '../../assets/frontend/img/b12.webp';
import b3 from '../../assets/frontend/img/b13.webp';

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: `${b1}`      
  },
  {
    url: `${b2}`
 
  },
  {
    url: `${b3}`
   
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
            
              <div>
               
                <img src={slideImage.url} alt='' className='img-fluid'/>
              </div>
             
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow;