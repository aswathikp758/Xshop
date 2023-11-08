import React, { useEffect, useState } from 'react'
import '../../assets/frontend/css/slide.css'
import ProductListingCard from './ProductListingCard';
export default function CardProduct() {
  const[product, setProduct]= useState([]);
     
    useEffect( ()=>{
        const getProduct= ()=>{
            fetch("http://127.0.0.1:8000/api/products")
            .then(res=>{ return res.json()})
            .then(response=>{ 
                console.log(response.products)
                setProduct(response.products)
            })
            .catch(error=>{ console.log(error)});
        }
        getProduct();
    },[]);

  return (
     <div className='container mt-5'>
           <div className='row'>
            {product.map((pdata)=>{
            return(
               <div key={pdata.id} className='col'>
               <ProductListingCard  productData={pdata}/>
          </div>

            )
          })}
            </div>
            </div>
  )
}
