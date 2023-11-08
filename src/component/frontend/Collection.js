import React, { useEffect, useState } from 'react'
import Navbar from '../../layouts/frontend/Navbar'
import Footer from '../../layouts/frontend/Footer';
import s1 from '../../assets/frontend/img/s1.webp'
import s2 from '../../assets/frontend/img/s2.webp'
import s3 from '../../assets/frontend/img/s3.webp'
import s8 from '../../assets/frontend/img/s8.jpg'
import { Slide } from 'react-slideshow-image';
import ProductListingCard from '../../layouts/frontend/ProductListingCard';

export default function Collection() {

    // const[product, setProduct]= useState([]);
     
    // useEffect( ()=>{
    //     const getProduct= ()=>{
    //         fetch("http://127.0.0.1:8000/api/products")
    //         .then(res=>{ return res.json()})
    //         .then(response=>{ 
    //             console.log(response.products)
    //             setProduct(response.products)
    //         })
    //         .catch(error=>{ console.log(error)});
    //     }
    //     getProduct();
    // },[]);
//     const spanStyle = {
//   padding: '20px',
//   background: '#efefef',
//   color: '#000000'
// }

// const divStyle = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundSize: 'cover',
//   height: '400px'
// }
const slideImages = [
  {
    url: `${s1}`      
  },
  {
    url: `${s2}`
 
  },
  {
    url: `${s3}`
   
  }
 
];
 //----------------------------------

     const[product, setProduct]= useState([]);
     
    useEffect( ()=>{
        const getProduct= ()=>{
            fetch("http://127.0.0.1:8000/api/mobile")
            .then(res=>{ return res.json()})
            .then(response=>{ 
                console.log(response.products)
                setProduct(response.products)
            })
            .catch(error=>{ console.log(error)});
        }
        getProduct();
    },[]);


 //----------------------------------

    const[fashion, setFashion]= useState([]);
     
    useEffect( ()=>{
        const getFashion= ()=>{
            fetch("http://127.0.0.1:8000/api/fashion")
            .then(res=>{ return res.json()})
            .then(response=>{ 
                console.log(response.fashions)
                setFashion(response.fashions)
            })
            .catch(error=>{ console.log(error)});
        }
        getFashion();
    },[]);

    //-------------------------------------
    const[appliance, setAppliance]= useState([]);
     
    useEffect( ()=>{
        const getAppliance= ()=>{
            fetch("http://127.0.0.1:8000/api/appliance")
            .then(res=>{ return res.json()})
            .then(response=>{ 
                console.log(response.appliances)
                setAppliance(response.appliances)
            })
            .catch(error=>{ console.log(error)});
        }
        getAppliance();
    },[]);

  
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
            <div className='container mt-5'>
          <h4 className='text-center'>Latest Mobile Collections</h4>
           <div className='row'>
            {product && product.map((pdata)=>{
            return(
               <div key={pdata.id} className='col'>
               <ProductListingCard  productData={pdata}/>
               </div>
            )
          })}
            </div>
            </div>
             <div className='container mt-5'>
          <h4 className='text-center'>Latest Fashions</h4>
           <div className='row'>
            {fashion && fashion.map((pdata)=>{
            return(
               <div key={pdata.id} className='col'>
               <ProductListingCard  productData={pdata}/>
               </div>
            )
          })}
            </div>
            </div>
             <div className='container mt-5'>
          <h4 className='text-center'>Latest Home appliances</h4>
           <div className='row'>
            {appliance && appliance.map((pdata)=>{
            return(
               <div key={pdata.id} className='col'>
               <ProductListingCard  productData={pdata}/>
               </div>
            )
          })}
            </div>
            </div>
            
        <div className='container-fluid mt-5'>
            <img src={s8} alt='' className='img-fluid'/> 
        </div>

        <Footer/>


    </div>
  )
}
