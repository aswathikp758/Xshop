import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import {AiFillPlusSquare,AiFillMinusSquare} from "react-icons/ai";
import swal from 'sweetalert';
import axios from 'axios';
import Navbar from './Navbar';

export default function Purchase() {
    const[product, setProduct]= useState([]);
    const[message, setMessage]= useState('');
    const navigate = useNavigate();

      const {id}=   useParams();
    useEffect( ()=>{
        const getProduct= ()=>{
            fetch('http://127.0.0.1:8000/api/product_cart2/'+id)
            .then(res=>{ return res.json()})
            .then(response=>{ 
                console.log(response.cart)
                setProduct(response.cart)
            })
            .catch(error=>{ console.log(error)});
        }
        getProduct();
    },[]);

     const [quantity,setQuantiy]=useState(1);   
    var totalCartPrice=0;
    var cart_id;
    const handleDecrement=()=>{
        if(quantity>1){
            setQuantiy(prevCount=>prevCount-1);
        }
    }
    const handleIncrement=()=>{
        if(quantity<10){
            setQuantiy(prevCount=>prevCount+1);
        }
    }
     const updateStatus= async()=>{
        const formData= new FormData();
        formData.append('_method', 'PUT');
        formData.append('product_qty', quantity);
        formData.append('product_price', totalCartPrice);
            const response= await axios.post("http://127.0.0.1:8000/api/update_status/"+id, formData, {
            headers:{'Content-Type':"multipart/form-data"},
        });

        setMessage(response.data.message); //"message": "Product successfully updated.."
        console.log(response)
        
        setTimeout(()=>{
            swal("Order Confirmed");
            navigate('/viewcart');
        }, 2000);
    }
 
    const handleSubmit= async(e)=>{
      e.preventDefault();
      await updateStatus();
 
   }
  
  return (
    <div>
        <Navbar/>
        <center>
          <div className="container container_overflow">
                <div className="row" >
                    <div className="col-12">
                        <h5 className="mb-4">Product Details</h5> 
                        <p className="text-danger"> </p>                 
                                  {
                                       product&& product.map((pdata, index)=>(
                                         
                                    <div className="card mt-5" style={{'max-width': '60%','border':'1px solid transparent','box-shadow': 'rgba(0, 0, 0, 0.35) 0px 5px 15px','padding':'25px'}} >
                    <div className="row no-gutters">
                    <div className="col" >
                    <img src={`http://127.0.0.1:8000/public/Image/${pdata.products.image}`} alt="" />
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <h5 className="card-title text-center"  >{pdata.products.name }</h5>
                            <p className="card-text text-center">₹{pdata.products.price } </p>
                            <div className=' form-inline justify-content-center'>
                            <Link onClick={handleDecrement}><span className="text-danger"><h2><AiFillMinusSquare/></h2></span></Link>
                            <label className='text-center mx-3'>{quantity}</label>
                            <Link  onClick={handleIncrement}><span className="text-danger"><h2><AiFillPlusSquare/></h2></span></Link>
                            </div>
                          
                           
                        </div>
                        
                        <div className='text-center'><h6>Total Amount:</h6> ₹{totalCartPrice+=pdata.products.price*quantity}</div>
                         <div style={{'marginTop':'20px','marginLeft':'9px'}}><button className='btn btn-danger'onClick={handleSubmit}>Confirm Order</button></div>
                    </div>
                </div>

                
                </div>
                  
                    ))}    
                    </div>
                </div>
            </div>
            </center>
    </div>
  )
}
