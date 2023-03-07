import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-lg bg-info bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Checkout</Link>
                <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item me-2">
                            <Link className="nav-link" style={{ color: "chocolate" }} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link" style={{ color: "chocolate" }} to="/new-product">New Product</Link>
                        </li>
                        <li className="nav-item me-2">
                            <Link className="nav-link" style={{ color: "chocolate" }} to="/product-list">Product List</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{ color: "chocolate" }} to="/about">About</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar