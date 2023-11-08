import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import '../searchpage/searchpage.styles.css';
import SearchResultCard from '../search-result-card/SearchResultCard';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ab1 from  '../../../assets/frontend/img/ab1.webp'

export default function SearchPage() {

  const location=useLocation();
    const [searchResult,setSearchResult]=useState([]);
    const[product, setProduct]= useState([]);
     
    useEffect( ()=>{
        const getProduct= ()=>{
            fetch("http://127.0.0.1:8000/api/products")
            .then(res=>{ return res.json()})
            .then(response=>{ 
                console.log(response.products)
                setProduct(response.products)
                
            })
            .catch(error=>{ console.log(error)});
        }
        getProduct();
    },[]);
   
      useEffect(()=>{
          let searchValue=[];
          searchValue=product.filter((data)=>data.name.toLowerCase().includes(location.state.toLowerCase()));
          setSearchResult(searchValue);
        })
  return (
    <div>
       <Navbar/>
        <img src={ab1} alt='' className='img-fluid mt-5'/>

        <div className='container mt-3 '>
           
            {searchResult.map((result)=>(
                <SearchResultCard  bookData={result}/>
            ))}

        </div>
        <Footer/>
    </div>
  )
}
