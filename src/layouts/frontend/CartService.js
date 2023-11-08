import React from 'react'
import b4 from '../../assets/frontend/img/b4.gif'
import c1 from '../../assets/frontend/img/c1.png'
import c2 from '../../assets/frontend/img/c2.png'
import c3 from '../../assets/frontend/img/c3.png'
import c4 from '../../assets/frontend/img/c4.png'
import c5 from '../../assets/frontend/img/c5.png'
import f1 from '../../assets/frontend/img/f1.jpg'


export default function CartService() {
  return (
    <div >
        <div className='mt-5'>
           
         
           <img src={b4} alt='' width="100%" height="auto"/>
         
        </div>
        <div className='container form-inline mt-5'>
       
          <div className='ml-5'> 
             <img src={c1} alt='' width={100} height={100} />
             <div className='mr-5 '>
              <h6>Auhentic Products</h6></div>
          </div>
          <div>
             <img src={c2} alt='' width={100} height={100} />
             <div  className='mr-5'>
               <h6>Free Delivery*</h6>
             </div>
             
          </div>
          <div>
             <img src={c3} alt='' width={100} height={100} />
             <div  className='mr-5'>
               <h6>Easy Exchange & Return</h6>
             </div>
            
          </div>
          <div>
             <img src={c4} alt='' width={100} height={100} />
             <div  className='mr-5'>
               <h6>Express Store Pickup</h6>
             </div>
             
          </div>
          <div>
             <img src={c5} alt='' width={100} height={100} />
             <div  className='mr-5'>
              <h6>Free Alteration At Store</h6>
             </div>
             
          </div>
          </div>
          <div className='container-fluid mt-5' >
            <img src={f1} alt='' className='img-fluid'/>

          </div>


    </div>
  )
}
