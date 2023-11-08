import React from 'react'
import { BsFacebook,BsLinkedin,BsWhatsapp,BsInstagram } from "react-icons/bs";
import {IoMdArrowDropright} from "react-icons/io";
import ScrollToTop from "react-scroll-to-top";

export default function Footer() {
  return (
    <div>
      <ScrollToTop smooth top="20"/>
        <section className='mt-5'>
         <div className='container-fluid bg-light pt-5 pb-5'>
            <div className='row'>
                <div className='col-lg-3 text-dark text-justify'>
                   
                
                 <ul className='text-secondary' type='none'>
                  <li className='text-dark'><h6>CUSTOMER</h6></li>
                  <li>HELP/FAQS</li>
                  <li>TRACK ORDER</li>
                  <li>SIZE GUIDE</li>
                  <li>BUYING GUIDE</li>
                  <li>HOW DO I SHOP</li>
                  <li>HOW DO I PAY</li>
                  <li>FIND PLACE WE DELIVER</li>
                  <li>STYLE HUB</li>

                 </ul>

                </div>
                <div className='col-lg-3 text-dark'>
                <ul className='text-secondary' type='none'>
                <li className='text-dark'><h6>STORE AND SITES</h6></li>  
                <li>ABOUT US</li>
                <li>CONTACT US</li>
                <li>CORPORATE SITE</li>
                <li>STORE LOCATOR</li>
                <li>CAREERS</li>
                <li>SITEMAP</li>
                </ul>

                </div>
                <div className='col-lg-3 text-dark'>
                    
                    <p>
                      <ul className='text-secondary' type='none'>
                      <li className='text-dark'><h6>POLICIES</h6></li> 
                      <li>TERMS OF USE</li>
                      <li>PRIVACY</li>
                      <li>DELIVERY POLICY</li>
                      <li>EXCHANGE & RETURNS</li>
                      
                      </ul>
                    </p>
                   
                </div>
                <div className='col-lg-3 text-dark'>
                    <h6>CONTACT US</h6>
                    <p className='text-secondary'>
                    3rd Floor, High Building
                    white Link Road , Near KYC
                    kerala, Kozhikode-673002

                    Phone: +13 67434543 , +13 6743567</p>
                    <p className='text-secondary'>Email: xshopesofficial@gmail.com
                    </p>
                     <div className='form-inline '><i className='mr-2'><h5><BsFacebook className='social-icon'/></h5></i><i className='mr-2'><h5><BsWhatsapp className='social-icon'/></h5></i>
                <i className='mr-2'><h5><BsLinkedin className='social-icon'/></h5></i><i className='mr-2'><h5><BsInstagram className='social-icon'/></h5></i></div>   
                  </div>
                  </div>
         </div>
         <div className='container-fluid copy-section bg-black'>
                    <p className='text-white pl-5 pt-4 '>&copy;2023<span className='text-danger'>XshopEs</span>.All Rights Reserved</p>
                </div>
            
           
             
         </section>
    </div>
  )
}
