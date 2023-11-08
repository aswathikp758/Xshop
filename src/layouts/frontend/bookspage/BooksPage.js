import React from 'react'
import SearchInputForm from '../searchInputForm/SearchInputForm.js'
import CardProduct from '../CardProduct.js';

// import ProductListingAll from '../../components/layouts/productlistingall/ProductListingAll'
const BooksPage = () => {
  return (
    <section>
         <div className='search-container bg-warning jumbotron'>
        <h2 className='text-center'>Find the <span className='text-primary'>Product</span> that you want</h2>
          <SearchInputForm/>
      </div>
     <CardProduct/>
        </section>
  )
}

export default BooksPage;