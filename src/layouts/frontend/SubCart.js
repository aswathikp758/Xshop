import React, { useState, useEffect } from "react";
 
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
import swal from 'sweetalert';
import CartPage from "./CartPage";
import {AiFillPlusSquare,AiFillMinusSquare} from "react-icons/ai";
export default function SubCart() {

  const navigate = useNavigate();
     
    const {id}=   useParams();
     
    const[message, setMessage]= useState('');
 
    const [inputs, setInputs] = useState([]);
    const [fileimage, setPhoto]= useState('');
   const [quantity,setQuantiy]=useState(1);  
 
    
    useEffect(() => {

      getproduct();

    },[]);
    function getproduct() {
        axios.get('http://127.0.0.1:8000/api/products/'+id).then(function(response) {
            console.log(response);
            setInputs(response.data.product);
        });
    }
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


    


  return (
    <div>
        <Navbar/>
        
            <div className="container" style={{'marginLeft':'15%'}}>
            <div className="row">
            
      <form enctype="multipart/form-data">
         <div className="card mt-5" style={{'max-width': '60%'}} >
        <div className="row no-gutters">
            <div className="col-sm-5" >
             <img src={`http://127.0.0.1:8000/public/Image/${inputs.image}`} alt="" className="card-img-top"  />
            </div>
            <div className="col-sm-7 bg-color">
                <div className="card-body">
                    <h5 className="card-title">{inputs.name||""}</h5>
                    <p className="card-text">{inputs.description }</p>
                    <p className="card-text">₹{inputs.price }</p>
                      <div className="form-inline mt-3 mb-3 ">
                        <label className="mr-5"> Quantity</label>
                       <Link onClick={handleDecrement}><span className="text-danger"><h2><AiFillMinusSquare/></h2></span></Link>
                       <label className='text-center mx-3'>{quantity}</label>
                       <Link  onClick={handleIncrement}><span className="text-danger"><h2><AiFillPlusSquare/></h2></span></Link>
                                               
                    </div>
                   <button type='button' className='btn btn-success' >Add to Cart</button>
                    <button type="submit" className="btn btn-success ml-5">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
      </form>
     

            </div>
        </div> 
        
        <Footer/>
    </div>
  )
}
