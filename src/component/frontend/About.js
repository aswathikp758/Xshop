import React from 'react'
import Navbar from '../../layouts/frontend/Navbar'
import Footer from '../../layouts/frontend/Footer'
import a1 from '../../assets/frontend/img/a1.jpg'
import a2 from '../../assets/frontend/img/a2.jpg'
import a3 from '../../assets/frontend/img/a3.jpg'
import a4 from '../../assets/frontend/img/a4.jpg'
import z1 from '../../assets/frontend/img/z1.jpg'
import z2 from '../../assets/frontend/img/z2.jpg'
import z3 from '../../assets/frontend/img/z3.jpg'
import z4 from '../../assets/frontend/img/z4.jpg'
import z5 from '../../assets/frontend/img/z5.jpg'
import z6 from '../../assets/frontend/img/z6.jpg'
import z7 from '../../assets/frontend/img/z7.jpg'
import z8 from '../../assets/frontend/img/z8.jpg'
import z9 from '../../assets/frontend/img/z9.jpg'
import z10 from '../../assets/frontend/img/z10.jpg'
import z11 from '../../assets/frontend/img/z11.jpg'
import z12 from '../../assets/frontend/img/z12.jpg'
import z13 from '../../assets/frontend/img/z13.jpg'
import z14 from '../../assets/frontend/img/z14.jpg'
import z15 from '../../assets/frontend/img/z15.jpg'
import z16 from '../../assets/frontend/img/z16.jpg'
import ab1 from '../../assets/frontend/img/ab1.webp'
import ab2 from '../../assets/frontend/img/ab2.webp'
import ab3 from '../../assets/frontend/img/ab3.webp'
import ab4 from '../../assets/frontend/img/ab4.webp'
import TestiMonial from '../../layouts/frontend/Testimonial'
import { motion } from 'framer-motion';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
export default function About() {

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
    url: `${a1}`      
  },
  {
    url: `${a2}`
 
  },
  {
    url: `${a3}`
   
  },
   {
    url: `${a4}`
   
  },
];


const spanStyle1 = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle1 = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages1 = [
  {
    url: `${ab2}`      
  },
  {
    url: `${ab3}`
 
  },
  {
    url: `${ab4}`
   
  },
  
];
  return (
   <div >
      
     
      <div className="slide-container " >
         <Navbar />
        <Slide  >
         {slideImages.map((slideImage, index)=> (
            <div key={index} >
              <div >
                <img src={slideImage.url} alt='' className='img-fluid '/>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    

      
       <motion.div className='container mt-5'
        variants={{
          hidden:{opacity:0,y:75},
          visible:{opacity:1,y:0},
        }}
        initial="hidden"
        animate="visible"
        transition={{duration:1,delay:0.35}}>
         <div className='row'>
          <div className='col-lg-6'>
                 <div className="slide-container">
                  <Slide>
                  {slideImages1.map((slideImage1, index)=> (
                      <div key={index}>
                      
                        <div>
                        
                          <img src={slideImage1.url} alt='' height={250} width="100%"/>
                        </div>
                      
                      </div>
                    ))} 
                  </Slide>
                </div>
          </div>
          <div className='col-lg-6'> 
          <h4 className='text-center'>ABOUT US</h4>
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                 It has survived not only five centuries, but also the leap into electronic typesetting, 
                 remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                 containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                 PageMaker including versions of Lorem Ipsum.</p>
                 </div>
         </div>



            

                
      </motion.div>
      <div className='mt-4'>
        <img src={ab1} alt='' className='img-fluid'/>
      </div>
      <motion.div className='container-fluid mt-5 '
      initial={{opacity:0,scale:0}}
       whileInView={{opacity:1,scale:1}}
       transition={{duration:1}}
       viewport={{once:true}}
      >
        <div className='row pb-3'>
          <div className='col'><img src={z1} alt='' height={200} width={200}/></div>
          <div className='col'><img src={z2} alt='' height={200} width={200}/></div>
          <div className='col'><img src={z3} alt='' height={200} width={200}/></div>
          <div className='col '><img src={z4} alt='' height={200} width={200}/></div>
         
        </div>
       <div className='row pb-3'>
           <div className='col '><img src={z5} alt='' height={200} width={200}/></div>
          <div className='col '><img src={z6} alt='' height={200} width={200}/></div>
          <div className='col '><img src={z7} alt='' height={200} width={200}/></div>
          <div className='col '><img src={z8} alt='' height={200} width={200}/></div>
          </div>
          <div className='row pb-3'>
          <div className='col '><img src={z9} alt='' height={200} width={200}/></div>
          <div className='col '><img src={z10} alt='' height={200} width={200}/></div>
          <div className='col '><img src={z11} alt='' height={200} width={200}/></div>
          <div className='col '><img src={z12} alt='' height={200} width={200}/></div>
        </div>
         <div className='row pb-3'>
          <div className='col '><img src={z13} alt='' height={200} width={200} /></div>
          <div className='col '><img src={z14} alt='' height={200} width={200}/></div>
          <div className='col '><img src={z15} alt='' height={200} width={200}/></div>
          <div className='col '><img src={z16} alt='' height={200} width={200}/></div>
         
        </div>

      </motion.div>
      <TestiMonial/>
      
         
       <Footer/>

    </div>
  )
}
