import React, { useContext } from 'react';
import { UserContext } from '../context/User';
import { CartContext } from '../cart/CartContextProvider';
import { useQuery } from 'react-query';
import axios from "axios"
import './Profile.css'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { OrderContext } from '../context/Orders';
function Profile() {
  let navigate=useNavigate();

    let {userToken,setUserToken,setUserData}=useContext(UserContext);
    let {order,getOrderContext}=useContext(OrderContext);
    // if(!userToken){
    //   navigate('/home');
    // }
    const getuser = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/user/profile` ,
        {headers:{Authorization:`Tariq__${userToken}`}});
        console.log(data);
         return data;
    }
  
    const { data, isLoading } = useQuery('getuser_details', getuser)
    if (isLoading) {
        return (
          <div className='container p-5'>
            <h3>Profile </h3>
            <div className="row py-4">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        )
      }
  return (
   
<div className="container emp-profile">
  <form method="post">
    <div className="row">
      <div className="col-md-4">
        <div className="profile-img">
          <img className=' rounded-2' src={data?.user?.image.secure_url} alt="profile image" />
          
        </div>
      </div>
      <div className="col-md-6">
        <div className="profile-head">
          <h5>
           {data?.user?.userName}
          </h5>
          <h6>
            Web Developer and Designer
          </h6>
          <p className="proile-rating">RANKINGS : <span>8/10</span></p>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <Link className="nav-link active" id="home-tab" data-toggle="tab" to="info" role="tab" aria-controls="home" aria-selected="true">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id="profile-tab" data-toggle="tab" to="contact" role="tab" aria-controls="profile" aria-selected="false">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-2">
        <input type="submit" className="profile-edit-btn" name="btnAddMore" defaultValue="Edit Profile" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="profile-work">
          <p>WORK LINK</p>
          <a href>Website Link</a><br />
          <a href>Bootsnipp Profile</a><br />
          <a href>Bootply Profile</a>
          <p>SKILLS</p>
          <a href>UIUX Designer</a><br />
          <a href>Web Designer</a><br />
          <a href>MERN</a><br />
          <a href>ASP.Net</a><br />
          <a href>PHP,JAVA SCRIPT</a><br />
        </div>
      </div>
      <div className="col-md-8">
        <Outlet></Outlet>
      </div>
      
    </div>
  </form>           
</div>



  )
}

export default Profile