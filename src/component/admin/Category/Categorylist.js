import React, { useState, useEffect } from "react";
 
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../../../layouts/admin/Navbar";
import Sidebar from "../../../layouts/admin/Sidebar";
import Footer from "../../../layouts/admin/Footer";
 
function Categorylist()
{ 
    const[categorylist, setCategorylist]= useState([]);
      const navigate = useNavigate();
     
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
  
   
    const deleteCategory = (id) => {
        axios.delete('http://127.0.0.1:8000/api/categorydelete/'+id).then(function(response){
            console.log(response.data);
            alert("Successfully Deleted");
            window.location.reload()
        }); 
      
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
            
            <div className="container container_overflow">
                <div className="row">
                    <div className="col-12">
                        <h5 className="mb-4">Category List</h5> 
                        <p className="text-danger"> </p>                 
                                <table className="table table-bordered">
                                <thead>
                                <tr>
                                <th scope="col">Sr.No</th>
                                <th scope="col">Product Title</th>
                                <th scope="col">Product Image</th>
                                <th scope="col" width="200">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        categorylist.map((cdata, index)=>(
                                            <tr key={index}>
                                            <td>{index+1 } </td>
                                            <td>{cdata.name } </td>

                                            
                                            <td><img src={`http://127.0.0.1:8000/public/Image/${cdata.image}`} alt="" height={50} width={90} /></td>
                                            
                                           
                                               
                                            
                                            <td>
                                                <Link to={`/editcategory/${cdata.id}/edit`} className="btn btn-success mx-2">Update</Link>
                                                <button onClick={() => deleteCategory(cdata.id)} className="btn btn-danger">Delete</button>
                                            </td>
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
export default Categorylist;