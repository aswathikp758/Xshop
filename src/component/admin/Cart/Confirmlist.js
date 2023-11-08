import React, { useState, useEffect } from "react";
 
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../../layouts/admin/Navbar";
import Sidebar from "../../../layouts/admin/Sidebar";

 
function Confirmlist()
{ 
    const[cartlist, setCartlist]= useState([]);
      
     
    useEffect( ()=>{
        const getCart= ()=>{
            fetch("http://127.0.0.1:8000/api/view_confirmorder")
            .then(res=>{ return res.json()})
            .then(response=>{ 
                console.log(response.cart)
                setCartlist(response.cart)
            })
            .catch(error=>{ console.log(error)});
        }
        getCart();
    },[]);
  
     
    return(
       
         <React.Fragment>
          <div>
            <Navbar/>
    
           <div id="layoutSidenav">
                
            <div id="layoutSidenav_nav">
                   <Sidebar/>
            </div>
             <div id="layoutSidenav_content">
            
            <div className="container container_overflow">
                <div className="row table-responsive" >
                    <div className="col-12">
                        <h5 className="mb-4">Category List</h5> 
                        <p className="text-danger"> </p>                 
                                <table className="table  table-bordered table-striped table-hover">
                                <thead className="thead-dark">
                                <tr>
                                <th scope="col">Sr.No</th>
                                <th scope="col">UserID</th>
                                <th scope="col">Product</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                                </tr>
                                </thead>
                                <tbody >
                                    {
                                       cartlist&&cartlist.map((cdata, index)=>(
                                            <tr key={index}>
                                            <td>{cdata.id} </td>
                                            <td>{cdata.user_id } </td>
                                            <td>{cdata.products.name}</td>
                                            <td>{cdata.product_qty}</td>
                                            <td>{cdata.product_price}</td>
                                            

                                            
                                           
                                            </tr>
                                        ))
                                    }
                               
                                                                
                                </tbody>
                                </table>  
                    </div>
                </div>
            </div>
             
            </div>
                {/* <Footer/>  */}
          </div>
        </div>
        </React.Fragment>
    );
}
export default Confirmlist;