import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../cart/CartContextProvider';
import { useQuery } from 'react-query';
import './Navbar.css'
import { UserContext } from '../context/User';
function Navbar() {
  const {getCartContext}=useContext(CartContext);
  let {userToken,setUserToken}=useContext(UserContext)
  let navigate=useNavigate();
  const getCart = async () => {
    const  res = await getCartContext();
    console.log(res);
    return res;
}
  const { data, isLoading } = useQuery('getCart_details', getCart)

  const signout=() =>{
    setUserToken(null);
    localStorage.removeItem("userToken");
    console.log(userToken);
    navigate('/home');
  }
  console.log(data?.count);

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
     <li className="nav-item px-4">
          <Link className="nav-link text-white position-relative"  to="/cart"><FontAwesomeIcon className='mx-3' icon={faCartShopping} />
          <span className='bg-warning text-dark rounded rounded-5 position-absolute cart-count px-2'>{data?.count}</span></Link>
        </li>
 <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul className="dropdown-menu bg-dark">
            {userToken==null? <> 
             <li><Link className="dropdown-item text-white"  to="/register"> Register</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item text-white" to="/login">Login</Link></li> 
            </> : <>
            <li><Link className="dropdown-item text-white"  to="/profile"> Profile</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item text-white"   onClick={()=>signout()}>Sign out</Link></li>
            </> }
           

            

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