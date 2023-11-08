import React, { useRef } from 'react'
import cn1 from '../../assets/frontend/img/cn1.jpg'
import cn2 from '../../assets/frontend/img/cn1.webp'
import cn3 from '../../assets/frontend/img/cn2.webp'
import cn4 from '../../assets/frontend/img/cn3.webp'
import cn5 from '../../assets/frontend/img/cn4.webp'
import cn6 from '../../assets/frontend/img/cn5.webp'
import cn7 from '../../assets/frontend/img/cn7.webp'

import '../../assets/frontend/css/slide.css'
import Navbar from '../../layouts/frontend/Navbar'
import emailjs from '@emailjs/browser'
import Footer from '../../layouts/frontend/Footer'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
export default function Contact() {
     const form = useRef();
    

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w6i5kuv', 'template_hw5kq4y', form.current, 'StdL-dZoRgaZ4bTOT')
      .then((result) => {
          console.log(result.text);
           alert("Successfully posted");
           window.location.reload(false);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleQuery=()=>{
       
  }


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
    url: `${cn2}`      
  },
  {
    url: `${cn3}`
 
  },
  {
    url: `${cn4}`
   
  },
   {
    url: `${cn5}`
   
  },
   {
    url: `${cn6}`
   
  }
];

  return (
    <div>
        <Navbar/>
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
        <div className='container-fluid mt-5'>
            <div className='row'>
                <div className='col-lg-6'>
                <iframe className='border border-secondary' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250436.59730899605!2d75.6459975936001!3d11.256126131454613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x32150641ca32ecab!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1688726884396!5m2!1sen!2sin" width="450" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
               
            </div>
            <div className='col-lg-6'>
                 <form onSubmit={sendEmail} ref={form} className='pt-5 pr-5 '>
                <div className='form-group'>
                    <label>Name</label>
                   <input type="text" name='from_name' className='form-control' placeholder='Enter your name'/>
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input type="email" name='from_email' className='form-control' placeholder='Enter your Email'/>
                </div>
                <div className='form-group'>
                    <label>Message</label>
                    <textarea className='form-control' name='message' placeholder='Type your Query'></textarea>
                </div>
               <div>
                  <button className='btn btn-warning'>Submit</button>
               </div>
                
            </form>
            </div>
            </div>
            
        </div>
        <div>
            <img src={cn7} alt='' className='img-fluid'/>
        </div>
        <Footer/>


    </div>
  )
}
