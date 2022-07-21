import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="header_container">

    <div className="navbar" >
        <h2>Your Challenge</h2>
        <ul>
            <li>
                <a href="/">Products</a>
                <a href="/">Download</a>
                <a href="/">Pricing</a>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Navbar