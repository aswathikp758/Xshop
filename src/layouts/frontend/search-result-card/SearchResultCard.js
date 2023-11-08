/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from 'react'
import '../search-result-card/searchresultcards.styles.css';
import { Link } from 'react-router-dom';
import '../../../assets/frontend/css/slide.css'
// import { Link } from 'react-router-dom';

const SearchResultCard = ( {bookData}) => {

  return (

            <div className='container-fluid mt-5 '>
                 <div className="row ">
                       
        <div className="card" style={{'max-width': '100%'}}>
        <div className="row no-gutters">
            <div className="col-sm-5" >
             <img src={`http://127.0.0.1:8000/public/Image/${bookData.image}`} alt="" height={200} width={200} />
            </div>
            <div className="col-sm-7 bg-color">
                <div className="card-body">
                    <h5 className="card-title">{bookData.name}</h5>
                    <p className="card-text">{bookData.description }</p>
                    <p className="card-text">₹{bookData.price }</p>
                     <Link to={`/addtocart/${bookData.id}/cart`} className='btn btn-success'>Add to Cart</Link>
                </div>
            </div>
        </div>
    </div>
             </div>  
            </div>
 
  )
}

export default SearchResultCard