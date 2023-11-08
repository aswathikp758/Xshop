import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../assets/frontend/css/slide.css';
import cbg from '../../assets/frontend/img/cbg.png'
import {motion} from 'framer-motion'
export default function CategorySelect() {
     const[categorylist, setCategorylist]= useState([]);
     
    useEffect( ()=>{
        const getCategory= ()=>{
            fetch("http://127.0.0.1:8000/api/category")
            .then(res=>{ return res.json()})
            .then(response=>{ 
                console.log(response.category)
                setCategorylist(response.category)
            })
            .catch(error=>{ console.log(error)});
        }
        getCategory();
    },[]);
    
    
  return (
     <motion.div className='container-fluid mt-4 '
    
    variants={{
          hidden:{opacity:0,y:75},
          visible:{opacity:1,y:0},
        }}
        initial="hidden"
        animate="visible"
        transition={{duration:0.5,delay:1}}
     >
        
             <div className="row">
                                 {
                                        categorylist.map((cdata, index)=>(
                                           <div className='col '>
                                           
                                            
                                             {/* <Link to={`/addtocart/${cdata.id}/cart`} > */}
                                           <div> <img src={`http://127.0.0.1:8000/public/Image/${cdata.image}`} alt="" height={70} width={100} className=' cbg' /></div>
                                            {/* </Link> */}
                                           <div> <label className='text-center ml-2'>{cdata.name}</label></div>
                                           
                                           
                                           
                                            </div>
                                        ))
                                    }
                               
                                                                
                              
                                </div>  
        </motion.div>

   
  )
}
