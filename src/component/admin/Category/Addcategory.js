import React, { useState } from "react";
 
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../../layouts/admin/Footer";
import Sidebar from "../../../layouts/admin/Sidebar";
import Navbar from "../../../layouts/admin/Navbar";
 
function Addcategory()
{  
    const navigate = useNavigate();
     
    const[txtname, setName]= useState('');
    const[fileimage, setPhoto]= useState('');
    const[message, setMessage]= useState('');

   

   
 
    const uploadCategory= async()=>{
        // console.log(fileimage)
        const formData= new FormData();
        formData.append('name', txtname);
        formData.append('image', fileimage);
        
        const responce= await axios.post("http://127.0.0.1:8000/api/category", formData, {
            headers:{'Content-Type':"multipart/form-data"},
        } );
 
        if(responce)
        {
            console.log(responce)
            setMessage(responce.message); //"message": "Product successfully created."
            setTimeout(()=>{
                navigate('/categorylist');
            }, 2000);
        }
    }
 
    const handleSubmit= async(e)=>{
      e.preventDefault();
      await uploadCategory();
 
   }


    return(
         <React.Fragment>
            
         <div>
            <Navbar/>
    
           <div id="layoutSidenav">
                
            <div id="layoutSidenav_nav">
                   <Sidebar/>
            </div>
             <div id="layoutSidenav_content">
            
             <div className="container">
            <div className="row">
              <div className="col-md-8 mt-4">
               
                <p className="text-warning">{ message}</p>                              
                 
                    <form onSubmit={handleSubmit} className="box-shadow form">    
                    <div> <h5 className="mb-4">ADD CATEGORY</h5> </div>         
                    <div className="mb-3 row">
                    <label  className="col-sm-3">Category</label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" onChange={ (e)=>setName(e.target.value)}/>
                    </div>
                    </div>
 
                    <div className="mb-3 row">
                    <label  className="col-sm-3"> Image</label>
                    <div className="col-sm-9">
                    <input type="file" className="form-control" onChange={(e)=>setPhoto(e.target.files[0])} />
                    </div>
                    </div>
 
                    <div className="mb-3 row">
                    <label className="col-sm-3"></label>
                    <div className="col-sm-9">
                    <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                    </div>
                     </form>
              </div>
            </div>
        </div>
            </div>
              
          </div>
        </div>
        </React.Fragment>
    );
}
export default Addcategory;