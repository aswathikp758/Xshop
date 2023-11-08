import React, { useState } from 'react'
import Navbar from '../../../layouts/frontend/Navbar'
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [loginInput,setLogin]=useState({
    email:'',
    password:'',
    error_list:[],
  });
  const handleInput=(e)=>{
    e.preventDefault();
    setLogin({...loginInput,[e.target.name]:e.target.value});
  }
  
  const loginSubmit=(e)=>{
    e.preventDefault();
    const data={
        email:loginInput.email,
        password:loginInput.password,
    }
    axios.post('http://127.0.0.1:8000/api/login',data).then(res=>{
         if(res.data.status===200)
         {
          localStorage.setItem('auth_token',res.data.token); 
          localStorage.setItem('auth_name',res.data.username);  
          localStorage.setItem('auth_id',res.data.userid);  
          swal("Success",res.data.message,"Success");
       
                if(res.data.username==="admin")
                {
                    navigate('/admin');  
                }
                else
                {
                    navigate('/'); 
                }
         }
         else if(res.data.status===401)
         {

         }
         else{
            setLogin({...loginInput,error_list:res.data.validation_errors});
         }
    })
  } 



  return (
    <div>
        <Navbar/>
        <div className='container py-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                   <div className='card'>
                    <div className='card-header'>
                        <h1>Login</h1>
                    </div>
                    <div className='card-body'>
                        <form method='post' onSubmit={loginSubmit}>
                            
                             <div className='form-group mb-3'>
                                <label>Email</label>
                                <input type="email" required name="email" className='form-control' onChange={handleInput} value={loginInput.email}/>
                                 <span>{loginInput.error_list.email}</span> 
                            </div>
                             <div className='form-group mb-3'>
                                <label>Password</label>
                                <input type="password" required name="password" className='form-control' onChange={handleInput} value={loginInput.password}/>
                                  <span>{loginInput.error_list.password}</span> 
                            </div>
                            
                             <div className='form-group mb-3'>
                               <button type='submit' className='btn btn-primary'>Login</button>
                            </div>
                        </form>
                    </div>
                   </div>
                </div>

            </div>

        </div> 
        </div>
  )
}
