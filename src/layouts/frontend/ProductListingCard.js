import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import {motion, useMotionValue, useTransform} from 'framer-motion';
import swal from 'sweetalert';


const ProductListingCard = ({productData}) => {
  const x=useMotionValue(0);
  const y=useMotionValue(0);
  const rotateX=useTransform(y,[-100,100],[30,-30]);
  const rotateY=useTransform(x,[100,-100],[-30,30]);

    const submitAddtocart=(e)=>{
        e.preventDefault();

        const data={
             user_id:localStorage.getItem('auth_id'),
             product_id:productData.id,
             product_qty:productData.quantity,
             product_price:productData.price,
             product_status:"pending",
        }
        axios.post('http://127.0.0.1:8000/api/add_to_cart',data).then(res=>{
         
             if(res.data.status===201){
                swal("Success",res.data.message,"success");
             }else if(res.data.status===409){
                swal("Warning",res.data.message,"warning");
             } 
             else if(res.data.status===41){
                swal("Error",res.data.message,"error");
             }                                    
        });
       


    }
  
  return (  
        <div className='container mt-5' >
         
            
          {/* <div className='row' style={{perspective:2000}}>
           
          <div className='card-group'> */}
           
  <motion.div className='person' 
   style={{x,y,rotateX,rotateY,z:100}}
         drag
         dragElastic={0.18}
         dragConstraints={{top:0,left:0,right:0,bottom:0}}
         whileTap={{cursor:'grabbing'}}
         whileHover={{scale:0.9,opacity:0.9}}>
             

                {productData && productData.image?( 
                  
                <center><img src={`http://127.0.0.1:8000/public/Image/${productData.image}`} alt=''height="180px" width="250px"/> </center>):
                ( <img src="" alt='Loading' className=''/>    )

                }
                 
              {/* </div>
              <div className='card-title bg-dark text-white'> */}
                  {productData && productData.name?(<h4 className='text-center'><b>{productData.name}</b></h4> ):
                ( <h3 className='text-center'>Not found </h3>  )

                }
                 {productData && productData.description?( 
               
                <p className='text-center'>{productData.description}</p>):
                ( 
                <p className='text-center'>error</p> )

                }
                {productData && productData.price?( 
               
                 <p className='text-center'>&#8377;{productData.price}</p>):
                ( 
                <p className=''>error</p> )

                }
                {/* <div  className='mb-2'> */}
                  <center>
                  <button type='button' className='btn btn-success' onClick={submitAddtocart}>Add to Cart</button>
                  </center>
                 
               </motion.div>
           
          
             </div>
            // </div>
            // </div>
  )
}

export default ProductListingCard