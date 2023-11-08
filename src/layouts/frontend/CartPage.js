import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function CartPage() {
    const[product, setProduct]= useState([]);
     
    useEffect( ()=>{
        const getProduct= ()=>{
            fetch('http://127.0.0.1:8000/api/product_cart/'+localStorage.getItem('auth_id'))
            .then(res=>{ return res.json()})
            .then(response=>{ 
                console.log(response.cart)
                setProduct(response.cart)
            })
            .catch(error=>{ console.log(error)});
        }
        getProduct();
    },[]);
  
  return (
    <div>
        <Navbar/>
             <div className="container container_overflow">
                <div className="row">
                    <div className="col-12">
                        <h5 className="mb-4">Your Cart Items</h5> 
                        <table className='table  table-bordered table-striped table-hover '>
                           
                            <tbody>
                                 {
                                     product&& product.map((pdata, index)=>(
                                       
                                <tr style={{'border':'1px solid gray'}}>
                                     
                                    <td style={{'border':'1px solid gray'}}><img src={`http://127.0.0.1:8000/public/Image/${pdata.products.image}`} alt=""  height={100} width={100}/></td>
                                    <td style={{'border':'1px solid gray'}}>{pdata.products.name }</td>
                                    <td style={{'border':'1px solid gray'}}>{pdata.products.description }</td>
                                    <td style={{'border':'1px solid gray'}}>₹{pdata.products.price }</td><br/>
                                    <td style={{'border':'1px solid gray'}}>
                                       <Link to={`/purchasecart/${pdata.id}/cart`} style={{'textDecoration':'none'}} className='btn btn-danger'>Purchase</Link> </td> 
                                     
                                </tr> 
                                
                                ))}    
                            </tbody>
                        </table>
                      
                    </div>
                </div>
            </div> 
            <Footer/>

    </div>
  )
}
