import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-dark ">
  <div className="container">
    <Link className="navbar-brand text-white" to="/home">W-SHOP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2   m-auto mb-lg-0">
        <li className="nav-item px-4">
          <Link className="nav-link active text-white" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item px-4">
          <Link className="nav-link text-white "  to="/categories">Categories</Link>
        </li>
        <li className="nav-item px-4">
          <Link className="nav-link text-white"  to="/products">Products</Link>
        </li>
       
        
      </ul>

     <ul className="navbar-nav  mb-2 mb-lg-0 ">
 <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu bg-dark">
            <li><Link className="dropdown-item text-white"  to="/register"> Register</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item text-white" to="/login">Login</Link></li>
          </ul>
        </li>
     </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar