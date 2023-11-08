import React, {  } from "react";
import Navbar from '../../layouts/admin/Navbar';
import Sidebar from '../../layouts/admin/Sidebar';
import Footer from '../../layouts/admin/Footer';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts.js';



function Home()
{
    return(
        <React.Fragment>
          <div>
            <Navbar/>
    
           <div id="layoutSidenav">
                
            <div id="layoutSidenav_nav">
                   <Sidebar/>
            </div>
             <div id="layoutSidenav_content">
              <div className="box-shadow">
                <h1 className="multicolor-text">Welcome To Admin Dashboard </h1>
              </div>
             
             
            </div>
           
               
          </div>
        </div>
        </React.Fragment>
    );
}
export default Home;