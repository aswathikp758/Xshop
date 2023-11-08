import React, { useState } from 'react'

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../../layouts/frontend/Navbar';

export default function Register() {

    const navigate = useNavigate();
    const [registerInput,setRegister]=useState({
        name:"",
        email:"",
        password:"",
        error_list:[],
    });
    const handleInput=(e)=>{
         e.preventDefault();
        setRegister({...registerInput,[e.target.name]:e.target.value});
    }

    const registerSubmit=(e)=>{
        e.preventDefault();

        const data={
            name:registerInput.name,
            email:registerInput.email,
            password:registerInput.password,

        }
          
            axios.post('http://127.0.0.1:8000/api/register',data).then(res=>{
              if(res.data.status===200)
              {
                    //   localStorage.setItem('auth_token',res.data.token); 
                    //   localStorage.setItem('auth_name',res.data.username);   
                    //success message
                     navigate('/login');             
              } 
              else
              {
                  setRegister({...registerInput,error_list:res.data.validation_errors});         
              }             
            });
    
        
    }






  return (
    <div>
        <Navbar/>
   
        <div className='container py-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                   <div className='card'>
                    <div className='card-header'>
                        <h1>Register</h1>
                    </div>
                    <div className='card-body'>
                        <form  method='post'>
                            <div className='form-group mb-3'>
                                <label>Full Name</label>
                                <input type='' name='name' required onChange={handleInput} value={registerInput.name} className='form-control' />
                                <span>{registerInput.error_list.name}</span> 
                            </div>
                             <div className='form-group mb-3'>
                                <label>Email</label>
                                <input type='' name='email' required onChange={handleInput} value={registerInput.email} className='form-control' />
                                <span>{registerInput.error_list.email}</span> 
                            </div>
                             <div className='form-group mb-3'>
                                <label>Password</label>
                                <input type='password' name='password' required onChange={handleInput} value={registerInput.password} className='form-control' />
                                <span>{registerInput.error_list.password}</span> 
                             </div>
                           
                             <div className='form-group mb-3'>
                               <input type='submit' className='btn btn-primary' onClick={registerSubmit}/>
                               <Link to={'/login'}>Login</Link>
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
