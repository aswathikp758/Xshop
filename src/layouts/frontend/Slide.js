import React from 'react'
import one from '../../assets/frontend/img/main.png'
import ad from '../../assets/frontend/img/ad2.jpg'
import bg1 from '../../assets/frontend/img/bg1.jpg'
import '../../assets/frontend/css/slide.css'
import {motion} from 'framer-motion'

export default function Slide() {
  return (



<div className='bg container-fluid mt-3 mb-5'>
    <div className="skew-c">
     
    </div>
    <div className='row'>
        <motion.div 
      
          initial={{x:'-100vw'}}
          animate={{x:0}}
          transition={{type:'spring',stiffness:50}}
        className='col slide-text ml-5'>


        <h1 className='slide-head pb-3'>Welcome To <span className='text-pink'>XshopEs</span> </h1>
        <p className='text-secondary'>See how your users experience your website in realtime or view</p>
        <p className='text-secondary'>trends to see any changes in performance over time.</p>
        <button type='button' className='btn btn-danger'>View More</button>
        </motion.div>
        <motion.div className='col'
       initial={{opacity:0,scale:0}}
       whileInView={{opacity:1,scale:1}}
       transition={{duration:1.9}}
       viewport={{once:true}}
        whileHover={{scale:0.9,opacity:0.2}}
        >
          <img src={one} alt=''  height={500} width={700} className='d-md-block d-none'/>          
    </motion.div>
    </div>

   
    

</div>
  )
}
