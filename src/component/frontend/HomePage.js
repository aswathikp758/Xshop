import React, { useEffect, useState } from 'react'
import Navbar from '../../layouts/frontend/Navbar'
import Slide from '../../layouts/frontend/Slide'
import CardProduct from '../../layouts/frontend/CardProduct'
import Footer from '../../layouts/frontend/Footer'
import CategorySelect from '../../layouts/frontend/CategorySelect'
import Slideshow from '../../layouts/frontend/Slideshow'
import CartService from '../../layouts/frontend/CartService'
import TestiMonial from '../../layouts/frontend/Testimonial'
import BooksPage from '../../layouts/frontend/bookspage/BooksPage'

export default function HomePage() {
 return (
    <div>
     
         <Navbar/>
        <CategorySelect/>
        <Slide/>
        <Slideshow/>
        {/* <BooksPage/> */}
        <CardProduct/>
        <CartService/>
        <TestiMonial/>
        <Footer/>
        
        </div>
  )
}
