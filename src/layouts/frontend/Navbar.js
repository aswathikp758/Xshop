import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import one from '../../assets/frontend/img/Phoenix.png'
import u1 from '../../assets/frontend/img/u1.png'
import p1 from '../../assets/frontend/img/p1.png'
import w1 from '../../assets/frontend/img/w1.png'
import '../../assets/frontend/css/slide.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import {motion} from 'framer-motion'

export default function Navbar() {
 const navigate = useNavigate();
  const logoutSubmit=(e)=>{
    e.preventDefault();

     localStorage.removeItem('auth_token');
     localStorage.removeItem('auth_name');
     localStorage.removeItem('auth_id');
     navigate('/')
      //  window.location.reload()
  } 
  const isLoggedIn = localStorage.getItem('auth_name');
  return (
    <motion.div className="title"
    initial={{y: -250}}
     animate={{y:-1}}
    transition={{delay:0.2,type:'spring',stiffness:70}}  >
    
       {isLoggedIn
        ? <nav  className="navbar navbar-expand-md navbar-dark navbar-bg justify-content-center">
            <img src={one} alt='' height={70} width={70}/>
       <Link to="#"  className="navbar-brand mt-2"><h4>XshopEs</h4></Link>
        <button type="button"  className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span  className="navbar-toggler-icon"></span>
        </button>
        <div  className="collapse navbar-collapse ml-5" id="navbarCollapse">
           <div  className="navbar-nav ">
               <Link to="/"  className="nav-item nav-link active"><h6>Home</h6></Link>
               <Link to="/about"  className="nav-item nav-link"><h6>About</h6></Link>
               <Link to="/collection"  className="nav-item nav-link"><h6>Collections</h6></Link>
               <Link to="/contact"  className="nav-item nav-link"><h6>Contact</h6></Link>
            </div>
              <form  className="form-inline ml-auto ">
                <label className='text-white mr-5'>
                  <Link to="/viewcart">
                  <img src={p1} alt='' width={30} height={30} className='mr-2'/></Link>
                   <img src={w1} alt='' width={30} height={30} className='mr-2'/>
                  <img src={u1} alt='' width={30} height={30}/><span className='font-weight-bold'>{localStorage.getItem('auth_name')}</span> </label>
                  <div><button type="submit"  className="btn btn-warning mr-5" onClick={logoutSubmit}>Logout</button></div>
                
            </form>
        </div>
    </nav>
        :  <nav  className="navbar navbar-expand-md navbar-dark navbar-bg justify-content-center sticky-top">
            <img src={one} alt='' height={70} width={70}/>
       <Link to="#"  className="navbar-brand mt-2"><h4>XshopEs</h4></Link>
        <button type="button"  className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span  className="navbar-toggler-icon"></span>
        </button>
        <div  className="collapse navbar-collapse ml-5" id="navbarCollapse">
           <div  className="navbar-nav ">
               <Link to="/"  className="nav-item nav-link active"><h6>Home</h6></Link>
               <Link to="/about"  className="nav-item nav-link"><h6>About</h6></Link>
               <Link to="/collection"  className="nav-item nav-link"><h6>Collections</h6></Link>
               <Link to="/contact"  className="nav-item nav-link"><h6>Contact</h6></Link>
            </div>
              <form  className="form-inline ml-auto ">
                <label className='text-white mr-5'>
                  <Link to=''>
                  <img src={p1} alt='' width={30} height={30} className='mr-2'/></Link>
                   <img src={w1} alt='' width={30} height={30} className='mr-2'/>
                  <img src={u1} alt='' width={30} height={30}/></label>
                  <Link to={'/register'} className='btn btn-warning mr-1'>Signup</Link>
                   <Link to={'/login'} className='btn btn-warning mr-5'>Login</Link>
            </form>
        </div>
    </nav>
      }      
    </motion.div>
  )
}
