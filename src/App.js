import React, {  } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './component/admin/Header';
import Home from './component/admin/Home';
import HomePage from './component/frontend/HomePage';
import Addproduct from './component/admin/Product/Addproduct';
import Productlist from './component/admin/Product/Productlist';
import EditProduct from './component/admin/Product/EditProduct';
import Addcategory from "./component/admin/Category/Addcategory";
import Categorylist from "./component/admin/Category/Categorylist";
import EditCategory from "./component/admin/Category/EditCategory";
import Register from "./component/frontend/auth/Register";
import Login from "./component/frontend/auth/Login";
import Collection from "./component/frontend/Collection";
import About from "./component/frontend/About";
import SubCart from "./layouts/frontend/SubCart";
import CartPage from "./layouts/frontend/CartPage";
import Contact from "./component/frontend/Contact";
import ProductSearch from "./layouts/frontend/ProductSearch";
import SearchPage from './layouts/frontend/searchpage/SearchPage'
import BooksPage from "./layouts/frontend/bookspage/BooksPage";
import Purchase from "./layouts/frontend/Purchase";
import Confirmlist from "./component/admin/Cart/Confirmlist";



function App() {
  return (
    <div className="App">
        <Router>
            {/* <Header/> */}
            <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>   


              <Route exact path="/admin" element={<Home/>}/>
               
              <Route exact path="/addproduct" element={<Addproduct/>}/>
              <Route exact path="/productlist" element={<Productlist/>}/> 
              <Route path="editproduct/:id/edit" element={<EditProduct />} />
              <Route exact path="/addcategory" element={<Addcategory/>}/>
              <Route exact path="/categorylist" element={<Categorylist/>}/> 
              <Route path="editcategory/:id/edit" element={<EditCategory />} />


               <Route exact path="/" element={<HomePage/>}/>
               <Route exact path="/register" element={<Register/>}/>
               <Route exact path="/collection" element={<Collection/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
               <Route exact path="/about" element={<About/>}/>
               <Route path="addtocart/:id/cart" element={<SubCart/>} />
               {/* <Route path="confirmcart/:id/cart" element={<CartPage/>} /> */}
               <Route path="/viewcart" element={<CartPage/>} />
               
               <Route path="/productsearch" element={<ProductSearch/>} />
               <Route path="/search" element={<SearchPage/>}/>
                <Route path="/books" element={<BooksPage/>}/>
                 <Route path="purchasecart/:id/cart" element={<Purchase/>} />
                 
                 <Route path="/view_confirmorder" element={<Confirmlist/>} />


            </Routes>
           
        </Router>
        
 </div>
  );
}
 
export default App;