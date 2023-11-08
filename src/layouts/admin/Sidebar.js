import React from 'react'
import {Link} from 'react-router-dom'
export default function Sidebar() {
  return (
     <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <Link className="nav-link" to="/admin">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </Link>
                            <Link className="nav-link" to="/addcategory">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Add Category
                            </Link>
                             <Link className="nav-link" to="/categorylist">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                View Category
                            </Link>
                            <div className="sb-sidenav-menu-heading">Interface</div>
                            <Link className="nav-link collapsed" to="/addproduct" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Add Products
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </Link>
                          
                            <Link className="nav-link collapsed" to="/productlist" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                Product List
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </Link>
                           
                            <div className="sb-sidenav-menu-heading">Addons</div>
                            <Link className="nav-link" to="/view_confirmorder">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Order Details
                            </Link>
                            <Link className="nav-link" to="tables.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                Logout
                            </Link>
                        </div>
                    </div>
                   
                </nav>
  )
}

