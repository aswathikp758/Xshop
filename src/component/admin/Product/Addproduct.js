import React, { useEffect, useState } from "react";
 
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../layouts/admin/Navbar";
import Sidebar from "../../../layouts/admin/Sidebar";
import Footer from "../../../layouts/admin/Footer";
 
function Addproduct()
{  
    const navigate = useNavigate();
     
    const[txtname, setName]= useState('');
    const[txtcategory, setCategory]= useState('');
    const[txtquantity, setQuantity]= useState('');
    const[txtprice, setPrice]= useState('');
    const[txtdescription, setdescription]= useState('');
    const[fileimage, setPhoto]= useState('');
    const[message, setMessage]= useState('');
 
    const uploadProduct= async()=>{
        // console.log(fileimage)
        const formData= new FormData();
        formData.append('name', txtname);
        formData.append('category', txtcategory);
        formData.append('quantity', txtquantity);
        formData.append('price',txtprice);
        formData.append('description',txtdescription);
        formData.append('image', fileimage);
        
        const responce= await axios.post("http://127.0.0.1:8000/api/products", formData, {
            headers:{'Content-Type':"multipart/form-data"},
        } );
 
        if(responce)
        {
            console.log(responce)
            setMessage(responce.message); //"message": "Product successfully created."
            setTimeout(()=>{
                navigate('/productlist');
            }, 2000);
        }
    }
 
    const handleSubmit= async(e)=>{
      e.preventDefault();
      await uploadProduct();
 
   }

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
                 
                    <form onSubmit={ handleSubmit} className="box-shadow form">   
                         <h5 className="mb-4">ADD PRODUCT</h5> 
                    <div className="mb-3 row">
                    <label  className="col-sm-3">Product</label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" onChange={ (e)=>setName(e.target.value)}/>
                    </div>
                    </div>

                     <div className="mb-3 row">
                    <label  className="col-sm-3">Category</label>
                    <div className="col-sm-9">
              
                    <select onChange={ (e)=>setCategory(e.target.value)} >
                        <option>--Select--</option>
                    {
                       categorylist.map((cdata, index)=>(
                           
                            <option key={cdata.id} value={cdata.name}>
                                {cdata.name}
                            </option>
                          ))
                    }
                    </select>
                    </div>
                    </div>

                     <div className="mb-3 row">
                    <label  className="col-sm-3">Quantity </label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" onChange={ (e)=>setQuantity(e.target.value)}/>
                    </div>
                    </div>

                     <div className="mb-3 row">
                    <label  className="col-sm-3">Price </label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" onChange={ (e)=>setPrice(e.target.value)}/>
                    </div>
                    </div>
 
                    <div className="mb-3 row">
                    <label  className="col-sm-3">Description </label>
                    <div className="col-sm-9">
                    <input type="text" className="form-control" onChange={(e)=>setdescription(e.target.value)}  />
                    </div>
                    </div>
 
                    <div className="mb-3 row">
                    <label  className="col-sm-3">Product Image</label>
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
export default Addproduct;